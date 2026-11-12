/*
 * FourthWave: deep ocean.
 *
 *  1. Texts (EN / BS) and the language switch
 *  2. Smooth wheel scrolling (native scroll underneath, so sticky works)
 *  3. One frame loop: the sea, the hero logo, every scroll scene
 *  4. Reveals, nav state, service previews
 *  5. Dialogs and the contact form
 *
 * Scroll scenes are sections with data-scene. Each frame they get
 * --p (0..1 through the section) and --e (eased); styles.css does the rest.
 */

/*
 * Where contact form messages go. Leave empty until the address is decided;
 * the form then says that email is not set up yet instead of pretending.
 */
const CONTACT_EMAIL = "";

/* ================================================================ Texts */

// Arrays are headline lines (each rises separately).
const TEXT = {
  en: {
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "cta.talk": "Contact us",

    "hero.title": ["Web, apps", "and video.", "<em>All from</em>", "<em>one room.</em>"],
    "hero.lede": "FourthWave is a studio of four. We design and code websites, build mobile apps, edit video and run campaigns. No middlemen and no broken telephone, from the first call to launch you work directly with the people building your product.",
    "hero.work": "See our work",
    "hero.hint": "Scroll",


    "svc.title": ["What we", "<em>work on.</em>"],
    "svc.web": "Web Development",
    "svc.web.d": "Websites and web apps that open in a second, look great on every screen and don't need a developer for every text change.",
    "svc.mobile": "Mobile Development",
    "svc.mobile.d": "iOS and Android apps, from the first sketch on paper to launch on the App Store and Google Play.",
    "svc.video": "Video Editing",
    "svc.video.d": "Reels, ads and promo videos that hold attention. We turn raw footage into a story ready for every platform.",
    "svc.marketing": "Digital Marketing",
    "svc.marketing.d": "Social media content and paid campaigns that bring real enquiries, not just likes.",

    "web.title": ["Fast sites", "you control", "<em>yourselves.</em>"],
    "web.lede": "We plan the structure, design and write the code ourselves, no sluggish templates. When we're done, you get a system where your team can change text, images and offers in a few clicks, without calling us and waiting.",

    "mobile.title": ["Apps built", "<em>for real life.</em>"],
    "mobile.lede": "Before we write the first line of code, we look at how the app will be used, usually on the move, in a hurry and with one hand. We draw the screens around that. Once everything falls into place, we build the app, test it and guide you through the whole store launch.",
    "mobile.chip": "UI/UX design",
    "mobile.nfc": "NFC integrations",

    "video.title": ["We edit reels,", "ads and", "<em>promo</em>", "<em>videos.</em>"],
    "video.lede": "You send us the footage and tell us where it will be posted. We take care of the rest, we cut the excess, smooth out colour and sound, add pace and send back finished formats ready for Instagram, TikTok, YouTube or TV.",
    "video.play": "Watch with sound",
    "video.tag": "Our best work",


    "prod.tag": "Digital bar book",
    "prod.head": "See a shortage the moment it happens.",
    "prod.lede": "The waiter runs the shift on a phone, the owner sees every number live on a laptop, and paper and notebooks retire. Our own product, already used in venues every day.",
    "prod.s1": "A shift without the notebook",
    "prod.s1.d": "Quick entry and a clear view of stock without paper or a calculator.",
    "prod.s2": "Counting with pictures",
    "prod.s2.d": "No confusion about items; a new worker finds their way straight away.",
    "prod.s3": "A shortage shows up straight away",
    "prod.s3.d": "An exact view of the till and the stock at any moment.",
    "prod.s4": "A report on Telegram",
    "prod.s4.d": "As soon as the shift is closed, the owner gets the exact settlement and any shortage on their phone, even when they're not in the venue.",
    "prod.why": "Why venues choose Šanko",
    "prod.w1": "Runs on Android, Windows and the web",
    "prod.w2": "Works even when the internet goes down",
    "prod.w3": "Staff training takes 15 minutes",
    "prod.w4": "A simple monthly subscription per venue",
    "prod.demo": "Ask for a free demo",
    "prod.toast.now": "now",
    "prod.toast.title": "Korzo: shift 2 closed",
    "prod.toast.due": "To hand over",
    "prod.toast.short": "Short",
    "prod.more": "Everything about Šanko",

    "team.title": ["Who you'll", "<em>work with.</em>"],
    "team.lede": "There are four of us, and we have no account managers who just pass messages along. Whoever answers your email and has the first coffee with you is the one who sits down at the computer and works on your project.",

    "contact.title": ["Got an", "idea?", "<em>Let's talk.</em>"],
    "contact.lede": "Write briefly what you're working on. You don't need a finished plan, a rough idea is quite enough. We get back quickly with a few concrete questions or a suggestion for a short call.",

    "form.name": "Your name",
    "form.name.ph": "First and last name",
    "form.name.err": "Please enter your name.",
    "form.email": "Your email",
    "form.email.ph": "name@example.com",
    "form.email.err": "That email doesn't look right. Try something like name@example.com.",
    "form.service": "What do you need?",
    "form.c.web": "Web development",
    "form.c.mobile": "Mobile app",
    "form.c.video": "Video editing",
    "form.c.marketing": "Marketing",
    "form.multi": "A bit of everything",
    "form.service.err": "Pick one, even if you're not sure yet.",
    "form.message": "About the project",
    "form.message.ph": "Briefly describe what you want to achieve...",
    "form.message.err": "A couple of sentences helps us a lot (at least 20 characters).",
    "form.send": "Send message",
    "form.offline": "The form isn't connected to email yet, so this message wasn't sent. Please try again a little later.",
    "form.ready": "Your email app should open with the message filled in. Just hit send.",

    "footer.line": "FourthWave, a small studio for big ideas. Web, apps, video and marketing.",
    "footer.explore": "Navigation",
    "footer.follow": "Social media (soon)",
    "footer.top": "Back to top",

    "project.visit": "Visit website",
    "project.soon": "We're writing up this project. Check back soon.",
    "project.web": "Website",
    "project.app": "Mobile app",
    "project.finance": "Personal finance app",
  },

  bs: {
    "nav.services": "Usluge",
    "nav.work": "Radovi",
    "nav.team": "Tim",
    "nav.contact": "Kontakt",
    "cta.talk": "Pišite nam",

    "hero.title": ["Web, aplikacije", "i video.", "<em>Sve iz</em>", "<em>jedne sobe.</em>"],
    "hero.lede": "FourthWave je studio od četvero ljudi. Dizajniramo i kodiramo web stranice, pravimo mobilne aplikacije, montiramo video i vodimo kampanje. Bez posrednika i gluhe telefonije, od prvog poziva do objave radite direktno s ljudima koji prave vaš proizvod.",
    "hero.work": "Pogledajte radove",
    "hero.hint": "Skrolaj",


    "svc.title": ["Čime se", "<em>bavimo.</em>"],
    "svc.web": "Web razvoj",
    "svc.web.d": "Web stranice i aplikacije koje se otvaraju u sekundi, izgledaju odlično na svakom ekranu i ne traže programera za svaku izmjenu teksta.",
    "svc.mobile": "Mobilne aplikacije",
    "svc.mobile.d": "iOS i Android aplikacije, od prve skice na papiru do objave na App Store i Google Play.",
    "svc.video": "Video montaža",
    "svc.video.d": "Reelsi, reklame i promo videi koji drže pažnju. Od sirovog materijala pravimo priču spremnu za svaku mrežu.",
    "svc.marketing": "Digitalni marketing",
    "svc.marketing.d": "Sadržaj za društvene mreže i plaćene kampanje koje donose konkretne upite, a ne samo lajkove.",

    "web.title": ["Brze", "stranice koje", "sami", "<em>kontrolišete.</em>"],
    "web.lede": "Sami planiramo strukturu, dizajniramo i pišemo kod, bez tromih šablona. Kad završimo, dobijate sistem u kojem vaš tim može sam mijenjati tekst, slike i ponude u par klikova, bez da nas zovete i čekate.",

    "mobile.title": ["Aplikacije", "pravljene", "<em>za stvarni</em>", "<em>život.</em>"],
    "mobile.lede": "Prije nego napišemo prvu liniju koda, gledamo kako će se aplikacija koristiti, najčešće u hodu, na brzinu i jednom rukom. Po tome crtamo ekrane. Kada sve sjedne na svoje mjesto, aplikaciju razvijamo, testiramo i vodimo vas kroz cijeli proces objave na trgovinama.",
    "mobile.chip": "UI/UX dizajn",
    "mobile.nfc": "NFC integracije",

    "video.title": ["Montiramo", "reelse,", "reklame i", "<em>promo videe.</em>"],
    "video.lede": "Vi nam pošaljete snimke i kažete gdje ih objavljujete. Mi preuzimamo ostalo, režemo višak, peglamo boju i zvuk, dodajemo dinamiku i vraćamo vam gotove formate spremne za Instagram, TikTok, YouTube ili TV.",
    "video.play": "Pogledaj sa zvukom",
    "video.tag": "Naši najbolji radovi",


    "prod.tag": "Digitalna šankerska knjiga",
    "prod.head": "Manjak se vidi istog trenutka.",
    "prod.lede": "Konobar vodi smjenu na telefonu, gazda vidi svaki broj uživo na laptopu, a papiri i sveske odlaze u penziju. Naš vlastiti proizvod koji se već koristi u lokalima svaki dan.",
    "prod.s1": "Smjena bez sveske",
    "prod.s1.d": "Brzo kucanje i pregled stanja bez papira i digitrona.",
    "prod.s2": "Popis sa slikama",
    "prod.s2.d": "Nema zabune oko artikala, novi radnik se snalazi odmah.",
    "prod.s3": "Manjak se vidi odmah",
    "prod.s3.d": "Tačan uvid u stanje kase i robe u svakom trenutku.",
    "prod.s4": "Izvještaj na Telegram",
    "prod.s4.d": "Čim se smjena zaključi, gazdi na mobitel stiže tačan obračun i eventualni manjak, čak i kad nije u lokalu.",
    "prod.why": "Zašto ugostitelji biraju Šanko",
    "prod.w1": "Radi na Androidu, Windowsu i Webu",
    "prod.w2": "Radi i kad nestane interneta",
    "prod.w3": "Obuka osoblja traje 15 minuta",
    "prod.w4": "Jednostavna mjesečna pretplata po lokalu",
    "prod.demo": "Zatražite besplatan demo",
    "prod.toast.now": "sada",
    "prod.toast.title": "Korzo: smjena 2 zatvorena",
    "prod.toast.due": "Za predaju",
    "prod.toast.short": "Manjak",
    "prod.more": "Sve o Šanku",

    "team.title": ["S kim ćete", "<em>raditi.</em>"],
    "team.lede": "Nas je četvero i kod nas nema account managera koji samo prosljeđuju poruke. Ko vam odgovori na mail i s kim popijete prvu kafu, taj sjeda za računar i radi vaš projekat.",

    "contact.title": ["Imate", "ideju?", "<em>Hajde da</em>", "<em>pričamo.</em>"],
    "contact.lede": "Napišite ukratko na čemu radite. Ne morate imati spreman plan, i gruba ideja je sasvim dovoljna. Javljamo se brzo s par konkretnih pitanja ili prijedlogom za kratki poziv.",

    "form.name": "Vaše ime",
    "form.name.ph": "Ime i prezime",
    "form.name.err": "Molimo upišite svoje ime.",
    "form.email": "Vaš email",
    "form.email.ph": "ime@primjer.com",
    "form.email.err": "Ovaj email ne izgleda ispravno. Probajte nešto poput ime@primjer.com.",
    "form.service": "Šta vam treba?",
    "form.c.web": "Web razvoj",
    "form.c.mobile": "Mobilna aplikacija",
    "form.c.video": "Video montaža",
    "form.c.marketing": "Marketing",
    "form.multi": "Pomalo od svega",
    "form.service.err": "Odaberite jedno, čak i ako još niste sigurni.",
    "form.message": "O projektu",
    "form.message.ph": "Ukratko opišite šta želite postići...",
    "form.message.err": "Par rečenica nam mnogo znači (najmanje 20 znakova).",
    "form.send": "Pošalji poruku",
    "form.offline": "Forma još nije povezana s emailom, pa ova poruka nije poslana. Pokušajte malo kasnije.",
    "form.ready": "Vaša email aplikacija bi se trebala otvoriti s popunjenom porukom. Samo pritisnite pošalji.",

    "footer.line": "FourthWave, mali studio za velike ideje. Web, aplikacije, video i marketing.",
    "footer.explore": "Navigacija",
    "footer.follow": "Društvene mreže (uskoro)",
    "footer.top": "Na vrh",

    "project.visit": "Posjeti stranicu",
    "project.soon": "Opis ovog projekta pripremamo. Navratite uskoro.",
    "project.web": "Web stranica",
    "project.app": "Mobilna aplikacija",
    "project.finance": "Aplikacija za lične finansije",
  },
};

