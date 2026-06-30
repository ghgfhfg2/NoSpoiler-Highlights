import fs from "node:fs";
import https from "node:https";
import vm from "node:vm";

const ROOT = new URL("..", import.meta.url);
const PAGE_FILE = new URL("app/page-content.js", ROOT);
const SITE_FILE = new URL("public/site.js", ROOT);
const PAGE_JSX_FILE = new URL("app/page.jsx", ROOT);

const SLOTS = ["kbsGeneral", "kbsShort", "jtbcGeneral", "jtbcShort"];
const TODAY = new Date().toISOString().slice(0, 10);
const args = new Set(process.argv.slice(2));
const write = args.has("--write");
const debug = args.has("--debug");
const untilArg = process.argv.find((arg) => arg.startsWith("--until="));
const untilDate = untilArg ? untilArg.split("=")[1] : TODAY;
const versionArg = process.argv.find((arg) => arg.startsWith("--version="));
const nextVersion = versionArg ? versionArg.split("=")[1] : `links-${untilDate}`;

const teamAliases = {
  "남아프리카 공화국": ["남아프리카 공화국", "남아공"],
  "콩고민주공화국": ["콩고민주공화국", "콩코민주공화국"],
};

const chzzkGroups = {
  "group-a": 4838,
  "group-b": 4839,
  "group-c": 4840,
  "group-d": 4841,
  "group-e": 4842,
  "group-f": 4843,
  "group-g": 4858,
  "group-h": 4856,
  "group-i": 4863,
  "group-j": 4866,
  "group-k": 4870,
  "group-l": 4871,
};

function getText(url, accept = "application/json,text/plain,*/*") {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "user-agent": "Mozilla/5.0", accept } }, (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => resolve({ status: res.statusCode, body }));
      })
      .on("error", reject);
  });
}

