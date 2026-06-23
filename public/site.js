const DEFAULT_DATE = "2026-06-18";
const weekdayLabels = ["일", "월", "화", "수", "목", "금", "토"];

const viewTabs = Array.from(document.querySelectorAll(".view-tab"));
const dateScroller = document.querySelector("#dateScroller");
const dateMoveButtons = Array.from(document.querySelectorAll("[data-date-move]"));
const groupOverview = document.querySelector("#groups");
const groupTabs = document.querySelector(".group-tabs");
const groupButtons = Array.from(document.querySelectorAll("[data-group]"));
const groupCards = Array.from(document.querySelectorAll(".group-card"));
const groupSections = Array.from(document.querySelectorAll(".group-section"));
const matchRows = Array.from(document.querySelectorAll(".match-row"));
const scheduleSection = document.querySelector("#schedule");
const tournamentView = document.querySelector("#tournament");
const tournamentBracket = document.querySelector("#tournamentBracket");
const roundButtons = Array.from(document.querySelectorAll("[data-round]"));

const countryFlags = {
  "가나": "🇬🇭",
  "남아프리카 공화국": "🇿🇦",
  "네덜란드": "🇳🇱",
  "노르웨이": "🇳🇴",
  "뉴질랜드": "🇳🇿",
  "대한민국": "🇰🇷",
  "독일": "🇩🇪",
  "멕시코": "🇲🇽",
  "모로코": "🇲🇦",
  "미국": "🇺🇸",
  "벨기에": "🇧🇪",
  "보스니아 헤르체고비나": "🇧🇦",
  "브라질": "🇧🇷",
  "사우디아라비아": "🇸🇦",
  "세네갈": "🇸🇳",
  "스웨덴": "🇸🇪",
  "스위스": "🇨🇭",
  "스코틀랜드": "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
  "스페인": "🇪🇸",
  "아이티": "🇭🇹",
  "아르헨티나": "🇦🇷",
  "알제리": "🇩🇿",
  "에콰도르": "🇪🇨",
  "오스트리아": "🇦🇹",
  "요르단": "🇯🇴",
  "우루과이": "🇺🇾",
  "우즈베키스탄": "🇺🇿",
  "이라크": "🇮🇶",
  "이란": "🇮🇷",
  "이집트": "🇪🇬",
  "일본": "🇯🇵",
  "잉글랜드": "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}",
  "체코": "🇨🇿",
  "카보베르데": "🇨🇻",
  "카타르": "🇶🇦",
  "캐나다": "🇨🇦",
  "코트디부아르": "🇨🇮",
  "콜롬비아": "🇨🇴",
  "콩고민주공화국": "🇨🇩",
  "크로아티아": "🇭🇷",
  "퀴라소": "🇨🇼",
  "튀니지": "🇹🇳",
  "튀르키예": "🇹🇷",
  "파나마": "🇵🇦",
  "파라과이": "🇵🇾",
  "포르투갈": "🇵🇹",
  "프랑스": "🇫🇷",
  "호주": "🇦🇺",
};

const countryFlagCodes = {
  "가나": "gh",
  "남아프리카 공화국": "za",
  "네덜란드": "nl",
  "노르웨이": "no",
  "뉴질랜드": "nz",
  "대한민국": "kr",
  "독일": "de",
  "멕시코": "mx",
  "모로코": "ma",
  "미국": "us",
  "벨기에": "be",
  "보스니아 헤르체고비나": "ba",
  "브라질": "br",
  "사우디아라비아": "sa",
  "세네갈": "sn",
  "스웨덴": "se",
  "스위스": "ch",
  "스코틀랜드": "gb-sct",
  "스페인": "es",
  "아이티": "ht",
  "아르헨티나": "ar",
  "알제리": "dz",
  "에콰도르": "ec",
  "오스트리아": "at",
  "요르단": "jo",
  "우루과이": "uy",
  "우즈베키스탄": "uz",
  "이라크": "iq",
  "이란": "ir",
  "이집트": "eg",
  "일본": "jp",
  "잉글랜드": "gb-eng",
  "체코": "cz",
  "카보베르데": "cv",
  "카타르": "qa",
  "캐나다": "ca",
  "코트디부아르": "ci",
  "콜롬비아": "co",
  "콩고민주공화국": "cd",
  "크로아티아": "hr",
  "퀴라소": "cw",
  "튀니지": "tn",
  "튀르키예": "tr",
  "파나마": "pa",
  "파라과이": "py",
  "포르투갈": "pt",
  "프랑스": "fr",
  "호주": "au",
};