/*
 * Project details for the dialogs. Only what is known is filled in; an empty
 * description shows the "coming soon" line, an empty url hides the button.
 */
const PROJECTS = {
  perfectcv: { kind: "web", title: "PerfectCV", category: "project.web", image: "assets/content/web-perfectcv.jpg", alt: "Home page of the PerfectCV website.", description: "", url: "" },
  shift: { kind: "web", title: "SHIFT", category: "project.web", image: "assets/content/web-shift.jpg", alt: "Home page of the SHIFT website.", description: "", url: "" },
  // The app's real name is not known yet.
  finance: { kind: "mobile", titleKey: "project.finance", category: "project.app", image: "assets/content/mobile-finance.jpg", alt: "Home screen of a personal finance app.", description: "", url: "" },
  "shift-app": { kind: "mobile", title: "SHIFT", category: "project.app", image: "assets/content/mobile-shift.jpg", alt: "Check-in screen of the SHIFT app.", description: "", url: "" },
};

(() => {
  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const step = (x, a, b) => clamp((x - a) / (b - a));
  const lerp = (a, b, t) => a + (b - a) * t;
  const easeOut = (x) => 1 - Math.pow(1 - x, 3);
  const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const easeInOutQuint = (x) => (x < 0.5 ? 16 * x ** 5 : 1 - Math.pow(-2 * x + 2, 5) / 2);
  // Exponential smoothing that feels the same at 60 and 144 Hz.
  const follow = (rate, dt) => 1 - Math.exp(-rate * dt);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ============================================================ 1. Texts */

  let lang = "en";
  const t = (key) => TEXT[lang][key] ?? TEXT.en[key] ?? "";

  function renderLines(lines) {
    return lines.map((line, i) => `<span class="ln" style="--i:${i}"><span>${line}</span></span>`).join("");
  }

  function setLang(next) {
    lang = TEXT[next] ? next : "en";
    root.lang = lang === "bs" ? "bs" : "en";
    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = t(key);
      el.innerHTML = Array.isArray(value) ? renderLines(value) : value;
    });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    try { localStorage.setItem("fw-lang", lang); } catch {}
  }

  let saved = null;
  try { saved = localStorage.getItem("fw-lang"); } catch {}
  const guess = /^(bs|hr|sr|sh)\b/i.test(navigator.language || "") ? "bs" : "en";
  setLang(saved || guess);

  $$(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ===================================================== 2. Smooth scroll */

  // The wheel moves a target; the page glides toward it. Touch keeps its
  // native momentum. Keyboard and scrollbar still work as usual.
  let scrollCur = window.scrollY;
  let scrollTgt = scrollCur;
  let gliding = false;
  let introRunning = false;
  const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
  const dialogOpen = () => Boolean($("dialog[open]"));

  if (!reduceMotion) {
    window.addEventListener("wheel", (e) => {
      if (introRunning) { e.preventDefault(); return; }
      if (e.ctrlKey || dialogOpen()) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (e.target.closest("textarea, select")) return;
      e.preventDefault();
      const unit = e.deltaMode === 1 ? 36 : e.deltaMode === 2 ? window.innerHeight : 1;
      if (!gliding) scrollCur = scrollTgt = window.scrollY;
      scrollTgt = clamp(scrollTgt + e.deltaY * unit, 0, maxScroll());
      gliding = true;
    }, { passive: false });

    window.addEventListener("touchstart", () => { gliding = false; }, { passive: true });
  }

  window.addEventListener("scroll", () => {
    // Someone else moved the page (keys, scrollbar, touch): follow them.
    if (!gliding || Math.abs(window.scrollY - scrollCur) > 60) {
      gliding = false;
      scrollCur = scrollTgt = window.scrollY;
    }
  }, { passive: true });

  function glideTo(y) {
    const top = clamp(y, 0, maxScroll());
    if (reduceMotion) { window.scrollTo(0, top); return; }
    scrollCur = window.scrollY;
    scrollTgt = top;
    gliding = true;
  }

  // In-page links land where each scene looks finished.
  function anchorTop(el) {
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (el.id === "top") return 0;
    if (el.matches("[data-scene]")) {
      const travel = el.offsetHeight - window.innerHeight;
      const at = el.id === "sanko" ? 0.2 : 0.62;
      return top + travel * at;
    }
    return top - 40;
  }

  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.getElementById(link.getAttribute("href").slice(1));
    if (!target) return;
    e.preventDefault();
    glideTo(anchorTop(target));
  });

  /* ==================================================== 3. Frame loop */

  const bar = $("#bar");
  const hero = $(".hero");
  const heroLogo = $("#heroLogo");
  const heroLogoInner = $(".logo", heroLogo);
  const heroCopy = $("#heroCopy");
  const hint = $("#hint");
  const scenes = $$("[data-scene]").map((el) => ({ el, name: el.dataset.scene, p: -1, v: -1, vin: -1, pin: -1 }));
  const seaZones = $$("[data-sea]");
  const filmVideo = $(".film video");
  const navLinks = $$(".bar-nav a");
  const people = $$(".person[data-speed]");

  const layer = (name) => $(`[data-layer="${name}"]`);
  const L = {
    band: layer("band"),
    box: layer("box"),
    wave: layer("wave"),
    fourth: layer("fourth"),
    wordWave: layer("word-wave"),
    dot: layer("dot"),
  };
  const glow = $("#heroGlow");
  const horizonLine = $("#heroLine");
  const flash = $("#heroFlash");

  let vw = window.innerWidth;
  let vh = window.innerHeight;
  let narrow = vw <= 960;
  let heroBox;
  const RATIO = 2437 / 7010;

  function measure() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    narrow = vw <= 960;
    const gutter = clamp(vw * 0.04, 20, 64);
    const start = narrow
      ? { w: vw - gutter * 2, cx: vw / 2, cy: vh * 0.44 }
      : { w: Math.min(vw * 0.7, 1180), cx: vw / 2, cy: vh * 0.5 };
    const end = narrow
      ? { w: vw - gutter * 2, cx: vw / 2, cy: Math.max(130, vh * 0.25) }
      : { w: Math.min(vw * 0.4, 640), cx: vw - gutter - Math.min(vw * 0.4, 640) / 2, cy: vh * 0.34 };
    heroBox = { start, end };
    heroLogo.style.width = `${start.w}px`;

    sizeSea();
  }

  /* ---- Hero */

  let mx = 0;
  let my = 0;
  let pmx = 0;
  let pmy = 0;

  /*
   * The intro, on its own clock (ms since the logo images have loaded):
   *
   *    0 -  950   a spark: the full stop lights up in the dark and beats twice
   *  850 - 1250   it tears open into a yellow horizon line over a calm sea
   * 1150 - 1650   the yellow plate unfolds out of that line
   * 1400 - 2200   the wave surges up from below and crashes onto the plate
   * 1950 - 2400   the blue block slices in from the left
   * 2250 - 2900   "fourth" and "wave" punch up out of the block
   * 2800 - 3250   the full stop flies back in an arc and lands: flash, shock, shine
   *
   * The logo's wave is the only wave: the sea stays calm until it lands, then
 * each landing sends a ring through it and shakes the logo.
   */
  const T_DOT = [0, 950];
  const T_LINE = [850, 1250];
  const T_BAND = [1150, 1650];
  const T_WAVE = [1400, 2200];
  const T_BOX = [1950, 2400];
  const T_FOURTH = [2250, 2750];
  const T_WORD = [2400, 2900];
  const T_LAND = [2800, 3250];
  const FINAL_AT = T_LAND[0] + (T_LAND[1] - T_LAND[0]) * 0.55;
  const INTRO_END = 3500;
  const DOT_X = 0.5 - (0.860485 + 0.0086305); // from its place to the logo centre, share of width
  const DOT_Y = 0.5 - (0.6627 + 0.024620);    // share of height

  let introStart = -1; // -1 waiting for images; 0 skipped
  let introT = 0;
  let assembled = 0;
  let shakeAmp = 0;
  let glowAmp = 0;
  let flashAmp = 0;
  let camera = 1;
  const hits = new Set();
  const shocks = [];

  const span = ([a, b]) => clamp((introT - a) / (b - a));
  // Damped spring 0 -> 1 with one clear overshoot.
  const spring = (t, k = 6.2, w = 10.5) => (t <= 0 ? 0 : t >= 1 ? 1 : 1 - Math.exp(-k * t) * Math.cos(w * t));
  const expoOut = (x) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x));

  function shock(strength, time, at = 0.5) {
    const { start } = heroBox;
    shocks.push({ t0: time, x: start.cx + (at - 0.5) * start.w, y: start.cy, s: strength });
    shakeAmp = Math.max(shakeAmp, 11 * strength);
    glowAmp = Math.max(glowAmp, 0.6 * strength);
  }

  // Fires once per name when the moment comes (only while the intro really plays).
  function hit(name, when, strength, time, at) {
    if (hits.has(name) || introT < when) return;
    hits.add(name);
    if (introStart > 0) shock(strength, time, at);
  }

  function renderHero(p, time) {
    const W = heroBox.start.w;
    const H = W * RATIO;
    pmx += (mx - pmx) * 0.05;
    pmy += (my - pmy) * 0.05;
    const ink = (el, away) => { el.style.filter = away > 0.002 ? `invert(${Math.min(0.92, away).toFixed(3)})` : ""; };

    // 1. Spark, then the dot flies home in an arc at the very end.
    const born = spring(span([0, 520]), 5, 9);
    const beat = Math.max(0, Math.sin(clamp((introT - 420) / 520) * Math.PI * 2)) * 0.45;
    const tear = easeInOut(span([780, 980]));         // the spark stretches into the line
    const home = spring(span(T_LAND), 5.5, 9.5);
    const arc = Math.sin(clamp(span(T_LAND) * 1.4) * Math.PI) * -0.55; // lifts on the way
    const waiting = introT < T_LAND[0];
    const dotX = waiting ? DOT_X * W : DOT_X * W * (1 - home);
    const dotY = waiting ? DOT_Y * H : (DOT_Y * H + arc * H) * (1 - home);
    const dotScale = waiting ? (born * 3.2 + beat * 2) * (1 - tear) : 0.4 + 0.6 * home;
    L.dot.style.transform = `translate3d(${dotX.toFixed(1)}px, ${dotY.toFixed(1)}px, 40px) scale(${Math.max(0, dotScale).toFixed(3)})`;
    L.dot.style.opacity = waiting ? (1 - tear).toFixed(3) : clamp(span(T_LAND) * 6).toFixed(3);
    ink(L.dot, waiting ? 0.92 : 0.92 * (1 - home));

    // 2. The horizon line tears out of the spark, then becomes the plate.
    const lineOut = expoOut(span(T_LINE));
    const lineGone = easeOut(span([T_BAND[0] + 80, T_BAND[0] + 380]));
    horizonLine.style.transform = `scaleX(${lineOut.toFixed(4)})`;
    horizonLine.style.opacity = (Math.min(1, lineOut * 3) * (1 - lineGone)).toFixed(3);

    // 3. The plate unfolds from the line.
    const band = spring(span(T_BAND), 6.5, 11);
    L.band.style.transform = `scaleY(${Math.max(0.004, band).toFixed(4)}) scaleX(${(0.55 + 0.45 * easeOut(span(T_BAND))).toFixed(4)})`;
    L.band.style.opacity = introT > T_BAND[0] ? "1" : "0";

    // 4. The wave surges up from below and crashes into place.
    const surge = spring(span(T_WAVE), 5.2, 9);
    const wLeft = 1 - surge;
    // Never behind the plate, even when the spring overshoots (3D depth sorting).
    const wZ = 1 + Math.max(0, wLeft) * 260;
    L.wave.style.transform =
      `translate3d(${(wLeft * 0.12 * W).toFixed(1)}px, ${(wLeft * 1.1 * H).toFixed(1)}px, ${wZ.toFixed(1)}px) ` +
      `rotateZ(${(wLeft * -14).toFixed(2)}deg) scale(${(1 + wLeft * 0.9).toFixed(4)})`;
    L.wave.style.opacity = clamp(span(T_WAVE) * 5).toFixed(3);
    ink(L.wave, Math.max(0, wLeft) * 1.3);
    hit("wave", T_WAVE[0] + 220, 1.15, time, 0.6);

    // 5. The blue block slices in from the left.
    const cut = expoOut(span(T_BOX));
    const squash = spring(span(T_BOX), 7, 12);
    L.box.style.clipPath = `inset(0 ${((1 - cut) * 100).toFixed(2)}% 0 0)`;
    L.box.style.transform = `scaleY(${(0.6 + 0.4 * squash).toFixed(4)})`;
    L.box.style.opacity = introT > T_BOX[0] ? "1" : "0";
    hit("box", T_BOX[0] + 120, 0.55, time, 0.35);

    // 6. The words punch up out of the block.
    for (const [el, t, name, at] of [[L.fourth, T_FOURTH, "fourth", 0.33], [L.wordWave, T_WORD, "word", 0.68]]) {
      const u = spring(span(t), 6, 11);
      const lift = 1 - u;
      el.style.transform = `translate3d(0, ${(lift * 0.55 * H).toFixed(1)}px, 2px) skewY(${(lift * 9).toFixed(2)}deg) scale(${(1 + lift * 0.25).toFixed(4)})`;
      el.style.clipPath = `inset(${(Math.max(0, lift) * -40).toFixed(1)}% -10% ${(Math.max(0, lift) * 100).toFixed(1)}% -10%)`;
      el.style.opacity = clamp(span(t) * 6).toFixed(3);
      hit(name, t[0] + 140, 0.5, time, at);
    }

    // 7. Home: flash, the biggest ring, a sweep of light.
    if (!hits.has("final") && introT >= FINAL_AT) {
      hits.add("final");
      if (introStart > 0) {
        shock(1.6, time, 0.87);
        flashAmp = 0.55;
        heroLogoInner.classList.add("shine");
      }
    }
    const since = introT - FINAL_AT;
    const punch = since < 0 || introStart <= 0 ? 0 : 0.06 * Math.exp(-since / 240) * Math.cos(since / 62);

    // Camera: starts close and settles back while everything lands.
    camera = 1 + 0.16 * (1 - easeOut(clamp(introT / 3300)));
    shakeAmp *= 0.86;
    glowAmp *= 0.95;
    flashAmp *= 0.88;
    flash.style.opacity = flashAmp.toFixed(3);
    const shakeX = shakeAmp * Math.sin(time * 0.11);
    const shakeY = shakeAmp * 0.6 * Math.cos(time * 0.137);

    // The finished logo leans gently toward the pointer.
    const done = step(assembled, 0.93, 1);
    heroLogoInner.style.transform =
      `rotateY(${(pmx * 6 * done).toFixed(2)}deg) rotateX(${(-pmy * 4 * done).toFixed(2)}deg)`;

    // Scrolling moves it aside to make room for the headline.
    const m = easeInOut(step(p, 0, 0.75));
    const { start, end } = heroBox;
    const w = lerp(start.w, end.w, m);
    const cx = lerp(start.cx, end.cx, m) + shakeX;
    const cy = lerp(start.cy, end.cy, m) + shakeY;
    const breathe = (1 + Math.sin(time * 0.0012) * 0.006 * done * (1 - m) + punch) * lerp(camera, 1, m);
    heroLogo.style.transform = `translate3d(${(cx - w / 2).toFixed(1)}px, ${(cy - (w * RATIO) / 2).toFixed(1)}px, 0) scale(${((w / start.w) * breathe).toFixed(4)})`;
    glow.style.opacity = ((glowAmp + 0.22 * done + born * 0.35 * (1 - tear)) * (1 - m * 0.7)).toFixed(3);

    heroCopy.style.setProperty("--c", step(p, 0.22, 0.92).toFixed(4));
    heroCopy.style.visibility = p < 0.2 ? "hidden" : "visible";
    hint.style.opacity = (done * (1 - step(p, 0, 0.12))).toFixed(3);
  }

  /* ---- Scenes */

  function sceneProgress(r) {
    const travel = r.height - vh;
    return travel > 0 ? clamp(-r.top / travel) : r.top < 0 ? 1 : 0;
  }


  /* ---- Šanko: the laptop opens, the phone rises, then four screens */

  const prodEl = document.getElementById("sanko");
  const prod = prodEl && {
    steps: [...prodEl.querySelectorAll(".product-steps li")],
    dots: [...prodEl.querySelectorAll(".product-dots i")],
    phone: [...prodEl.querySelectorAll('[data-screens="phone"] img')],
    desk: [...prodEl.querySelectorAll('[data-screens="laptop"] img')],
  };

  function renderProduct(el, p) {
    el.style.setProperty("--open", easeInOut(step(p, 0, 0.18)).toFixed(4));
    const n = prod.steps.length;
    const phase = step(p, 0.2, 0.88) * (n - 1);
    const k = Math.min(n - 2, Math.floor(phase));
    // Each screen holds still for most of its stretch, then hands over.
    const tt = easeInOut(step(phase - k, 0.62, 1));

    for (let i = 0; i < n; i++) {
      const a = i === k ? 1 - tt : i === k + 1 ? tt : 0;
      prod.steps[i].style.setProperty("--a", a.toFixed(3));
      prod.steps[i].classList.toggle("on", i === (tt < 0.5 ? k : k + 1));
      prod.dots[i].style.setProperty("--a", clamp(step(p, 0.06, 0.88) * n - i).toFixed(3));

      // Phone: screens push in from the right, like moving through the app.
      const ph = prod.phone[i];
      const dk = prod.desk[i];
      if (i < k || i > k + 1) {
        ph.style.opacity = "0";
        dk.style.opacity = "0";
        continue;
      }
      const isNext = i === k + 1;
      ph.style.opacity = isNext && tt === 0 ? "0" : "1";
      ph.style.transform = isNext
        ? `translate3d(${((1 - tt) * 100).toFixed(2)}%,0,0)`
        : `translate3d(${(-tt * 28).toFixed(2)}%,0,0) scale(${(1 - tt * 0.04).toFixed(4)})`;
      ph.style.filter = isNext ? "" : `brightness(${(1 - tt * 0.35).toFixed(3)})`;
      // Laptop: a soft crossfade with a little settle.
      dk.style.opacity = isNext ? tt.toFixed(3) : "1";
      dk.style.transform = isNext ? `scale(${(1.035 - tt * 0.035).toFixed(4)})` : "";
    }
    el.style.setProperty("--toast", easeOut(step(p, 0.86, 0.95)).toFixed(4));
  }

  let videoPlaying = false;

  /* ---- The reel: timecode, playhead and the clip under it */

  const reelTrack = $("#reelTrack");
  const reelClips = $$("#reelTrack button");
  const reelStarts = reelClips.map((b) => Number(b.dataset.t));
  const reelHead = $("#reelHead");
  const reelTc = $("#reelTc");
  const reelClip = $("#reelClip");
  const FPS = 24;
  let reelOn = -1;
  let reelLoop = false;

  const pad = (n) => String(n).padStart(2, "0");
  const timecode = (t) => {
    const f = Math.floor(t * FPS);
    return `00:${pad(Math.floor(f / (FPS * 60)))}:${pad(Math.floor(f / FPS) % 60)}:${pad(f % FPS)}`;
  };

  function reelTick() {
    const d = filmVideo.duration || 1;
    const t = filmVideo.currentTime;
    reelHead.style.setProperty("--t", (t / d).toFixed(4));
    reelTc.textContent = timecode(t);
    let i = reelStarts.length - 1;
    while (i > 0 && reelStarts[i] > t) i--;
    if (i !== reelOn) {
      if (reelOn >= 0) reelClips[reelOn].classList.remove("on");
      reelClips[i].classList.add("on");
      reelOn = i;
      reelClip.textContent = `${pad(i + 1)} / ${pad(reelClips.length)}`;
    }
    if (reelLoop) requestAnimationFrame(reelTick);
  }

  if (reelTrack) {
    filmVideo.addEventListener("loadedmetadata", () => { $("#reelDur").textContent = timecode(filmVideo.duration); reelTick(); });
    filmVideo.addEventListener("play", () => { if (!reelLoop) { reelLoop = true; requestAnimationFrame(reelTick); } });
    filmVideo.addEventListener("pause", () => { reelLoop = false; });
    filmVideo.addEventListener("seeked", reelTick);
    reelClips.forEach((b) => b.addEventListener("click", () => {
      filmVideo.currentTime = Number(b.dataset.t) + 0.02;
      filmVideo.play().catch(() => {});
    }));
  }

  function renderScenes(time, dt) {
    const k = reduceMotion ? 1 : follow(9, dt);
    for (const s of scenes) {
      const r = s.el.getBoundingClientRect();
      const target = reduceMotion ? 1 : sceneProgress(r);
      const enter = reduceMotion ? 1 : clamp(1 - r.top / vh);
      // A second, lighter smoothing on top of the scroll keeps every scene
      // silky, also when scrolling by touch or keyboard.
      s.v = s.v < 0 ? target : s.v + (target - s.v) * k;
      s.vin = s.vin < 0 ? enter : s.vin + (enter - s.vin) * k;
      if (Math.abs(target - s.v) < 0.0004) s.v = target;
      const p = s.v;
      if (s.name === "hero") { renderHero(p, time); continue; }
      if (Math.abs(p - s.p) < 0.0002 && Math.abs(s.vin - s.pin) < 0.0002) continue;
      s.p = p;
      s.pin = s.vin;
      s.el.style.setProperty("--p", p.toFixed(4));
      s.el.style.setProperty("--in", easeOut(s.vin).toFixed(4));

      if (s.name === "web") {
        s.el.style.setProperty("--e", easeOut(step(p, 0, 0.55)).toFixed(4));
        s.el.style.setProperty("--e2", easeOut(step(p, 0.12, 0.7)).toFixed(4));
      } else if (s.name === "video") {
        s.el.style.setProperty("--e", easeInOut(step(p, 0.08, 0.62)).toFixed(4));
        const onScreen = r.top < vh && r.bottom > 0;
        if (onScreen !== videoPlaying) {
          videoPlaying = onScreen;
          if (onScreen) filmVideo.play().catch(() => {});
          else filmVideo.pause();
        }
      } else if (s.name === "product" && prod) {
        renderProduct(s.el, p);
      }
    }
  }

  /* ---- Fixed chrome, parallax */

  let currentNav = "";

  function renderChrome() {
    const heroBottom = hero.getBoundingClientRect().bottom;
    bar.classList.toggle("docked", reduceMotion || heroBottom < vh * 0.55);
    bar.classList.toggle("solid", heroBottom < vh * 0.55);

    const mid = vh * 0.5;
    let section = "";
    for (const id of ["services", "web", "mobile", "video", "sanko", "team", "contact"]) {
      const r = document.getElementById(id).getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) section = id;
    }
    const nav = ["web", "mobile", "video"].includes(section) ? "web" : section;
    if (nav !== currentNav) {
      currentNav = nav;
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${nav}`));
    }

    if (!reduceMotion) {
      for (const person of people) {
        const r = person.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const offset = (r.top + r.height / 2 - mid) * -Number(person.dataset.speed);
        person.style.setProperty("--py", `${offset.toFixed(1)}px`);
      }
    }
  }

  /* ---- The sea: wave lines in perspective, stirred by scroll and pointer */

  const sea = $("#sea");
  const ctx = sea.getContext("2d");
  let dpr = 1;
  let seaW = 0;
  let seaH = 0;
  let seaAlpha = 1;
  let phase = 0;
  let swell = 1;
  let lastY = window.scrollY;
  let px = -9999;
  let pEnergy = 0;

  function sizeSea() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    seaW = window.innerWidth;
    seaH = window.innerHeight;
    sea.width = Math.round(seaW * dpr);
    sea.height = Math.round(seaH * dpr);
  }

  function seaTarget() {
    const mid = vh * 0.5;
    for (const zone of seaZones) {
      const r = zone.getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) return Number(zone.dataset.sea);
    }
    return 0.3;
  }

  function drawSea(time) {
    const y = window.scrollY;
    const v = y - lastY;
    lastY = y;
    phase += v * 0.0026;
    swell += (1 + Math.min(Math.abs(v) * 0.018, 1.3) - swell) * 0.05;
    pEnergy *= 0.97;
    seaAlpha += (seaTarget() - seaAlpha) * 0.05;
    sea.style.opacity = seaAlpha.toFixed(3);
    if (seaAlpha < 0.01) return;

    const T = time * 0.001;
    const W = seaW;
    const H = seaH;
    const rise = easeInOut(clamp((introT - 850) / 1600));
    const reveal = expoOut(clamp((introT - 900) / 900)) * W * 0.56;
    for (let j = shocks.length - 1; j >= 0; j--) if (time - shocks[j].t0 > 2400) shocks.splice(j, 1);
    const lines = narrow ? 26 : 36;
    const horizon = H * 0.5;
    const stepX = narrow ? 8 : 6;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1;

    for (let i = 0; i < lines; i++) {
      const z = i / (lines - 1);
      const base = horizon + (H - horizon + 80) * Math.pow(z, 1.75);
      const amp = (3 + 52 * z * z) * swell * (0.08 + 0.92 * rise);
      const f = 0.0032 * (1.6 - z);
      const crest = i === Math.round(lines * 0.62);

      ctx.beginPath();
      let started = false;
      for (let x = -stepX; x <= W + stepX; x += stepX) {
        let n =
          Math.sin(x * f + T * 0.5 + i * 0.42 + phase) * 0.55 +
          Math.sin(x * f * 2.7 - T * 0.85 + i * 0.9 - phase * 0.6) * 0.28 +
          Math.sin(x * 0.0011 + T * 0.22 + i * 0.13) * 0.6;
        if (pEnergy > 0.01) {
          const d = x - px;
          n += Math.exp(-(d * d) / 26000) * Math.sin(T * 3 - Math.abs(d) * 0.028) * 1.1 * pEnergy * z;
        }
        // Rings spreading out from where the logo landed (squashed by perspective).
        for (const sh of shocks) {
          const age = time - sh.t0;
          const d = Math.hypot(x - sh.x, (base - sh.y) * 2.4);
          const ring = (d - age * 0.95) / 80;
          n += Math.exp(-ring * ring) * sh.s * 1.7 * Math.exp(-age / 850) * (0.35 + z);
        }
        const yy = base + n * amp;
        if (crest && Math.abs(x - W / 2) > reveal) { started = false; continue; }
        if (!started) { ctx.moveTo(x, yy); started = true; }
        else ctx.lineTo(x, yy);
      }
      if (crest) {
        ctx.strokeStyle = `rgba(255, 181, 0, ${(0.55 * z + 0.4 * glowAmp).toFixed(3)})`;
        ctx.lineWidth = 1.3;
      } else {
        ctx.strokeStyle = `rgba(0, 150, 255, ${((0.04 + 0.42 * Math.pow(z, 1.4)) * rise).toFixed(3)})`;
        ctx.lineWidth = 1;
      }
      ctx.stroke();
    }
  }

  /* ---- The loop */

  let lastTime = 0;

  function frame(time) {
    const dt = Math.min(0.05, lastTime ? (time - lastTime) / 1000 : 1 / 60);
    lastTime = time;
    if (gliding) {
      scrollCur += (scrollTgt - scrollCur) * follow(6.5, dt);
      if (Math.abs(scrollTgt - scrollCur) < 0.4) { scrollCur = scrollTgt; gliding = false; }
      window.scrollTo(0, scrollCur);
    }
    if (introStart > 0) {
      introT = time - introStart;
      assembled = clamp(introT / INTRO_END);
      if (introRunning && introT >= INTRO_END - 200) {
        introRunning = false;
        root.style.overflow = "";
      }
    }
    renderScenes(time, dt);
    renderChrome();
    drawSea(time);
    if (!reduceMotion) requestAnimationFrame(frame);
  }

  window.addEventListener("pointermove", (e) => {
    mx = (e.clientX / vw) * 2 - 1;
    my = (e.clientY / vh) * 2 - 1;
    px = e.clientX;
    pEnergy = Math.min(1, pEnergy + 0.08);
  }, { passive: true });

  window.addEventListener("resize", () => {
    measure();
    scenes.forEach((s) => { s.p = -1; });
    if (reduceMotion) frame(performance.now());
  });

  measure();
  if (location.hash) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) window.scrollTo(0, anchorTop(target));
  }
  requestAnimationFrame(frame);
  playIntro();

  /* ---- Intro: the logo puts itself together while the page loads */

  function playIntro() {
    const pieces = Object.values(L).filter((el) => el.tagName === "IMG");
    const loaded = Promise.all(pieces.map((img) => (img.decode ? img.decode().catch(() => {}) : Promise.resolve())));
    const timeout = new Promise((resolve) => setTimeout(resolve, 2500));

    if (reduceMotion || window.scrollY > 40) {
      introStart = 0;
      introT = 1e9;
      assembled = 1;
      heroLogo.classList.add("ready");
      return;
    }

    introRunning = true;
    root.style.overflow = "hidden";
    Promise.race([loaded, timeout]).then(() => {
      heroLogo.classList.add("ready");
      requestAnimationFrame((now) => { introStart = now; });
    });
  }

  /* ===================================== 4. Reveals and service previews */

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });
  $$(".rv").forEach((el) => io.observe(el));

  if (finePointer && !reduceMotion) {
    const preview = $("#svcPreview");
    const img = $("img", preview);
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let follow = 0;
    const move = () => {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      preview.style.left = `${cx}px`;
      preview.style.top = `${cy}px`;
      follow = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5 ? requestAnimationFrame(move) : 0;
    };
    $$(".svc").forEach((svc) => {
      svc.addEventListener("pointerenter", (e) => {
        if (!preview.classList.contains("on")) { cx = tx = e.clientX + 170; cy = ty = e.clientY; }
        img.src = svc.dataset.img;
        preview.classList.add("on");
      });
      svc.addEventListener("pointermove", (e) => {
        tx = e.clientX + 170;
        ty = e.clientY;
        if (!follow) follow = requestAnimationFrame(move);
      });
      svc.addEventListener("pointerleave", () => preview.classList.remove("on"));
    });
  }

  $("#year").textContent = new Date().getFullYear();

  /* ---- Šanko: "ask for a demo" */

  // "Ask for a demo" lands on the form with Šanko already chosen; the Šanko
  // page links here with ?service=sanko#contact.
  function pickService(value) {
    const choice = $$('#contactForm input[name="service"]').find((r) => r.value === value);
    if (choice) choice.checked = true;
  }
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-pick]");
    if (link) pickService(link.dataset.pick);
  });
  if (new URLSearchParams(location.search).get("service") === "sanko") pickService("Šanko");


  /* ================================================ 5. Dialogs and form */

  function openDialog(dialog) {
    gliding = false;
    root.style.overflow = "hidden";
    dialog.showModal();
  }

  $$("dialog").forEach((dialog) => {
    dialog.addEventListener("close", () => {
      root.style.overflow = "";
      $("video", dialog)?.pause();
    });
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog || e.target.closest("[data-close]")) dialog.close();
    });
  });

  const projectDialog = $("#projectDialog");
  $$("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = PROJECTS[button.dataset.project];
      if (!project) return;
      const media = $("#projectMedia");
      media.className = `project-media ${project.kind}`;
      media.replaceChildren(Object.assign(new Image(), { src: project.image, alt: project.alt }));
      $("#projectCategory").textContent = t(project.category);
      $("#projectTitle").textContent = project.titleKey ? t(project.titleKey) : project.title;
      $("#projectDescription").textContent = project.description || t("project.soon");
      const link = $("#projectLink");
      link.hidden = !project.url;
      if (project.url) link.href = project.url;
      openDialog(projectDialog);
    });
  });

  const videoDialog = $("#videoDialog");
  $("[data-video]").addEventListener("click", () => {
    openDialog(videoDialog);
    const player = $("#videoPlayer");
    player.currentTime = 0;
    player.play().catch(() => {});
    filmVideo.pause();
    videoPlaying = false;
  });

  const form = $("#contactForm");
  const notice = $("#contactNotice");
  const fields = $$(".field", form);

  function checkField(field) {
    let ok;
    if (field.matches(".choice")) {
      ok = Boolean(form.elements.service.value);
    } else {
      const input = $("input, textarea", field);
      const min = input.minLength > 0 ? input.minLength : 1;
      ok = input.checkValidity() && input.value.trim().length >= min;
    }
    field.classList.toggle("invalid", !ok);
    $(".error", field).hidden = ok;
    return ok;
  }

  fields.forEach((field) => {
    field.addEventListener("focusout", () => { if (!field.matches(".choice")) checkField(field); });
    field.addEventListener("input", () => { if (field.classList.contains("invalid")) checkField(field); });
    field.addEventListener("change", () => { if (field.classList.contains("invalid")) checkField(field); });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = fields.map(checkField);
    const firstBad = results.indexOf(false);
    if (firstBad >= 0) {
      $("input, textarea", fields[firstBad])?.focus();
      return;
    }
    notice.hidden = false;
    if (!CONTACT_EMAIL) {
      notice.textContent = t("form.offline");
      return;
    }
    // Opens the visitor's email app with the message ready to send.
    const data = new FormData(form);
    const subject = `New project: ${data.get("service")}, ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    notice.textContent = t("form.ready");
  });
})();