function readMatches() {
  const html = fs.readFileSync(PAGE_FILE, "utf8");
  const site = fs.readFileSync(SITE_FILE, "utf8");
  const sectionRegex = /<article class="day-section group-section" id="([^"]+)">([\s\S]*?)<\/article>/g;
  const rowRegex = /<div class="match-row" data-game-id="([^"]+)" data-date="([^"]+)">([\s\S]*?)(?=\n\s*<div class="match-row"|$)/g;
  const matches = [];

  for (const section of html.matchAll(sectionRegex)) {
    const group = section[1];
    const body = section[2];

    for (const row of body.matchAll(rowRegex)) {
      const id = row[1];
      const date = row[2];
      const rowBody = row[3];
      const teams = [...rowBody.matchAll(/<span>([^<]+)<\/span>/g)]
        .map((match) => match[1])
        .filter((text) => text !== "vs");

      matches.push({
        id,
        date,
        group,
        teams,
        label: teams.join(" vs "),
      });
    }
  }

  return [...matches, ...readTournamentMatches(site)];
}

function readTournamentMatches(site) {
  const match = site.match(/const knockoutColumns = \{([\s\S]*?)\n\};/);
  if (!match) {
    return [];
  }

  const columns = vm.runInNewContext(`({${match[1]}\n})`);
  return Object.values(columns)
    .flat()
    .filter((game) => game.gameId && Array.isArray(game.teams) && !game.teams.includes("미정"))
    .map((game) => ({
      id: game.gameId,
      date: dateFromKoreanLabel(game.date),
      group: "tournament",
      teams: game.teams,
      label: game.teams.join(" vs "),
    }))
    .filter((game) => game.date);
}

function dateFromKoreanLabel(dateLabel) {
  const match = String(dateLabel).match(/(\d+)월\s+(\d+)일/);
  if (!match) {
    return "";
  }

  const month = match[1].padStart(2, "0");
  const day = match[2].padStart(2, "0");
  return `2026-${month}-${day}`;
}

function readHighlightLinks() {
  const site = fs.readFileSync(SITE_FILE, "utf8");
  const match = site.match(/const highlightLinks = \{([\s\S]*?)\n\};/);
  if (!match) {
    throw new Error("Could not find highlightLinks block.");
  }

  const links = vm.runInNewContext(`({${match[1]}\n})`);
  return { site, block: match[0], links };
}

function aliasesFor(team) {
  return teamAliases[team] || [team];
}

function titleHasTeam(title, team) {
  return aliasesFor(team).some((alias) => title.includes(alias));
}

function titleMatchesTeams(title, teams) {
  return teams.every((team) => titleHasTeam(title, team));
}

function broadcasterFrom(title, channelName) {
  const source = `${title} ${channelName}`;
  if (/JTBC/i.test(source)) return "jtbc";
  if (/KBS/i.test(source)) return "kbs";
  return "";
}

function classifyVideo(video, match) {
  const title = video.title || "";
  const channelName = video.channelName || "";
  const divisionName = video.divisionName || "";

  if (!titleMatchesTeams(title, match.teams) || !title.includes("하이라이트")) {
    return { slots: [], reason: "not-match" };
  }

  const broadcaster = broadcasterFrom(title, channelName);
  const isShort = title.includes("2분 하이라이트");
  const isGeneral =
    !isShort &&
    /하이라이트/.test(title) &&
    !/(3분|전반|후반|골\s*모음|골모음|주요장면)/.test(title);
  const isFullHighlightClip = /전체 하이라이트/.test(divisionName) || /3분 하이라이트/.test(title);

  if (!broadcaster) {
    return { slots: [], reason: "unknown-broadcaster" };
  }

  if (isShort) {
    return { slots: [`${broadcaster}Short`], reason: "confirmed" };
  }

  if (isGeneral) {
    return { slots: [`${broadcaster}General`], reason: "confirmed" };
  }

  if (isFullHighlightClip) {
    return { slots: [`${broadcaster}General`, `${broadcaster}Short`], reason: "confirmed" };
  }

  return { slots: [], reason: "review" };
}

function naverVideoUrl(video) {
  if (video.mobileUrl) return video.mobileUrl;
  if (video.sportsVideoId) return `https://m.sports.naver.com/video/${video.sportsVideoId}`;
  if (video.providerVid && /^\d+$/.test(String(video.providerVid))) {
    return `https://chzzk.naver.com/video/${video.providerVid}`;
  }
  return "";
}

async function fetchNaverVideos() {
  const url =
    "https://api-gw.sports.naver.com/video/recent-games/worldcup2026?size=30&videoPageSize=30&fields=all";
  const response = await getText(url);
  if (response.status !== 200) {
    throw new Error(`Naver video API failed: ${response.status} ${response.body.slice(0, 120)}`);
  }
  const json = JSON.parse(response.body);
  const games = json.result?.latestGameVideos || [];
  const byGame = new Map();

  for (const game of games) {
    byGame.set(
      game.gameId,
      (game.videos || []).map((video) => ({
        source: "naver",
        gameId: game.gameId,
        title: video.title || "",
        channelName: video.naverTvChannel?.channelName || video.channelName || "",
        divisionName: video.divisionName || "",
        url: naverVideoUrl(video),
      })),
    );
  }

  return byGame;
}

async function fetchChzzkVideos(groups) {
  const byGroup = new Map();

  for (const group of groups) {
    const componentId = chzzkGroups[group];
    if (!componentId) continue;

    const videos = [];
    for (let page = 0; page < 3; page += 1) {
      const url = `https://api.chzzk.naver.com/service/v1/manual-components/${componentId}/videos?sortType=LATEST&pagingType=PAGE&page=${page}&pageSize=100`;
      const response = await getText(url);
      if (response.status !== 200) {
        throw new Error(`CHZZK video API failed for ${group}: ${response.status} ${response.body.slice(0, 120)}`);
      }
      const json = JSON.parse(response.body);
      const pageVideos = json.content?.data?.videos || json.content?.videos || json.content?.data || [];
      if (!pageVideos.length) break;

      videos.push(
        ...pageVideos.map((video) => ({
          source: "chzzk",
          title: video.videoTitle || video.title || "",
          channelName: video.channel?.channelName || video.channelName || "",
          divisionName: "",
          url: video.videoNo ? `https://chzzk.naver.com/video/${video.videoNo}` : "",
        })),
      );
    }

    byGroup.set(group, videos);
  }

  return byGroup;
}

function mergeLinks(current, matches, naverByGame, chzzkByGroup) {
  const added = [];
  const review = [];
  const next = structuredClone(current);

  for (const match of matches) {
    if (match.date > untilDate) continue;

    const videos = [...(naverByGame.get(match.id) || []), ...(chzzkByGroup.get(match.group) || [])];
    next[match.id] ||= {};

    for (const video of videos) {
      if (!video.url) continue;

      const classification = classifyVideo(video, match);
      if (debug && match.date === untilDate && video.title.includes("하이라이트") && titleMatchesTeams(video.title, match.teams)) {
        console.log(
          `debug ${match.id} ${match.label} ${video.title} channel=${video.channelName} division=${video.divisionName} slots=${(classification.slots || []).join("|")} reason=${classification.reason}`,
        );
      }
      if (classification.reason === "review") {
        review.push({ match, video });
        continue;
      }

      const slot = classification.slots.find((candidate) => SLOTS.includes(candidate) && !next[match.id][candidate]);
      if (!slot) continue;

      next[match.id][slot] = video.url;
      added.push({
        match,
        slot,
        title: video.title,
        url: video.url,
        source: video.source,
      });
    }

    if (Object.keys(next[match.id]).length === 0) {
      delete next[match.id];
    }
  }

  return { next, added, review };
}

function quoteKey(key) {
  return /^[A-Za-z_$][\w$]*$/.test(key) ? key : JSON.stringify(key);
}

function formatLinks(links, matches) {
  const matchOrder = matches.map((match) => match.id);
  const orderedIds = [
    ...matchOrder.filter((id, index) => matchOrder.indexOf(id) === index && links[id]),
    ...Object.keys(links).filter((id) => !matchOrder.includes(id)),
  ];

  const lines = ["const highlightLinks = {"];
  for (const id of orderedIds) {
    lines.push(`  ${quoteKey(id)}: {`);
    for (const slot of SLOTS) {
      if (links[id][slot]) {
        lines.push(`    ${slot}: ${JSON.stringify(links[id][slot])},`);
      }
    }
    lines.push("  },");
  }
  lines.push("};");
  return lines.join("\n");
}

function updateSiteFile(site, oldBlock, newLinksBlock) {
  fs.writeFileSync(SITE_FILE, site.replace(oldBlock, newLinksBlock), "utf8");
}

function updateScriptVersion() {
  const page = fs.readFileSync(PAGE_JSX_FILE, "utf8");
  const updated = page.replace(/\/site\.js\?v=[^"]+/, `/site.js?v=${nextVersion}`);
  fs.writeFileSync(PAGE_JSX_FILE, updated, "utf8");
}

function missingReport(links, matches) {
  const rows = [];
  for (const match of matches) {
    if (match.date > untilDate) continue;
    const entry = links[match.id] || {};
    const missing = SLOTS.filter((slot) => !entry[slot]);
    if (missing.length) {
      rows.push(`${match.date} ${match.label}: ${missing.join(", ")}`);
    }
  }
  return rows;
}

const matches = readMatches();
const groups = [...new Set(matches.filter((match) => match.date <= untilDate).map((match) => match.group))];
const { site, block, links } = readHighlightLinks();
const [naverByGame, chzzkByGroup] = await Promise.all([fetchNaverVideos(), fetchChzzkVideos(groups)]);
const { next, added, review } = mergeLinks(links, matches, naverByGame, chzzkByGroup);

if (write && added.length) {
  updateSiteFile(site, block, formatLinks(next, matches));
  updateScriptVersion();
}

console.log(`until=${untilDate}`);
console.log(`mode=${write ? "write" : "dry-run"}`);
console.log(`added=${added.length}`);
for (const item of added) {
  console.log(`+ ${item.match.date} ${item.match.label} ${item.slot} [${item.source}] ${item.title} -> ${item.url}`);
}

const missing = missingReport(next, matches);
console.log(`missing=${missing.length}`);
for (const row of missing) {
  console.log(`- ${row}`);
}

const reviewHighlights = review.filter((item) => /3분 하이라이트|전체 하이라이트/.test(item.video.title)).slice(0, 20);
if (reviewHighlights.length) {
  console.log("reviewCandidates=");
  for (const item of reviewHighlights) {
    console.log(`? ${item.match.date} ${item.match.label} [${item.video.source}] ${item.video.title} -> ${item.video.url}`);
  }
}