function getFlagUrl(countryName) {
  const code = countryFlagCodes[countryName];
  return code ? `https://flagcdn.com/w40/${code}.png` : "";
}

const highlightLinks = {
  vOF6lBRsXz1F5oA: {
    kbsGeneral: "https://m.sports.naver.com/video/1476579",
    kbsShort: "https://chzzk.naver.com/video/13663800",
    jtbcGeneral: "https://chzzk.naver.com/video/13663676",
    jtbcShort: "https://chzzk.naver.com/video/13663718",
  },
  uXjHKp1mIi7YXYT: {
    kbsGeneral: "https://chzzk.naver.com/video/13665774",
    kbsShort: "https://chzzk.naver.com/video/13666520",
    jtbcGeneral: "https://chzzk.naver.com/video/13666274",
    jtbcShort: "https://chzzk.naver.com/video/13666298",
  },
  KIVirGXodQcoceb: {
    kbsGeneral: "https://chzzk.naver.com/video/13680723",
    kbsShort: "https://chzzk.naver.com/video/13680774",
    jtbcGeneral: "https://chzzk.naver.com/video/13680813",
    jtbcShort: "https://chzzk.naver.com/video/13680915",
  },
  TJtN0fa0NfhltQ5: {
    kbsGeneral: "https://chzzk.naver.com/video/13682346",
    kbsShort: "https://chzzk.naver.com/video/13682419",
    jtbcGeneral: "https://chzzk.naver.com/video/13682431",
    jtbcShort: "https://chzzk.naver.com/video/13682558",
  },
  FJRqtfmBoTdBXNg: {
    kbsGeneral: "https://chzzk.naver.com/video/13697798",
    kbsShort: "https://chzzk.naver.com/video/13697847",
    jtbcGeneral: "https://chzzk.naver.com/video/13697795",
    jtbcShort: "https://chzzk.naver.com/video/13698182",
  },
  WJvkiieR0dyXSS6: {
    kbsGeneral: "https://chzzk.naver.com/video/13698595",
    kbsShort: "https://chzzk.naver.com/video/13698598",
    jtbcGeneral: "https://chzzk.naver.com/video/13698656",
    jtbcShort: "https://chzzk.naver.com/video/13698671",
  },
  pIp2kdwzMZgXLL1: {
    kbsGeneral: "https://chzzk.naver.com/video/13699399",
    kbsShort: "https://chzzk.naver.com/video/13699425",
    jtbcGeneral: "https://m.sports.naver.com/video/1478214",
    jtbcShort: "https://chzzk.naver.com/video/13699335",
  },
  VoHp2XmHFXpgZCt: {
    kbsGeneral: "https://chzzk.naver.com/video/13700617",
    kbsShort: "https://chzzk.naver.com/video/13700621",
    jtbcGeneral: "https://chzzk.naver.com/video/13700637",
    jtbcShort: "https://chzzk.naver.com/video/13700742",
  },
  Ifh0hBPenOr1rjY: {
    kbsGeneral: "https://chzzk.naver.com/video/13713393",
    kbsShort: "https://chzzk.naver.com/video/13713449",
    jtbcGeneral: "https://chzzk.naver.com/video/13713371",
    jtbcShort: "https://chzzk.naver.com/video/13713377",
  },
  QkMQhJ6yLHhg0bx: {
    kbsGeneral: "https://chzzk.naver.com/video/13714383",
    kbsShort: "https://chzzk.naver.com/video/13714400",
    jtbcGeneral: "https://chzzk.naver.com/video/13714387",
    jtbcShort: "https://chzzk.naver.com/video/13714411",
  },
  OsnjyKUbPniDfDS: {
    kbsGeneral: "https://chzzk.naver.com/video/13714995",
    kbsShort: "https://chzzk.naver.com/video/13715023",
    jtbcGeneral: "https://chzzk.naver.com/video/13714960",
    jtbcShort: "https://chzzk.naver.com/video/13714957",
  },
  dtl3BItiCgnSfPs: {
    kbsGeneral: "https://chzzk.naver.com/video/13715746",
    kbsShort: "https://chzzk.naver.com/video/13715737",
    jtbcGeneral: "https://chzzk.naver.com/video/13716097",
    jtbcShort: "https://chzzk.naver.com/video/13715819",
  },
  s9yioxVSFTsDuE3: {
    kbsGeneral: "https://chzzk.naver.com/video/13727632",
    kbsShort: "https://chzzk.naver.com/video/13727733",
    jtbcGeneral: "https://chzzk.naver.com/video/13727569",
    jtbcShort: "https://chzzk.naver.com/video/13727673",
  },
  "3WYkOMV89drpqi4": {
    kbsGeneral: "https://chzzk.naver.com/video/13728827",
    kbsShort: "https://chzzk.naver.com/video/13728838",
    jtbcGeneral: "https://chzzk.naver.com/video/13728955",
    jtbcShort: "https://chzzk.naver.com/video/13728891",
  },
  eKXKE9P6yI0RsMY: {
    kbsGeneral: "https://chzzk.naver.com/video/13729432",
    kbsShort: "https://chzzk.naver.com/video/13729442",
    jtbcGeneral: "https://chzzk.naver.com/video/13729415",
    jtbcShort: "https://chzzk.naver.com/video/13729412",
  },
  xibNM7diOb8ENsl: {
    kbsGeneral: "https://chzzk.naver.com/video/13730118",
    kbsShort: "https://chzzk.naver.com/video/13730101",
    jtbcGeneral: "https://chzzk.naver.com/video/13730200",
    jtbcShort: "https://chzzk.naver.com/video/13730148",
  },
  H81w6HIySlzx9tD: {
    kbsGeneral: "https://chzzk.naver.com/video/13744213",
    kbsShort: "https://chzzk.naver.com/video/13744279",
    jtbcGeneral: "https://chzzk.naver.com/video/13744157",
    jtbcShort: "https://chzzk.naver.com/video/13744216",
  },
  SgknC8CDlaxEYog: {
    kbsGeneral: "https://chzzk.naver.com/video/13744852",
    kbsShort: "https://m.naver.com/shorts/?mediaId=69EED4CEDA3F0B88987DBACCCDEAFCDBE11C&serviceType=CHZZK&recType=AIRS",
    jtbcGeneral: "https://chzzk.naver.com/video/13744863",
    jtbcShort: "https://chzzk.naver.com/video/13744893",
  },
  hDIOhfv2CJz8Zx0: {
    kbsGeneral: "https://chzzk.naver.com/video/13745694",
    kbsShort: "https://chzzk.naver.com/video/13745704",
    jtbcGeneral: "https://chzzk.naver.com/video/13745669",
    jtbcShort: "https://chzzk.naver.com/video/13745641",
  },
  FMP897MOxWWWHKr: {
    kbsGeneral: "https://chzzk.naver.com/video/13746860",
    kbsShort: "https://chzzk.naver.com/video/13746841",
    jtbcGeneral: "https://chzzk.naver.com/video/13746888",
  },
  umdBVpCfddNXbRK: {
    kbsGeneral: "https://chzzk.naver.com/video/13759574",
    kbsShort: "https://chzzk.naver.com/video/13759619",
    jtbcGeneral: "https://m.sports.naver.com/video/1480778",
    jtbcShort: "https://chzzk.naver.com/video/13759652",
  },
  "5P8tR6X0pIJzUf2": {
    kbsGeneral: "https://chzzk.naver.com/video/13760533",
    kbsShort: "https://chzzk.naver.com/video/13760596",
    jtbcGeneral: "https://chzzk.naver.com/video/13760610",
    jtbcShort: "https://chzzk.naver.com/video/13760647",
  },
  ufkw1gIqXikWZ3N: {
    kbsGeneral: "https://chzzk.naver.com/video/13761295",
    kbsShort: "https://chzzk.naver.com/video/13761334",
    jtbcGeneral: "https://chzzk.naver.com/video/13761281",
    jtbcShort: "https://chzzk.naver.com/video/13761266",
  },
  BYCgQlgy6OZhsUo: {
    kbsGeneral: "https://chzzk.naver.com/video/13762244",
    kbsShort: "https://chzzk.naver.com/video/13762233",
    jtbcGeneral: "https://chzzk.naver.com/video/13762270",
    jtbcShort: "https://chzzk.naver.com/video/13762277",
  },
  fP94EzqwwoBTTgx: {
    kbsGeneral: "https://chzzk.naver.com/video/13775345",
    kbsShort: "https://chzzk.naver.com/video/13775375",
    jtbcGeneral: "https://chzzk.naver.com/video/13775195",
    jtbcShort: "https://chzzk.naver.com/video/13775274",
  },
  l48mfcapdDIm7Wv: {
    kbsGeneral: "https://chzzk.naver.com/video/13779324",
    kbsShort: "https://chzzk.naver.com/video/13779204",
    jtbcGeneral: "https://chzzk.naver.com/video/13779536",
    jtbcShort: "https://chzzk.naver.com/video/13779574",
  },
  "5jQr4NijL9QmJXK": {
    kbsGeneral: "https://chzzk.naver.com/video/13776728",
    kbsShort: "https://chzzk.naver.com/video/13776757",
    jtbcGeneral: "https://chzzk.naver.com/video/13776758",
    jtbcShort: "https://chzzk.naver.com/video/13776765",
  },
  iNgpxWlJ8iw9wfs: {
    kbsGeneral: "https://chzzk.naver.com/video/13777465",
    kbsShort: "https://chzzk.naver.com/video/13777813",
    jtbcGeneral: "https://chzzk.naver.com/video/13777438",
    jtbcShort: "https://chzzk.naver.com/video/13777445",
  },
  otm3ifUAdXj3aXP: {
    kbsGeneral: "https://chzzk.naver.com/video/13794991",
    kbsShort: "https://chzzk.naver.com/video/13794997",
    jtbcGeneral: "https://chzzk.naver.com/video/13795010",
    jtbcShort: "https://chzzk.naver.com/video/13795014",
  },
  Dyi3OzF4bEkPuMV: {
    kbsGeneral: "https://chzzk.naver.com/video/13795633",
    kbsShort: "https://chzzk.naver.com/video/13795845",
    jtbcGeneral: "https://chzzk.naver.com/video/13795597",
    jtbcShort: "https://chzzk.naver.com/video/13795605",
  },
  ou4io4NCCPSN4Jx: {
    kbsGeneral: "https://chzzk.naver.com/video/13796288",
    kbsShort: "https://chzzk.naver.com/video/13796302",
    jtbcGeneral: "https://chzzk.naver.com/video/13796304",
    jtbcShort: "https://chzzk.naver.com/video/13796327",
  },
  "5q4yP11gesyrHQr": {
    kbsGeneral: "https://chzzk.naver.com/video/13797425",
    kbsShort: "https://chzzk.naver.com/video/13797460",
    jtbcGeneral: "https://chzzk.naver.com/video/13797374",
    jtbcShort: "https://chzzk.naver.com/video/13797421",
  },
  QKdN2ITC52hh1jF: {
    kbsGeneral: "https://chzzk.naver.com/video/13810863",
    kbsShort: "https://chzzk.naver.com/video/13810930",
    jtbcGeneral: "https://chzzk.naver.com/video/13810944",
    jtbcShort: "https://chzzk.naver.com/video/13810956",
  },
  W8lLkE0hMingEkM: {
    kbsGeneral: "https://chzzk.naver.com/video/13812328",
    kbsShort: "https://chzzk.naver.com/video/13812343",
    jtbcGeneral: "https://chzzk.naver.com/video/13812303",
    jtbcShort: "https://chzzk.naver.com/video/13812384",
  },
  zVkD5dfQ6RT4brI: {
    kbsGeneral: "https://chzzk.naver.com/video/13813191",
    kbsShort: "https://chzzk.naver.com/video/13813201",
    jtbcGeneral: "https://chzzk.naver.com/video/13813214",
    jtbcShort: "https://chzzk.naver.com/video/13813257",
  },
  ehugrhy9qHByIrP: {
    kbsGeneral: "https://chzzk.naver.com/video/13814922",
    kbsShort: "https://chzzk.naver.com/video/13814932",
    jtbcGeneral: "https://chzzk.naver.com/video/13814841",
    jtbcShort: "https://chzzk.naver.com/video/13814855",
  },
  LW8XGOed83I9F61: {
    kbsGeneral: "https://chzzk.naver.com/video/13827064",
    kbsShort: "https://chzzk.naver.com/video/13827155",
    jtbcGeneral: "https://chzzk.naver.com/video/13827138",
    jtbcShort: "https://chzzk.naver.com/video/13827239",
  },
  gcc6Fu3e2LqWVet: {
    kbsGeneral: "https://chzzk.naver.com/video/13828592",
    kbsShort: "https://chzzk.naver.com/video/13828660",
    jtbcGeneral: "https://chzzk.naver.com/video/13828559",
    jtbcShort: "https://chzzk.naver.com/video/13828615",
  },
  "66ngsptIPI18Ie0": {
    kbsGeneral: "https://chzzk.naver.com/video/13829965",
    kbsShort: "https://chzzk.naver.com/video/13830038",
    jtbcGeneral: "https://chzzk.naver.com/video/13829909",
    jtbcShort: "https://chzzk.naver.com/video/13829896",
  },
  g6yqVZylEBXe8jV: {
    kbsGeneral: "https://chzzk.naver.com/video/13829265",
    kbsShort: "https://chzzk.naver.com/video/13829250",
    jtbcGeneral: "https://chzzk.naver.com/video/13829279",
    jtbcShort: "https://chzzk.naver.com/video/13829310",
  },
  ukQo5BMsXYKNC4S: {
    kbsGeneral: "https://chzzk.naver.com/video/13842690",
    kbsShort: "https://chzzk.naver.com/video/13842781",
    jtbcGeneral: "https://chzzk.naver.com/video/13842853",
    jtbcShort: "https://chzzk.naver.com/video/13842864",
  },
};

