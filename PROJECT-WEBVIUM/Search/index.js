/*
*
* Copyright (c) 2021 Melvin Jones Repol (mrepol742.github.io). All rights reserved.
*
* License under the GNU General Public License, Version 3.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     https://www.gnu.org/licenses/gpl-3.0.en.html
*
* Unless required by the applicable law or agreed in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/*if (Webvium.isFirstTime()) {
    Webvium.showNotification("Mushi Mushi", "This site is now the default homepage\nGo to Settings > General to change", "https://mrepol742.github.io");
}
if (!Webvium.identifyYourSelf()) {
    window.location.href = "https://mrepol742.github.io";
}*/

var domains = [".aaa",
            ".aarp",
            ".abarth",
            ".abb",
            ".abbott",
            ".abbvie",
            ".abc",
            ".able",
            ".abogado",
            ".abudhabi",
            ".ac",
            ".academy",
            ".accenture",
            ".accountant",
            ".accountants",
            ".aco",
            ".actor",
            ".ad",
            ".adac",
            ".ads",
            ".adult",
            ".ae",
            ".aeg",
            ".aero",
            ".aetna",
            ".af",
            ".afamilycompany",
            ".afl",
            ".africa",
            ".ag",
            ".agakhan",
            ".agency",
            ".ai",
            ".aig",
            ".aigo",
            ".airbus",
            ".airforce",
            ".airtel",
            ".akdn",
            ".al",
            ".alfaromeo",
            ".alibaba",
            ".alipay",
            ".allfinanz",
            ".allstate",
            ".ally",
            ".alsace",
            ".alstom",
            ".am",
            ".americanexpress",
            ".americanfamily",
            ".amex",
            ".amfam",
            ".amica",
            ".amsterdam",
            ".analytics",
            ".android",
            ".anquan",
            ".anz",
            ".ao",
            ".aol",
            ".apartments",
            ".app",
            ".apple",
            ".aq",
            ".aquarelle",
            ".ar",
            ".arab",
            ".aramco",
            ".archi",
            ".army",
            ".arpa",
            ".art",
            ".arte",
            ".as",
            ".asda",
            ".asia",
            ".associates",
            ".at",
            ".atleta",
            ".attorney",
            ".au",
            ".auction",
            ".audi",
            ".audible",
            ".audio",
            ".auspost",
            ".author",
            ".auto",
            ".autos",
            ".avianca",
            ".aw",
            ".aws",
            ".ax",
            ".axa",
            ".az",
            ".azure",
            ".ba",
            ".baby",
            ".baidu",
            ".banamex",
            ".bananarepublic",
            ".band",
            ".bank",
            ".bar",
            ".barcelona",
            ".barclaycard",
            ".barclays",
            ".barefoot",
            ".bargains",
            ".baseball",
            ".basketball",
            ".bauhaus",
            ".bayern",
            ".bb",
            ".bbc",
            ".bbt",
            ".bbva",
            ".bcg",
            ".bcn",
            ".bd",
            ".be",
            ".beats",
            ".beauty",
            ".beer",
            ".bentley",
            ".berlin",
            ".best",
            ".bestbuy",
            ".bet",
            ".bf",
            ".bg",
            ".bh",
            ".bharti",
            ".bi",
            ".bible",
            ".bid",
            ".bike",
            ".bing",
            ".bingo",
            ".bio",
            ".biz",
            ".bj",
            ".black",
            ".blackfriday",
            ".blockbuster",
            ".blog",
            ".bloomberg",
            ".blue",
            ".bm",
            ".bms",
            ".bmw",
            ".bn",
            ".bnpparibas",
            ".bo",
            ".boats",
            ".boehringer",
            ".bofa",
            ".bom",
            ".bond",
            ".boo",
            ".book",
            ".booking",
            ".bosch",
            ".bostik",
            ".boston",
            ".bot",
            ".boutique",
            ".box",
            ".br",
            ".bradesco",
            ".bridgestone",
            ".broadway",
            ".broker",
            ".brother",
            ".brussels",
            ".bs",
            ".bt",
            ".budapest",
            ".bugatti",
            ".build",
            ".builders",
            ".business",
            ".buy",
            ".buzz",
            ".bv",
            ".bw",
            ".by",
            ".bz",
            ".bzh",
            ".ca",
            ".cab",
            ".cafe",
            ".cal",
            ".call",
            ".calvinklein",
            ".cam",
            ".camera",
            ".camp",
            ".cancerresearch",
            ".canon",
            ".capetown",
            ".capital",
            ".capitalone",
            ".car",
            ".caravan",
            ".cards",
            ".care",
            ".career",
            ".careers",
            ".cars",
            ".casa",
            ".case",
            ".caseih",
            ".cash",
            ".casino",
            ".cat",
            ".catering",
            ".catholic",
            ".cba",
            ".cbn",
            ".cbre",
            ".cbs",
            ".cc",
            ".cd",
            ".ceb",
            ".center",
            ".ceo",
            ".cern",
            ".cf",
            ".cfa",
            ".cfd",
            ".cg",
            ".ch",
            ".chanel",
            ".channel",
            ".charity",
            ".chase",
            ".chat",
            ".cheap",
            ".chintai",
            ".christmas",
            ".chrome",
            ".church",
            ".ci",
            ".cipriani",
            ".circle",
            ".cisco",
            ".citadel",
            ".citi",
            ".citic",
            ".city",
            ".cityeats",
            ".ck",
            ".cl",
            ".claims",
            ".cleaning",
            ".click",
            ".clinic",
            ".clinique",
            ".clothing",
            ".cloud",
            ".club",
            ".clubmed",
            ".cm",
            ".cn",
            ".co",
            ".coach",
            ".codes",
            ".coffee",
            ".college",
            ".cologne",
            ".com",
            ".comcast",
            ".commbank",
            ".community",
            ".company",
            ".compare",
            ".computer",
            ".comsec",
            ".condos",
            ".construction",
            ".consulting",
            ".contact",
            ".contractors",
            ".cooking",
            ".cookingchannel",
            ".cool",
            ".coop",
            ".corsica",
            ".country",
            ".coupon",
            ".coupons",
            ".courses",
            ".cpa",
            ".cr",
            ".credit",
            ".creditcard",
            ".creditunion",
            ".cricket",
            ".crown",
            ".crs",
            ".cruise",
            ".cruises",
            ".csc",
            ".cu",
            ".cuisinella",
            ".cv",
            ".cw",
            ".cx",
            ".cy",
            ".cymru",
            ".cyou",
            ".cz",
            ".dabur",
            ".dad",
            ".dance",
            ".data",
            ".date",
            ".dating",
            ".datsun",
            ".day",
            ".dclk",
            ".dds",
            ".de",
            ".deal",
            ".dealer",
            ".deals",
            ".degree",
            ".delivery",
            ".dell",
            ".deloitte",
            ".delta",
            ".democrat",
            ".dental",
            ".dentist",
            ".desi",
            ".design",
            ".dev",
            ".dhl",
            ".diamonds",
            ".diet",
            ".digital",
            ".direct",
            ".directory",
            ".discount",
            ".discover",
            ".dish",
            ".diy",
            ".dj",
            ".dk",
            ".dm",
            ".dnp",
            ".do",
            ".docs",
            ".doctor",
            ".dog",
            ".domains",
            ".dot",
            ".download",
            ".drive",
            ".dtv",
            ".dubai",
            ".duck",
            ".dunlop",
            ".dupont",
            ".durban",
            ".dvag",
            ".dvr",
            ".dz",
            ".earth",
            ".eat",
            ".ec",
            ".eco",
            ".edeka",
            ".edu",
            ".education",
            ".ee",
            ".eg",
            ".email",
            ".emerck",
            ".energy",
            ".engineer",
            ".engineering",
            ".enterprises",
            ".epson",
            ".equipment",
            ".er",
            ".ericsson",
            ".erni",
            ".es",
            ".esq",
            ".estate",
            ".esurance",
            ".et",
            ".etisalat",
            ".eu",
            ".eurovision",
            ".eus",
            ".events",
            ".exchange",
            ".expert",
            ".exposed",
            ".express",
            ".extraspace",
            ".fage",
            ".fail",
            ".fairwinds",
            ".faith",
            ".family",
            ".fan",
            ".fans",
            ".farm",
            ".farmers",
            ".fashion",
            ".fast",
            ".fedex",
            ".feedback",
            ".ferrari",
            ".ferrero",
            ".fi",
            ".fiat",
            ".fidelity",
            ".fido",
            ".film",
            ".",
            ".finance",
            ".financial",
            ".fire",
            ".firestone",
            ".firmdale",
            ".fish",
            ".fishing",
            ".fit",
            ".fitness",
            ".fj",
            ".fk",
            ".flickr",
            ".flights",
            ".flir",
            ".florist",
            ".flowers",
            ".fly",
            ".fm",
            ".fo",
            ".foo",
            ".food",
            ".foodnetwork",
            ".football",
            ".ford",
            ".forex",
            ".forsale",
            ".forum",
            ".foundation",
            ".fox",
            ".fr",
            ".free",
            ".fresenius",
            ".frl",
            ".frogans",
            ".frontdoor",
            ".frontier",
            ".ftr",
            ".fujitsu",
            ".fujixerox",
            ".fun",
            ".fund",
            ".furniture",
            ".futbol",
            ".fyi",
            ".ga",
            ".gal",
            ".gallery",
            ".gallo",
            ".gallup",
            ".game",
            ".games",
            ".gap",
            ".garden",
            ".gay",
            ".gb",
            ".gbiz",
            ".gd",
            ".gdn",
            ".ge",
            ".gea",
            ".gent",
            ".genting",
            ".george",
            ".gf",
            ".gg",
            ".ggee",
            ".gh",
            ".gi",
            ".gift",
            ".gifts",
            ".gives",
            ".giving",
            ".gl",
            ".glade",
            ".glass",
            ".gle",
            ".global",
            ".globo",
            ".gm",
            ".gmail",
            ".gmbh",
            ".gmo",
            ".gmx",
            ".gn",
            ".godaddy",
            ".gold",
            ".goldpoint",
            ".golf",
            ".goo",
            ".goodyear",
            ".goog",
            ".google",
            ".gop",
            ".got",
            ".gov",
            ".gp",
            ".gq",
            ".gr",
            ".grainger",
            ".graphics",
            ".gratis",
            ".green",
            ".gripe",
            ".grocery",
            ".group",
            ".gs",
            ".gt",
            ".gu",
            ".guardian",
            ".gucci",
            ".guge",
            ".guide",
            ".guitars",
            ".guru",
            ".gw",
            ".gy",
            ".hair",
            ".hamburg",
            ".hangout",
            ".haus",
            ".hbo",
            ".hdfc",
            ".hdfcbank",
            ".health",
            ".healthcare",
            ".help",
            ".helsinki",
            ".here",
            ".hermes",
            ".hgtv",
            ".hiphop",
            ".hisamitsu",
            ".hitachi",
            ".hiv",
            ".hk",
            ".hkt",
            ".hm",
            ".hn",
            ".hockey",
            ".holdings",
            ".holiday",
            ".homedepot",
            ".homegoods",
            ".homes",
            ".homesense",
            ".honda",
            ".horse",
            ".hospital",
            ".host",
            ".hosting",
            ".hot",
            ".hoteles",
            ".hotels",
            ".hotmail",
            ".house",
            ".how",
            ".hr",
            ".hsbc",
            ".ht",
            ".hu",
            ".hughes",
            ".hyatt",
            ".hyundai",
            ".ibm",
            ".icbc",
            ".ice",
            ".icu",
            ".id",
            ".ie",
            ".ieee",
            ".ifm",
            ".ikano",
            ".il",
            ".im",
            ".imamat",
            ".imdb",
            ".immo",
            ".immobilien",
            ".in",
            ".inc",
            ".industries",
            ".infiniti",
            ".info",
            ".ing",
            ".ink",
            ".institute",
            ".insurance",
            ".insure",
            ".int",
            ".intel",
            ".international",
            ".intuit",
            ".investments",
            ".io",
            ".ipiranga",
            ".iq",
            ".ir",
            ".irish",
            ".is",
            ".ismaili",
            ".ist",
            ".istanbul",
            ".it",
            ".itau",
            ".itv",
            ".iveco",
            ".jaguar",
            ".java",
            ".jcb",
            ".jcp",
            ".je",
            ".jeep",
            ".jetzt",
            ".jewelry",
            ".jio",
            ".jll",
            ".jm",
            ".jmp",
            ".jnj",
            ".jo",
            ".jobs",
            ".joburg",
            ".jot",
            ".joy",
            ".jp",
            ".jpmorgan",
            ".jprs",
            ".juegos",
            ".juniper",
            ".kaufen",
            ".kddi",
            ".ke",
            ".kerryhotels",
            ".kerrylogistics",
            ".kerryproperties",
            ".kfh",
            ".kg",
            ".kh",
            ".ki",
            ".kia",
            ".kim",
            ".kinder",
            ".kindle",
            ".kitchen",
            ".kiwi",
            ".km",
            ".kn",
            ".koeln",
            ".komatsu",
            ".kosher",
            ".kp",
            ".kpmg",
            ".kpn",
            ".kr",
            ".krd",
            ".kred",
            ".kuokgroup",
            ".kw",
            ".ky",
            ".kyoto",
            ".kz",
            ".la",
            ".lacaixa",
            ".lamborghini",
            ".lamer",
            ".lancaster",
            ".lancia",
            ".land",
            ".landrover",
            ".lanxess",
            ".lasalle",
            ".lat",
            ".latino",
            ".latrobe",
            ".law",
            ".lawyer",
            ".lb",
            ".lc",
            ".lds",
            ".lease",
            ".leclerc",
            ".lefrak",
            ".legal",
            ".lego",
            ".lexus",
            ".lgbt",
            ".li",
            ".lidl",
            ".life",
            ".lifeinsurance",
            ".lifestyle",
            ".lighting",
            ".like",
            ".lilly",
            ".limited",
            ".limo",
            ".lincoln",
            ".linde",
            ".link",
            ".lipsy",
            ".live",
            ".living",
            ".lixil",
            ".lk",
            ".llc",
            ".llp",
            ".loan",
            ".loans",
            ".locker",
            ".locus",
            ".loft",
            ".lol",
            ".london",
            ".lotte",
            ".lotto",
            ".love",
            ".lpl",
            ".lplfinancial",
            ".lr",
            ".ls",
            ".lt",
            ".ltd",
            ".ltda",
            ".lu",
            ".lundbeck",
            ".lupin",
            ".luxe",
            ".luxury",
            ".lv",
            ".ly",
            ".ma",
            ".macys",
            ".madrid",
            ".maif",
            ".maison",
            ".makeup",
            ".man",
            ".management",
            ".mango",
            ".map",
            ".market",
            ".marketing",
            ".markets",
            ".marriott",
            ".marshalls",
            ".maserati",
            ".mattel",
            ".mba",
            ".mc",
            ".mckinsey",
            ".md",
            ".me",
            ".med",
            ".media",
            ".meet",
            ".melbourne",
            ".meme",
            ".memorial",
            ".men",
            ".menu",
            ".merckmsd",
            ".metlife",
            ".mg",
            ".mh",
            ".miami",
            ".microsoft",
            ".mil",
            ".mini",
            ".mint",
            ".mit",
            ".mitsubishi",
            ".mk",
            ".ml",
            ".mlb",
            ".mls",
            ".mm",
            ".mma",
            ".mn",
            ".mo",
            ".mobi",
            ".mobile",
            ".moda",
            ".moe",
            ".moi",
            ".mom",
            ".monash",
            ".money",
            ".monster",
            ".mormon",
            ".mortgage",
            ".moscow",
            ".moto",
            ".motorcycles",
            ".mov",
            ".movie",
            ".mp",
            ".mq",
            ".mr",
            ".ms",
            ".msd",
            ".mt",
            ".mtn",
            ".mtr",
            ".mu",
            ".museum",
            ".mutual",
            ".mv",
            ".mw",
            ".mx",
            ".my",
            ".mz",
            ".na",
            ".nab",
            ".nadex",
            ".nagoya",
            ".name",
            ".nationwide",
            ".natura",
            ".navy",
            ".nba",
            ".nc",
            ".ne",
            ".nec",
            ".net",
            ".netbank",
            ".netflix",
            ".network",
            ".neustar",
            ".new",
            ".newholland",
            ".news",
            ".next",
            ".nextdirect",
            ".nexus",
            ".nf",
            ".nfl",
            ".ng",
            ".ngo",
            ".nhk",
            ".ni",
            ".nico",
            ".nike",
            ".nikon",
            ".ninja",
            ".nissan",
            ".nissay",
            ".nl",
            ".no",
            ".nokia",
            ".northwesternmutual",
            ".norton",
            ".now",
            ".nowruz",
            ".nowtv",
            ".np",
            ".nr",
            ".nra",
            ".nrw",
            ".ntt",
            ".nu",
            ".nyc",
            ".nz",
            ".obi",
            ".observer",
            ".off",
            ".office",
            ".okinawa",
            ".olayan",
            ".olayangroup",
            ".oldnavy",
            ".ollo",
            ".om",
            ".omega",
            ".one",
            ".ong",
            ".onl",
            ".online",
            ".onyourside",
            ".ooo",
            ".open",
            ".oracle",
            ".orange",
            ".org",
            ".organic",
            ".origins",
            ".osaka",
            ".otsuka",
            ".ott",
            ".ovh",
            ".pa",
            ".page",
            ".panasonic",
            ".paris",
            ".pars",
            ".partners",
            ".parts",
            ".party",
            ".passagens",
            ".pay",
            ".pccw",
            ".pe",
            ".pet",
            ".pf",
            ".pfizer",
            ".pg",
            ".ph",
            ".pharmacy",
            ".phd",
            ".philips",
            ".phone",
            ".photo",
            ".photography",
            ".photos",
            ".physio",
            ".pics",
            ".pictet",
            ".pictures",
            ".pid",
            ".pin",
            ".ping",
            ".pink",
            ".pioneer",
            ".pizza",
            ".pk",
            ".pl",
            ".place",
            ".play",
            ".playstation",
            ".plumbing",
            ".plus",
            ".pm",
            ".pn",
            ".pnc",
            ".pohl",
            ".poker",
            ".politie",
            ".porn",
            ".post",
            ".pr",
            ".pramerica",
            ".praxi",
            ".press",
            ".prime",
            ".pro",
            ".prod",
            ".productions",
            ".prof",
            ".progressive",
            ".promo",
            ".properties",
            ".property",
            ".protection",
            ".pru",
            ".prudential",
            ".ps",
            ".pt",
            ".pub",
            ".pw",
            ".pwc",
            ".py",
            ".qa",
            ".qpon",
            ".quebec",
            ".quest",
            ".qvc",
            ".racing",
            ".radio",
            ".raid",
            ".re",
            ".read",
            ".realestate",
            ".realtor",
            ".realty",
            ".recipes",
            ".red",
            ".redstone",
            ".redumbrella",
            ".rehab",
            ".reise",
            ".reisen",
            ".reit",
            ".reliance",
            ".ren",
            ".rent",
            ".rentals",
            ".repair",
            ".report",
            ".republican",
            ".rest",
            ".restaurant",
            ".review",
            ".reviews",
            ".rexroth",
            ".rich",
            ".richardli",
            ".ricoh",
            ".rightathome",
            ".ril",
            ".rio",
            ".rip",
            ".rmit",
            ".ro",
            ".rocher",
            ".rocks",
            ".rodeo",
            ".rogers",
            ".room",
            ".rs",
            ".rsvp",
            ".ru",
            ".rugby",
            ".ruhr",
            ".run",
            ".rw",
            ".rwe",
            ".ryukyu",
            ".sa",
            ".saarland",
            ".safe",
            ".safety",
            ".sakura",
            ".sale",
            ".salon",
            ".samsclub",
            ".samsung",
            ".sandvik",
            ".sandvikcoromant",
            ".sanofi",
            ".sap",
            ".sarl",
            ".sas",
            ".save",
            ".saxo",
            ".sb",
            ".sbi",
            ".sbs",
            ".sc",
            ".sca",
            ".scb",
            ".schaeffler",
            ".schmidt",
            ".scholarships",
            ".school",
            ".schule",
            ".schwarz",
            ".science",
            ".scjohnson",
            ".scor",
            ".scot",
            ".sd",
            ".se",
            ".search",
            ".seat",
            ".secure",
            ".security",
            ".seek",
            ".select",
            ".sener",
            ".services",
            ".ses",
            ".seven",
            ".sew",
            ".sex",
            ".sexy",
            ".sfr",
            ".sg",
            ".sh",
            ".shangrila",
            ".sharp",
            ".shaw",
            ".shell",
            ".shia",
            ".shiksha",
            ".shoes",
            ".shop",
            ".shopping",
            ".shouji",
            ".show",
            ".showtime",
            ".shriram",
            ".si",
            ".silk",
            ".sina",
            ".singles",
            ".site",
            ".sj",
            ".sk",
            ".ski",
            ".skin",
            ".sky",
            ".skype",
            ".sl",
            ".sling",
            ".sm",
            ".smart",
            ".smile",
            ".sn",
            ".sncf",
            ".so",
            ".soccer",
            ".social",
            ".softbank",
            ".software",
            ".sohu",
            ".solar",
            ".solutions",
            ".song",
            ".sony",
            ".soy",
            ".space",
            ".sport",
            ".spot",
            ".spreadbetting",
            ".sr",
            ".srl",
            ".ss",
            ".st",
            ".stada",
            ".staples",
            ".star",
            ".statebank",
            ".statefarm",
            ".stc",
            ".stcgroup",
            ".stockholm",
            ".storage",
            ".store",
            ".stream",
            ".studio",
            ".study",
            ".style",
            ".su",
            ".sucks",
            ".supplies",
            ".supply",
            ".support",
            ".surf",
            ".surgery",
            ".suzuki",
            ".sv",
            ".swatch",
            ".swiftcover",
            ".swiss",
            ".sx",
            ".sy",
            ".sydney",
            ".symantec",
            ".systems",
            ".sz",
            ".tab",
            ".taipei",
            ".talk",
            ".taobao",
            ".target",
            ".tatamotors",
            ".tatar",
            ".tattoo",
            ".tax",
            ".taxi",
            ".tc",
            ".tci",
            ".td",
            ".tdk",
            ".team",
            ".tech",
            ".technology",
            ".tel",
            ".temasek",
            ".tennis",
            ".teva",
            ".tf",
            ".tg",
            ".th",
            ".thd",
            ".theater",
            ".theatre",
            ".tiaa",
            ".tickets",
            ".tienda",
            ".tiffany",
            ".tips",
            ".tires",
            ".tirol",
            ".tj",
            ".tjmaxx",
            ".tjx",
            ".tk",
            ".tkmaxx",
            ".tl",
            ".tm",
            ".tmall",
            ".tn",
            ".to",
            ".today",
            ".tokyo",
            ".tools",
            ".top",
            ".toray",
            ".toshiba",
            ".total",
            ".tours",
            ".town",
            ".toyota",
            ".toys",
            ".tr",
            ".trade",
            ".trading",
            ".training",
            ".travel",
            ".travelchannel",
            ".travelers",
            ".travelersinsurance",
            ".trust",
            ".trv",
            ".tt",
            ".tube",
            ".tui",
            ".tunes",
            ".tushu",
            ".tv",
            ".tvs",
            ".tw",
            ".tz",
            ".ua",
            ".ubank",
            ".ubs",
            ".ug",
            ".uk",
            ".unicom",
            ".university",
            ".uno",
            ".uol",
            ".ups",
            ".us",
            ".uy",
            ".uz",
            ".va",
            ".vacations",
            ".vana",
            ".vanguard",
            ".vc",
            ".ve",
            ".vegas",
            ".ventures",
            ".verisign",
            ".versicherung",
            ".vet",
            ".vg",
            ".vi",
            ".viajes",
            ".video",
            ".vig",
            ".viking",
            ".villas",
            ".vin",
            ".vip",
            ".virgin",
            ".visa",
            ".vision",
            ".vistaprint",
            ".viva",
            ".vivo",
            ".vlaanderen",
            ".vn",
            ".vodka",
            ".volkswagen",
            ".volvo",
            ".vote",
            ".voting",
            ".voto",
            ".voyage",
            ".vu",
            ".vuelos",
            ".wales",
            ".walmart",
            ".walter",
            ".wang",
            ".wanggou",
            ".watch",
            ".watches",
            ".weather",
            ".weatherchannel",
            ".webcam",
            ".weber",
            ".website",
            ".wed",
            ".wedding",
            ".weibo",
            ".weir",
            ".wf",
            ".whoswho",
            ".wien",
            ".wiki",
            ".williamhill",
            ".win",
            ".windows",
            ".wine",
            ".winners",
            ".wme",
            ".wolterskluwer",
            ".woodside",
            ".work",
            ".works",
            ".world",
            ".wow",
            ".ws",
            ".wtc",
            ".wtf",
            ".xbox",
            ".xerox",
            ".xfinity",
            ".xihuan",
            ".xin",
            ".xxx",
            ".xyz",
            ".yachts",
            ".yahoo",
            ".yamaxun",
            ".yandex",
            ".ye",
            ".yodobashi",
            ".yoga",
            ".yokohama",
            ".you",
            ".youtube",
            ".yt",
            ".yun",
            ".za",
            ".zappos",
            ".zara",
            ".zero",
            ".zip",
            ".zm",
            ".zone",
            ".zuerich",
            ".zw"];
// TODO: if ever user change the settings the app must exit this Homepage
const data = new URLSearchParams(window.location.search).get("00OOOO0O0OO0");

function a() {
    const a = document.getElementById("search").value;
    const aq = a.toLowerCase();
    if (aq.startsWith("webvium://log")) {

    } else if (aq.startsWith("webvium://logcat")) {

    } else if (aq.startsWith("https://") || aq.startsWith("http://")) {
        if (isValidDomain(aq)) {
            window.location.href = a;
        } else {
            window.location.href = data + a;
        }
    } else {
        if (isValidDomain(aq)) {
            window.location.href = "https://" + a;
        } else {
            window.location.href = data + a;
        }
    }
}

function isValidDomain(url) {
    for (let i = 0; i < domains.length; i++) {
        if (url.endsWith(domains[i])) {
            return true;
        }
    }
}