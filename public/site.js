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
  LdzflN63k3JBC5O: {
    kbsGeneral: "https://chzzk.naver.com/video/13878358",
    kbsShort: "https://chzzk.naver.com/video/13878406",
    jtbcGeneral: "https://m.sports.naver.com/video/1486277",
    jtbcShort: "https://m.naver.com/shorts/?mediaId=071203A71FA46177A0EAB72F08B31F9BEFC4&serviceType=CHZZK&recType=AIRS",
  },
  PY2ELA7JVDNhbp1: {
    kbsGeneral: "https://m.naver.com/shorts/?mediaId=867212C1857DB5024E2AA6A8B25FB57411CB&serviceType=CHZZK&recType=AIRS",
    kbsShort: "https://m.sports.naver.com/video/1486280",
  },
  KIVirGXodQcoceb: {
    kbsGeneral: "https://chzzk.naver.com/video/13680723",
    kbsShort: "https://chzzk.naver.com/video/13680774",
    jtbcGeneral: "https://chzzk.naver.com/video/13680813",
    jtbcShort: "https://chzzk.naver.com/video/13680915",
  },
  FJRqtfmBoTdBXNg: {
    kbsGeneral: "https://chzzk.naver.com/video/13697798",
    kbsShort: "https://chzzk.naver.com/video/13697847",
    jtbcGeneral: "https://chzzk.naver.com/video/13697795",
    jtbcShort: "https://chzzk.naver.com/video/13698182",
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
  lFcMDwMFQ2EHxCh: {
    kbsGeneral: "https://chzzk.naver.com/video/13875303",
    kbsShort: "https://chzzk.naver.com/video/13875314",
    jtbcGeneral: "https://chzzk.naver.com/video/13875245",
    jtbcShort: "https://chzzk.naver.com/video/13875275",
  },
  "1IQGZ6ibYXH011u": {
    kbsGeneral: "https://chzzk.naver.com/video/13875246",
    kbsShort: "https://chzzk.naver.com/video/13875311",
    jtbcGeneral: "https://chzzk.naver.com/video/13875334",
    jtbcShort: "https://chzzk.naver.com/video/13875365",
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
  Do4DqPmZ8F3QkkX: {
    kbsGeneral: "https://chzzk.naver.com/video/13875993",
    kbsShort: "https://chzzk.naver.com/video/13875977",
    jtbcGeneral: "https://chzzk.naver.com/video/13876589",
    jtbcShort: "https://chzzk.naver.com/video/13876607",
  },
  "6rItofozOjBuYzu": {
    kbsShort: "https://chzzk.naver.com/video/13876298",
    jtbcGeneral: "https://chzzk.naver.com/video/13876101",
    jtbcShort: "https://chzzk.naver.com/video/13876065",
  },
  TJtN0fa0NfhltQ5: {
    kbsGeneral: "https://chzzk.naver.com/video/13682346",
    kbsShort: "https://chzzk.naver.com/video/13682419",
    jtbcGeneral: "https://chzzk.naver.com/video/13682431",
    jtbcShort: "https://chzzk.naver.com/video/13682558",
  },
  VoHp2XmHFXpgZCt: {
    kbsGeneral: "https://chzzk.naver.com/video/13700617",
    kbsShort: "https://chzzk.naver.com/video/13700621",
    jtbcGeneral: "https://chzzk.naver.com/video/13700637",
    jtbcShort: "https://chzzk.naver.com/video/13700742",
  },
  otm3ifUAdXj3aXP: {
    kbsGeneral: "https://chzzk.naver.com/video/13794991",
    kbsShort: "https://chzzk.naver.com/video/13794997",
    jtbcGeneral: "https://chzzk.naver.com/video/13795010",
    jtbcShort: "https://chzzk.naver.com/video/13795014",
  },
  "5q4yP11gesyrHQr": {
    kbsGeneral: "https://chzzk.naver.com/video/13797425",
    kbsShort: "https://chzzk.naver.com/video/13797460",
    jtbcGeneral: "https://chzzk.naver.com/video/13797374",
    jtbcShort: "https://chzzk.naver.com/video/13797421",
  },
  "32qeJzIx1PrsO2O": {
    kbsGeneral: "https://m.naver.com/shorts/?mediaId=29F9219D57EBDFCEF6E494CCDA34FFD6F874&serviceType=CHZZK&recType=AIRS",
    kbsShort: "https://chzzk.naver.com/video/13894947",
    jtbcGeneral: "https://m.sports.naver.com/video/1487198",
    jtbcShort: "https://chzzk.naver.com/video/13894998",
  },
  WBy7c3p3yn9LxCc: {
    kbsGeneral: "https://chzzk.naver.com/video/13895001",
    kbsShort: "https://chzzk.naver.com/video/13894996",
    jtbcGeneral: "https://m.sports.naver.com/video/1487193",
    jtbcShort: "https://m.naver.com/shorts/?mediaId=A940E6904259922834687939CFC170E33A5F&serviceType=CHZZK&recType=AIRS",
  },
  Ifh0hBPenOr1rjY: {
    kbsGeneral: "https://chzzk.naver.com/video/13713393",
    kbsShort: "https://chzzk.naver.com/video/13713449",
    jtbcGeneral: "https://chzzk.naver.com/video/13713371",
    jtbcShort: "https://chzzk.naver.com/video/13713377",
  },
  OsnjyKUbPniDfDS: {
    kbsGeneral: "https://chzzk.naver.com/video/13714995",
    kbsShort: "https://chzzk.naver.com/video/13715023",
    jtbcGeneral: "https://chzzk.naver.com/video/13714960",
    jtbcShort: "https://chzzk.naver.com/video/13714957",
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
  "14JVl8Mc5ZGfxjk": {
    kbsGeneral: "https://chzzk.naver.com/video/13893370",
    kbsShort: "https://chzzk.naver.com/video/13893383",
    jtbcGeneral: "https://m.sports.naver.com/video/1486791",
    jtbcShort: "https://m.naver.com/shorts/?mediaId=4AF5E2F9485E0214AEC88880C6DFA2B1982A&serviceType=CHZZK&recType=AIRS",
  },
  WUfX0iob0fLF93g: {
    kbsGeneral: "https://m.sports.naver.com/video/1486786",
    kbsShort: "https://m.naver.com/shorts/?mediaId=DB7336279031A006943CDAAECA5718170D4A&serviceType=CHZZK&recType=AIRS",
    jtbcGeneral: "https://chzzk.naver.com/video/13893344",
    jtbcShort: "https://chzzk.naver.com/video/13893373",
  },
  QkMQhJ6yLHhg0bx: {
    kbsGeneral: "https://chzzk.naver.com/video/13714383",
    kbsShort: "https://chzzk.naver.com/video/13714400",
    jtbcGeneral: "https://chzzk.naver.com/video/13714387",
    jtbcShort: "https://chzzk.naver.com/video/13714411",
  },
  dtl3BItiCgnSfPs: {
    kbsGeneral: "https://chzzk.naver.com/video/13715746",
    kbsShort: "https://chzzk.naver.com/video/13715737",
    jtbcGeneral: "https://chzzk.naver.com/video/13716097",
    jtbcShort: "https://chzzk.naver.com/video/13715819",
  },
  QKdN2ITC52hh1jF: {
    kbsGeneral: "https://chzzk.naver.com/video/13810863",
    kbsShort: "https://chzzk.naver.com/video/13810930",
    jtbcGeneral: "https://chzzk.naver.com/video/13810944",
    jtbcShort: "https://chzzk.naver.com/video/13810956",
  },
  ehugrhy9qHByIrP: {
    kbsGeneral: "https://chzzk.naver.com/video/13814922",
    kbsShort: "https://chzzk.naver.com/video/13814932",
    jtbcGeneral: "https://chzzk.naver.com/video/13814841",
    jtbcShort: "https://chzzk.naver.com/video/13814855",
  },
  hxgIp3EunI6eEXb: {
    kbsGeneral: "https://m.naver.com/shorts/?mediaId=2B0099AA1696459A5BFCDEE11D67F75BD088&serviceType=CHZZK&recType=AIRS",
    kbsShort: "https://m.sports.naver.com/video/1486961",
    jtbcGeneral: "https://chzzk.naver.com/video/13894055",
    jtbcShort: "https://chzzk.naver.com/video/13894062",
  },
  M3O0WP6yHexeCgD: {
    kbsGeneral: "https://chzzk.naver.com/video/13894108",
    kbsShort: "https://chzzk.naver.com/video/13894118",
    jtbcGeneral: "https://m.sports.naver.com/video/1486983",
    jtbcShort: "https://m.naver.com/shorts/?mediaId=B9FFB27D4EA9CBF3D4819DDA7D94B9F203D7&serviceType=CHZZK&recType=AIRS",
  },
  "3WYkOMV89drpqi4": {
    kbsGeneral: "https://chzzk.naver.com/video/13728827",
    kbsShort: "https://chzzk.naver.com/video/13728838",
    jtbcGeneral: "https://chzzk.naver.com/video/13728955",
    jtbcShort: "https://chzzk.naver.com/video/13728891",
  },
  xibNM7diOb8ENsl: {
    kbsGeneral: "https://chzzk.naver.com/video/13730118",
    kbsShort: "https://chzzk.naver.com/video/13730101",
    jtbcGeneral: "https://chzzk.naver.com/video/13730200",
    jtbcShort: "https://chzzk.naver.com/video/13730148",
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
  z5nw2eUi5M5y3Se: {
    kbsGeneral: "https://chzzk.naver.com/video/13912494",
    kbsShort: "https://chzzk.naver.com/video/13912542",
    jtbcGeneral: "https://m.sports.naver.com/video/1488017",
    jtbcShort: "https://m.naver.com/shorts/?mediaId=494B15BAA89510517F40D88E06949FCE5085&serviceType=CHZZK&recType=AIRS",
  },
  xZpAUQfjryIdUzo: {
    kbsGeneral: "https://m.sports.naver.com/video/1488000",
    kbsShort: "https://m.naver.com/shorts/?mediaId=7A507E3F819CD45687E0F9F7E47376308B75&serviceType=CHZZK&recType=AIRS",
    jtbcGeneral: "https://chzzk.naver.com/video/13912339",
    jtbcShort: "https://chzzk.naver.com/video/13912348",
  },
  s9yioxVSFTsDuE3: {
    kbsGeneral: "https://chzzk.naver.com/video/13727632",
    kbsShort: "https://chzzk.naver.com/video/13727733",
    jtbcGeneral: "https://chzzk.naver.com/video/13727569",
    jtbcShort: "https://chzzk.naver.com/video/13727673",
  },
  eKXKE9P6yI0RsMY: {
    kbsGeneral: "https://chzzk.naver.com/video/13729432",
    kbsShort: "https://chzzk.naver.com/video/13729442",
    jtbcGeneral: "https://chzzk.naver.com/video/13729415",
    jtbcShort: "https://chzzk.naver.com/video/13729412",
  },
  LW8XGOed83I9F61: {
    kbsGeneral: "https://chzzk.naver.com/video/13827064",
    kbsShort: "https://chzzk.naver.com/video/13827155",
    jtbcGeneral: "https://chzzk.naver.com/video/13827138",
    jtbcShort: "https://chzzk.naver.com/video/13827239",
  },
  g6yqVZylEBXe8jV: {
    kbsGeneral: "https://chzzk.naver.com/video/13829265",
    kbsShort: "https://chzzk.naver.com/video/13829250",
    jtbcGeneral: "https://chzzk.naver.com/video/13829279",
    jtbcShort: "https://chzzk.naver.com/video/13829310",
  },
  wgzNpZBJZJQRrDi: {
    kbsGeneral: "https://chzzk.naver.com/video/13911199",
    kbsShort: "https://chzzk.naver.com/video/13911210",
    jtbcGeneral: "https://m.sports.naver.com/video/1487803",
    jtbcShort: "https://chzzk.naver.com/video/13911156",
  },
  uTmUO71Xz7FmC0M: {
    kbsGeneral: "https://m.sports.naver.com/video/1487794",
    kbsShort: "https://m.naver.com/shorts/?mediaId=F77E10968ACA860ED3AD8D42AC4B05AE3F3D&serviceType=CHZZK&recType=AIRS",
    jtbcGeneral: "https://chzzk.naver.com/video/13911135",
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
  y6VpQ1Z2znEh3Hc: {
    kbsGeneral: "https://chzzk.naver.com/video/13844387",
    kbsShort: "https://chzzk.naver.com/video/13844391",
    jtbcGeneral: "https://chzzk.naver.com/video/13844343",
    jtbcShort: "https://chzzk.naver.com/video/13844354",
  },
  "1NVK4CL26vdJGXj": {
    kbsGeneral: "https://chzzk.naver.com/video/13844854",
    kbsShort: "https://chzzk.naver.com/video/13844926",
    jtbcGeneral: "https://chzzk.naver.com/video/13844670",
    jtbcShort: "https://chzzk.naver.com/video/13844662",
  },
  YFjH0Rynu1V2pJP: {
    kbsGeneral: "https://chzzk.naver.com/video/13909888",
    jtbcGeneral: "https://m.sports.naver.com/video/1487612",
    jtbcShort: "https://m.naver.com/shorts/?mediaId=0E5D517C66A1727B3C0C463C2458197E492A&serviceType=CHZZK&recType=AIRS",
  },
  "5TP26cCPLNgSwKQ": {
    kbsGeneral: "https://m.sports.naver.com/video/1487618",
    kbsShort: "https://m.naver.com/shorts/?mediaId=972E008A62E174469A6296899D3B57EEE910&serviceType=CHZZK&recType=AIRS",
    jtbcGeneral: "https://chzzk.naver.com/video/13909985",
    jtbcShort: "https://chzzk.naver.com/video/13910004",
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
  ukQo5BMsXYKNC4S: {
    kbsGeneral: "https://chzzk.naver.com/video/13842690",
    kbsShort: "https://chzzk.naver.com/video/13842781",
    jtbcGeneral: "https://chzzk.naver.com/video/13842853",
    jtbcShort: "https://chzzk.naver.com/video/13842864",
  },
  "9O2Q9ja7W0fuktR": {
    kbsGeneral: "https://chzzk.naver.com/video/13845634",
    kbsShort: "https://chzzk.naver.com/video/13845571",
    jtbcGeneral: "https://chzzk.naver.com/video/13845549",
    jtbcShort: "https://chzzk.naver.com/video/13845543",
  },
  hQl7Xcio5ddahqF: {
    kbsShort: "https://chzzk.naver.com/video/13929088",
    jtbcGeneral: "https://m.sports.naver.com/video/1488721",
    jtbcShort: "https://m.naver.com/shorts/?mediaId=B715F0C9CD8862593145D156DC80AB901BAC&serviceType=CHZZK&recType=AIRS",
  },
  gTGz2n3C3ct1sry: {
    kbsGeneral: "https://m.sports.naver.com/video/1488713",
    kbsShort: "https://m.naver.com/shorts/?mediaId=FF01679109C7A19274EE4BB787E326D1CC69&serviceType=CHZZK&recType=AIRS",
    jtbcGeneral: "https://chzzk.naver.com/video/13929001",
    jtbcShort: "https://chzzk.naver.com/video/13929008",
  },
  umdBVpCfddNXbRK: {
    kbsGeneral: "https://chzzk.naver.com/video/13759574",
    kbsShort: "https://chzzk.naver.com/video/13759619",
    jtbcGeneral: "https://m.sports.naver.com/video/1480778",
    jtbcShort: "https://chzzk.naver.com/video/13759652",
  },
  BYCgQlgy6OZhsUo: {
    kbsGeneral: "https://chzzk.naver.com/video/13762244",
    kbsShort: "https://chzzk.naver.com/video/13762233",
    jtbcGeneral: "https://chzzk.naver.com/video/13762270",
    jtbcShort: "https://chzzk.naver.com/video/13762277",
  },
  DMzOXwCiV8SAZ0R: {
    kbsGeneral: "https://chzzk.naver.com/video/13858535",
    kbsShort: "https://chzzk.naver.com/video/13858539",
    jtbcGeneral: "https://chzzk.naver.com/video/13858502",
    jtbcShort: "https://chzzk.naver.com/video/13858640",
  },
  MuZAq4eOkTLSJ8h: {
    kbsGeneral: "https://chzzk.naver.com/video/13861066",
    kbsShort: "https://chzzk.naver.com/video/13861070",
    jtbcGeneral: "https://chzzk.naver.com/video/13861060",
    jtbcShort: "https://chzzk.naver.com/video/13861042",
  },
  IedS6mKSS03d7Bc: {
    kbsGeneral: "https://chzzk.naver.com/video/13928159",
    kbsShort: "https://chzzk.naver.com/video/13928171",
    jtbcGeneral: "https://m.naver.com/shorts/?mediaId=54CD1A582DE7B667CFDF3CC903643A2D5F1F&serviceType=CHZZK&recType=AIRS",
    jtbcShort: "https://m.sports.naver.com/video/1488517",
  },
  VovjMyPygIvAY9I: {
    kbsGeneral: "https://chzzk.naver.com/video/13928342",
    kbsShort: "https://m.sports.naver.com/video/1488533",
    jtbcGeneral: "https://chzzk.naver.com/video/13928125",
    jtbcShort: "https://chzzk.naver.com/video/13928142",
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
  MZRYrEWBtp16chW: {
    kbsGeneral: "https://chzzk.naver.com/video/13859531",
    kbsShort: "https://chzzk.naver.com/video/13859574",
    jtbcGeneral: "https://chzzk.naver.com/video/13859553",
    jtbcShort: "https://chzzk.naver.com/video/13859593",
  },
  HGtAqiXmuzswSmd: {
    kbsGeneral: "https://chzzk.naver.com/video/13860115",
    kbsShort: "https://chzzk.naver.com/video/13860098",
    jtbcGeneral: "https://chzzk.naver.com/video/13860139",
    jtbcShort: "https://chzzk.naver.com/video/13860143",
  },
  fN1kuTPSu5OoM7H: {
    kbsGeneral: "https://m.sports.naver.com/video/1488348",
    kbsShort: "https://m.naver.com/shorts/?mediaId=3A73F451E56E3C4F7A96476ABD7A2E2FC50C&serviceType=CHZZK&recType=AIRS",
    jtbcGeneral: "https://chzzk.naver.com/video/13927378",
    jtbcShort: "https://chzzk.naver.com/video/13927401",
  },
  euQapAA8XVFRbmR: {
    kbsGeneral: "https://chzzk.naver.com/video/13927423",
    kbsShort: "https://chzzk.naver.com/video/13927435",
    jtbcGeneral: "https://m.sports.naver.com/video/1488349",
    jtbcShort: "https://m.naver.com/shorts/?mediaId=2890DFF4E38FEA126516BC8A128EE54D9B77&serviceType=CHZZK&recType=AIRS",
  },
  VUmRyf4SKuvTkAZ: {
    kbsGeneral: "https://m.sports.naver.com/video/1489049",
    kbsShort: "https://m.naver.com/shorts/?mediaId=015E376B526A55EFB07B6ADFD10800810E81&serviceType=CHZZK&recType=AIRS",
  },
  JUiroo5GFn3JdTC: {
    jtbcGeneral: "https://m.sports.naver.com/video/1489519",
    jtbcShort: "https://m.naver.com/shorts/?mediaId=FD4C55C25722A104E090842293854B345F44&serviceType=CHZZK&recType=AIRS",
  },
  bwBeCjswPeFyCAd: {
    kbsGeneral: "https://m.sports.naver.com/video/1489753",
    kbsShort: "https://m.naver.com/shorts/?mediaId=67E81DCAACD76038BEF3B8AEDCF591BE55EC&serviceType=CHZZK&recType=AIRS",
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
    { gameId: "VUmRyf4SKuvTkAZ", date: "6월 29일 (월)", time: "04:00", label: "32강 1경기", teams: ["남아프리카 공화국", "캐나다"] },
    { gameId: "JUiroo5GFn3JdTC", date: "6월 30일 (화)", time: "02:00", label: "32강 2경기", teams: ["브라질", "일본"] },
    { gameId: "bwBeCjswPeFyCAd", date: "6월 30일 (화)", time: "05:30", label: "32강 3경기", teams: ["독일", "파라과이"] },
    { gameId: "xyAFeEX2NfuEpaU", date: "6월 30일 (화)", time: "10:00", label: "32강 4경기", teams: ["네덜란드", "모로코"] },
    { gameId: "HsRcoagB4TzwG3J", date: "7월 1일 (수)", time: "02:00", label: "32강 5경기", teams: ["코트디부아르", "노르웨이"] },
    { gameId: "IfjIn83ZZ6XbHAb", date: "7월 1일 (수)", time: "06:00", label: "32강 6경기", teams: ["프랑스", "스웨덴"] },
    { gameId: "aUWamctRH6AGgM8", date: "7월 1일 (수)", time: "10:00", label: "32강 7경기", teams: ["멕시코", "에콰도르"] },
    { gameId: "RwjDlcX30v9eUeP", date: "7월 2일 (목)", time: "01:00", label: "32강 8경기", teams: ["잉글랜드", "콩고민주공화국"] },
    { gameId: "0wWXh1FZlrfIjvm", date: "7월 2일 (목)", time: "05:00", label: "32강 9경기", teams: ["벨기에", "세네갈"] },
    { gameId: "DzCXvZeKlC24kmn", date: "7월 2일 (목)", time: "09:00", label: "32강 10경기", teams: ["미국", "보스니아 헤르체고비나"] },
    { gameId: "eGLZlfW9XdOQqNa", date: "7월 3일 (금)", time: "04:00", label: "32강 11경기", teams: ["스페인", "오스트리아"] },
    { gameId: "UUthhOlRxJjWtS5", date: "7월 3일 (금)", time: "08:00", label: "32강 12경기", teams: ["포르투갈", "크로아티아"] },
    { gameId: "fqi0ocBbFSj9ol9", date: "7월 3일 (금)", time: "12:00", label: "32강 13경기", teams: ["스위스", "알제리"] },
    { gameId: "crfpr0TV88a1yL6", date: "7월 4일 (토)", time: "03:00", label: "32강 14경기", teams: ["호주", "이집트"] },
    { gameId: "0bW1F7ag8ooLDU3", date: "7월 4일 (토)", time: "07:00", label: "32강 15경기", teams: ["아르헨티나", "카보베르데"] },
    { gameId: "CKcKuuENFptPIdB", date: "7월 4일 (토)", time: "10:30", label: "32강 16경기", teams: ["콜롬비아", "가나"] },
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
let currentView = getInitialView();
let selectedDate = getInitialDate();
let selectedRound = "r32";

function getInitialGroup() {
  const hashGroup = window.location.hash.replace("#", "");
  const hasGroup = groupSections.some((section) => section.id === hashGroup);
  return hasGroup ? hashGroup : "all";
}

function getLocalToday() {
  const today = new Date();
  return [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");
}

function getInitialView() {
  if (selectedGroup !== "all") {
    return "group";
  }

  return tournamentHasDate(getLocalToday()) ? "tournament" : "date";
}

function getInitialDate() {
  const localToday = getLocalToday();
  const dates = getMatchDates();

  if (dates.includes(localToday)) {
    return localToday;
  }

  const nextDate = dates.find((dateValue) => dateValue > localToday);
  if (nextDate) {
    return nextDate;
  }

  return dates.at(-1) || DEFAULT_DATE;
}

function getMatchDates() {
  return Array.from(new Set(matchRows.map((row) => row.dataset.date).filter(Boolean))).sort();
}

function tournamentHasDate(dateValue) {
  const [, month, day] = dateValue.split("-").map(Number);
  const dateLabel = `${month}월 ${day}일`;
  return Object.values(knockoutColumns)
    .flat()
    .some((match) => match.date.startsWith(dateLabel));
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
  const teams = match.teams || ["미정", "미정"];
  const links = match.gameId ? highlightLinks[match.gameId] || {} : {};
  const teamHtml = teams.map((team) => renderTournamentTeam(team)).join("");
  const linksHtml = highlightLinkSlots
    .map(([key, label]) => {
      const url = links[key];

      if (url) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
      }

      return `<span class="disabled-link" aria-disabled="true">${label}</span>`;
    })
    .join("");

  return `
    <article class="tournament-card">
      <div class="tournament-card-head">
        <span>${match.date}</span>
        <strong>${match.time}</strong>
      </div>
      <h2>${match.label}</h2>
      <div class="tournament-teams" aria-label="대진 정보">
        ${teamHtml}
      </div>
      <div class="match-links" aria-label="${match.label} 하이라이트 링크">
        ${linksHtml}
      </div>
    </article>
  `;
}

function renderTournamentTeam(team) {
  const flagUrl = getFlagUrl(team);
  const flagHtml = flagUrl
    ? `<img class="flag" src="${flagUrl}" width="20" height="15" alt="" aria-hidden="true" loading="lazy" />`
    : "";

  return `<span class="${flagUrl ? "has-flag" : ""}">${flagHtml}${team}</span>`;
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