const highlightLinkSlots = [
  ["kbsGeneral", "KBS2 일반"],
  ["kbsShort", "KBS2 숏"],
  ["jtbcGeneral", "JTBC 일반"],
  ["jtbcShort", "JTBC 숏"],
];

const knockoutColumns = {
  r32: [
    { date: "6월 29일 (월)", time: "04:00", label: "32강 1경기" },
    { date: "6월 30일 (화)", time: "10:00", label: "32강 2경기" },
    { date: "6월 30일 (화)", time: "05:30", label: "32강 3경기" },
    { date: "7월 1일 (수)", time: "06:00", label: "32강 4경기" },
    { date: "7월 3일 (금)", time: "04:00", label: "32강 5경기" },
    { date: "7월 3일 (금)", time: "08:00", label: "32강 6경기" },
    { date: "7월 2일 (목)", time: "05:00", label: "32강 7경기" },
    { date: "7월 2일 (목)", time: "09:00", label: "32강 8경기" },
    { date: "7월 1일 (수)", time: "10:00", label: "32강 9경기" },
    { date: "7월 4일 (토)", time: "04:00", label: "32강 10경기" },
    { date: "7월 4일 (토)", time: "08:00", label: "32강 11경기" },
    { date: "7월 4일 (토)", time: "10:00", label: "32강 12경기" },
    { date: "6월 29일 (월)", time: "08:00", label: "32강 13경기" },
    { date: "6월 29일 (월)", time: "11:00", label: "32강 14경기" },
    { date: "6월 30일 (화)", time: "02:00", label: "32강 15경기" },
    { date: "7월 1일 (수)", time: "02:00", label: "32강 16경기" },
  ],
  r16: [
    { date: "7월 5일 (일)", time: "02:00", label: "16강 1경기" },
    { date: "7월 5일 (일)", time: "06:00", label: "16강 2경기" },
    { date: "7월 6일 (월)", time: "04:00", label: "16강 3경기" },
    { date: "7월 6일 (월)", time: "08:00", label: "16강 4경기" },
    { date: "7월 7일 (화)", time: "04:00", label: "16강 5경기" },
    { date: "7월 7일 (화)", time: "09:00", label: "16강 6경기" },
    { date: "7월 8일 (수)", time: "04:00", label: "16강 7경기" },
    { date: "7월 8일 (수)", time: "08:00", label: "16강 8경기" },
  ],
  qf: [
    { date: "7월 10일 (금)", time: "05:00", label: "8강 1경기" },
    { date: "7월 11일 (토)", time: "04:00", label: "8강 2경기" },
    { date: "7월 11일 (토)", time: "08:00", label: "8강 3경기" },
    { date: "7월 12일 (일)", time: "04:00", label: "8강 4경기" },
  ],
  sf: [
    { date: "7월 15일 (수)", time: "04:00", label: "준결승 1경기" },
    { date: "7월 16일 (목)", time: "04:00", label: "준결승 2경기" },
  ],
  final: [{ date: "7월 20일 (월)", time: "04:00", label: "결승전" }],
};

const tournamentRounds = {
  r32: { label: "32강", columns: [knockoutColumns.r32, knockoutColumns.r16, knockoutColumns.qf, knockoutColumns.sf, knockoutColumns.final] },
  r16: { label: "16강", columns: [knockoutColumns.r16, knockoutColumns.qf, knockoutColumns.sf, knockoutColumns.final] },
  qf: { label: "8강", columns: [knockoutColumns.qf, knockoutColumns.sf, knockoutColumns.final] },
  sf: { label: "준결승전", columns: [knockoutColumns.sf, knockoutColumns.final] },
  final: { label: "결승전", columns: [knockoutColumns.final] },
};

let selectedGroup = getInitialGroup();
let currentView = selectedGroup === "all" ? "date" : "group";
let selectedDate = getInitialDate();
let selectedRound = "r32";

function getInitialGroup() {
  const hashGroup = window.location.hash.replace("#", "");
  const hasGroup = groupSections.some((section) => section.id === hashGroup);
  return hasGroup ? hashGroup : "all";
}

function getInitialDate() {
  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");
  const dates = getMatchDates();

  if (dates.includes(localToday)) {
    return localToday;
  }

  if (dates.includes(DEFAULT_DATE)) {
    return DEFAULT_DATE;
  }

  return dates[0] || DEFAULT_DATE;
}

function getMatchDates() {
  return Array.from(new Set(matchRows.map((row) => row.dataset.date).filter(Boolean))).sort();
}

function getDateParts(dateValue) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return {
    day,
    weekday: weekdayLabels[date.getDay()],
  };
}

function enhanceCountryFlags() {
  document.querySelectorAll(".group-card li, .match-name span:first-child, .match-name span:last-child").forEach((element) => {
    const countryName = element.textContent.trim();
    const flagUrl = getFlagUrl(countryName);

    if (!flagUrl || element.querySelector(".flag")) {
      return;
    }

    element.innerHTML = `<img class="flag" src="${flagUrl}" width="20" height="15" alt="" aria-hidden="true" loading="lazy" /><span>${countryName}</span>`;
    element.setAttribute("aria-label", countryName);
  });
}

function renderHighlightLinks() {
  matchRows.forEach((row) => {
    const links = highlightLinks[row.dataset.gameId] || {};
    const container = row.querySelector(".match-links");

    if (!container) {
      return;
    }

    container.innerHTML = "";

    highlightLinkSlots.forEach(([key, label]) => {
      const url = links[key];

      if (url) {
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.textContent = label;
        container.append(anchor);
        return;
      }

      const disabled = document.createElement("span");
      disabled.className = "disabled-link";
      disabled.setAttribute("aria-disabled", "true");
      disabled.textContent = label;
      container.append(disabled);
    });
  });
}

function renderDateButtons() {
  const dates = getMatchDates();
  dateScroller.innerHTML = "";

  dates.forEach((dateValue) => {
    const { day, weekday } = getDateParts(dateValue);
    const button = document.createElement("button");
    button.className = "date-button";
    button.type = "button";
    button.dataset.date = dateValue;
    button.setAttribute("aria-label", `${dateValue} 경기 보기`);
    button.innerHTML = `<span>${weekday}</span><strong>${day}</strong>`;
    button.addEventListener("click", () => {
      selectedDate = dateValue;
      currentView = "date";
      applyView();
    });
    dateScroller.append(button);
  });
}

function setSelectedDate(offset) {
  const dates = getMatchDates();
  const currentIndex = dates.indexOf(selectedDate);
  const nextIndex = Math.min(Math.max(currentIndex + offset, 0), dates.length - 1);

  if (nextIndex >= 0) {
    selectedDate = dates[nextIndex];
    currentView = "date";
    applyView();
  }
}

function applyView() {
  const isDateView = currentView === "date";
  const isGroupView = currentView === "group";
  const isTournamentView = currentView === "tournament";

  document.body.classList.toggle("is-date-view", isDateView);
  document.body.classList.toggle("is-group-view", isGroupView);
  document.body.classList.toggle("is-tournament-view", isTournamentView);

  viewTabs.forEach((tab) => {
    const isSelected = tab.dataset.view === currentView;
    tab.classList.toggle("is-active", isSelected);
    tab.setAttribute("aria-pressed", String(isSelected));
  });

  if (groupOverview) {
    groupOverview.hidden = !isGroupView;
  }
  if (groupTabs) {
    groupTabs.hidden = !isGroupView;
  }
  if (scheduleSection) {
    scheduleSection.hidden = isTournamentView;
  }
  if (tournamentView) {
    tournamentView.hidden = !isTournamentView;
  }

  matchRows.forEach((row) => {
    const isSelectedDateRow = row.dataset.date === selectedDate;
    const shouldHide = isTournamentView || (isDateView && !isSelectedDateRow);
    row.classList.toggle("is-selected-date", isSelectedDateRow);
    row.hidden = shouldHide;
    row.style.display = shouldHide ? "none" : "";
  });

  groupSections.forEach((section) => {
    const hasVisibleRows = Array.from(section.querySelectorAll(".match-row")).some((row) => !row.hidden);
    const isSelectedGroup = selectedGroup === "all" || section.id === selectedGroup;
    const shouldHide = isTournamentView || (isDateView && !hasVisibleRows) || (isGroupView && !isSelectedGroup);
    section.classList.toggle("has-selected-date", hasVisibleRows);
    section.hidden = shouldHide;
    section.style.display = shouldHide ? "none" : "";
  });

  groupCards.forEach((card) => {
    const cardGroup = card.id.replace("-teams", "");
    card.hidden = !isGroupView || (selectedGroup !== "all" && cardGroup !== selectedGroup);
  });

  groupButtons.forEach((button) => {
    const isSelected = button.dataset.group === selectedGroup;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  document.querySelectorAll(".date-button").forEach((button) => {
    const isSelected = button.dataset.date === selectedDate;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
    if (isSelected) {
      button.scrollIntoView({ inline: "center", block: "nearest" });
    }
  });

  renderTournament();
}

function renderTournament() {
  if (!tournamentBracket || currentView !== "tournament") {
    return;
  }

  const round = tournamentRounds[selectedRound] || tournamentRounds.r32;
  tournamentBracket.innerHTML = round.columns
    .map(
      (column, columnIndex) => `
        <div class="bracket-column" aria-label="${round.label} ${columnIndex + 1}열">
          ${column.map((match) => renderTournamentCard(match)).join("")}
        </div>
      `,
    )
    .join("");

  roundButtons.forEach((button) => {
    const isSelected = button.dataset.round === selectedRound;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderTournamentCard(match) {
  return `
    <article class="tournament-card">
      <div class="tournament-card-head">
        <span>${match.date}</span>
        <strong>${match.time}</strong>
      </div>
      <h2>${match.label}</h2>
      <div class="tournament-teams" aria-label="대진 정보">
        <span>미정</span>
        <span>미정</span>
      </div>
      <div class="match-links" aria-label="${match.label} 하이라이트 링크">
        <span class="disabled-link" aria-disabled="true">KBS2 일반</span>
        <span class="disabled-link" aria-disabled="true">KBS2 숏</span>
        <span class="disabled-link" aria-disabled="true">JTBC 일반</span>
        <span class="disabled-link" aria-disabled="true">JTBC 숏</span>
      </div>
    </article>
  `;
}

viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab.disabled) {
      return;
    }

    currentView = tab.dataset.view;
    applyView();
  });
});

groupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedGroup = button.dataset.group;
    currentView = "group";
    applyView();
  });
});

dateMoveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setSelectedDate(Number(button.dataset.dateMove));
  });
});

roundButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRound = button.dataset.round;
    currentView = "tournament";
    applyView();
  });
});

enhanceCountryFlags();
renderHighlightLinks();
renderDateButtons();
applyView();
