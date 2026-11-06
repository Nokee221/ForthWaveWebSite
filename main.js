/*
 * FourthWave — deep ocean.
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

// Arrays are headline lines (each rises separately). *word* in the statement is highlighted.
const TEXT = {
  en: {
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "cta.talk": "Let's talk",

    "hero.kicker": "Creative technology studio",
    "hero.areas": "Web / Mobile / Video / Marketing",
    "hero.title": ["Web, mobile", "and video.", "<em>One team.</em>"],
    "hero.lede": "We design, build and edit under one roof, so your website, your app and your launch video look like they came from the same company.",
    "hero.work": "See the work",
    "hero.hint": "Scroll",

    statement: "Four people, four crafts, *one* *wave.* We take your brand from the first line of code to the last frame of the edit.",

    "svc.kicker": "What we do",
    "svc.title": ["Digital solutions.", "Creative experiences.", "<em>Measurable impact.</em>"],
    "svc.web": "Web Development",
    "svc.web.d": "Fast, modern websites and web apps, built to perform.",
    "svc.mobile": "Mobile Development",
    "svc.mobile.d": "Intuitive iOS and Android apps people enjoy using.",
    "svc.video": "Video Editing",
    "svc.video.d": "Edits that turn raw footage into stories worth watching.",
    "svc.marketing": "Digital Marketing",
    "svc.marketing.d": "Campaigns that help brands reach and keep their audience.",

    "web.kicker": "Web development",
    "web.title": ["Websites built", "to make an", "<em>impression.</em>"],
    "web.lede": "Modern sites and web apps that combine careful design, speed and usability. Open a project to take a closer look.",

    "mobile.kicker": "Mobile development",
    "mobile.title": ["Powerful", "experiences.", "<em>Made for mobile.</em>"],
    "mobile.lede": "We build intuitive mobile applications designed around the people who use them.",
    "mobile.chip": "Product design",

    "video.kicker": "Video editing & production",
    "video.title": ["Stories that", "<em>move people.</em>"],
    "video.lede": "From social content to cinematic brand commercials, we turn ideas into images people remember.",
    "video.play": "Play showreel",

    "mkt.kicker": "Digital marketing",
    "mkt.title": ["Your next", "<em>big idea</em>", "starts here."],
    "mkt.lede": "Creative thinking, strong content and a clear strategy, so your brand shows up online the way it should.",
    "mkt.s1": "Strategy",
    "mkt.s1.d": "Define the direction, the audience and the message.",
    "mkt.s2": "Create",
    "mkt.s2.d": "Turn ideas into content that is worth stopping for.",
    "mkt.s3": "Grow",
    "mkt.s3.d": "Build a consistent, recognisable presence online.",
    "mkt.areas": "Where we help",
    "mkt.a1": "Social media",
    "mkt.a1.d": "Content and a consistent brand presence across platforms.",
    "mkt.a2": "Content creation",
    "mkt.a2.d": "Visuals designed to communicate one idea clearly.",
    "mkt.a3": "Paid advertising",
    "mkt.a3.d": "Ad concepts and campaign support.",
    "mkt.a4": "Digital strategy",
    "mkt.a4.d": "A clearer direction for how your brand talks and grows.",

    "team.kicker": "The people behind FourthWave",
    "team.title": ["Good ideas start", "with <em>good people.</em>"],
    "team.lede": "Different skills, one way of working. Four people who design, code, film and grow brands together.",

    "contact.kicker": "Let's work together",
    "contact.title": ["Have a project", "<em>in mind?</em>"],
    "contact.lede": "Tell us what you're building, what you need, or what you'd like to explore. We'd love to hear from you.",

    "form.name": "Full name",
    "form.name.ph": "Your name",
    "form.name.err": "Please enter your name.",
    "form.email": "Email address",
    "form.email.ph": "name@example.com",
    "form.email.err": "Please enter a valid email address, like name@example.com.",
    "form.service": "What can we help with?",
    "form.multi": "Several",
    "form.service.err": "Please choose what you're interested in.",
    "form.message": "Project details",
    "form.message.ph": "Briefly describe your idea, your goals, or what you need.",
    "form.message.err": "Please tell us a little about your project (at least 20 characters).",
    "form.send": "Send message",
    "form.offline": "The contact form isn't connected to email yet, so your message could not be sent. Please try again later.",
    "form.ready": "Your email app should open with the message ready. Just press send.",

    "footer.line": "We create digital experiences, products and content that help brands move forward.",
    "footer.explore": "Explore",
    "footer.follow": "Follow (soon)",
    "footer.top": "Back to the surface ↑",

    "project.visit": "Visit website",
    "project.soon": "Project details will be added soon.",
    "project.web": "Website",
    "project.app": "Mobile app",
    "project.finance": "Personal finance app",
  },

  bs: {
    "nav.services": "Usluge",
    "nav.work": "Radovi",
    "nav.team": "Tim",
    "nav.contact": "Kontakt",
    "cta.talk": "Razgovarajmo",

    "hero.kicker": "Kreativni tehnološki studio",
    "hero.areas": "Web / Mobile / Video / Marketing",
    "hero.title": ["Web, mobile", "i video.", "<em>Jedan tim.</em>"],
    "hero.lede": "Dizajniramo, razvijamo i montiramo pod jednim krovom, pa vaša web stranica, aplikacija i promo video izgledaju kao da dolaze iz iste firme.",
    "hero.work": "Pogledajte radove",
    "hero.hint": "Skrolaj",

    statement: "Četiri osobe, četiri zanata, *jedan* *val.* Vaš brend vodimo od prve linije koda do zadnjeg kadra montaže.",

    "svc.kicker": "Šta radimo",
    "svc.title": ["Digitalna rješenja.", "Kreativna iskustva.", "<em>Mjerljiv učinak.</em>"],
    "svc.web": "Web razvoj",
    "svc.web.d": "Brze, moderne web stranice i aplikacije, napravljene da rade.",
    "svc.mobile": "Mobilni razvoj",
    "svc.mobile.d": "Intuitivne iOS i Android aplikacije koje ljudi rado koriste.",
    "svc.video": "Video montaža",
    "svc.video.d": "Montaža koja sirove snimke pretvara u priče vrijedne gledanja.",
    "svc.marketing": "Digitalni marketing",
    "svc.marketing.d": "Kampanje koje brendu pomažu da dođe do publike i zadrži je.",

    "web.kicker": "Web razvoj",
    "web.title": ["Web stranice", "koje ostavljaju", "<em>utisak.</em>"],
    "web.lede": "Moderne stranice i web aplikacije koje spajaju promišljen dizajn, brzinu i jednostavnost. Otvorite projekat da ga pogledate izbliza.",

    "mobile.kicker": "Mobilni razvoj",
    "mobile.title": ["Snažna", "iskustva.", "<em>Stvorena za mobitel.</em>"],
    "mobile.lede": "Razvijamo intuitivne mobilne aplikacije osmišljene oko ljudi koji ih koriste.",
    "mobile.chip": "Dizajn proizvoda",

    "video.kicker": "Video montaža i produkcija",
    "video.title": ["Priče koje", "<em>pokreću ljude.</em>"],
    "video.lede": "Od sadržaja za društvene mreže do filmskih reklama, ideje pretvaramo u slike koje se pamte.",
    "video.play": "Pusti showreel",

    "mkt.kicker": "Digitalni marketing",
    "mkt.title": ["Vaša sljedeća", "<em>velika ideja</em>", "počinje ovdje."],
    "mkt.lede": "Kreativno razmišljanje, jak sadržaj i jasna strategija, da se vaš brend na internetu pokaže onakvim kakav jeste.",
    "mkt.s1": "Strategija",
    "mkt.s1.d": "Definišemo smjer, publiku i poruku.",
    "mkt.s2": "Kreiranje",
    "mkt.s2.d": "Ideje pretvaramo u sadržaj zbog kojeg se vrijedi zaustaviti.",
    "mkt.s3": "Rast",
    "mkt.s3.d": "Gradimo dosljedno i prepoznatljivo prisustvo na mreži.",
    "mkt.areas": "Gdje pomažemo",
    "mkt.a1": "Društvene mreže",
    "mkt.a1.d": "Sadržaj i dosljedan izgled brenda na svim platformama.",
    "mkt.a2": "Kreiranje sadržaja",
    "mkt.a2.d": "Vizuali koji jasno prenose jednu ideju.",
    "mkt.a3": "Plaćeno oglašavanje",
    "mkt.a3.d": "Koncepti oglasa i podrška kampanjama.",
    "mkt.a4": "Digitalna strategija",
    "mkt.a4.d": "Jasniji smjer za to kako vaš brend komunicira i raste.",

    "team.kicker": "Ljudi iza FourthWave-a",
    "team.title": ["Dobre ideje počinju", "s <em>dobrim ljudima.</em>"],
    "team.lede": "Različite vještine, jedan način rada. Četiri osobe koje zajedno dizajniraju, programiraju, snimaju i grade brendove.",

    "contact.kicker": "Radimo zajedno",
    "contact.title": ["Imate projekat", "<em>na umu?</em>"],
    "contact.lede": "Recite nam šta gradite, šta vam treba ili šta biste željeli istražiti. Rado ćemo vas saslušati.",

    "form.name": "Ime i prezime",
    "form.name.ph": "Vaše ime",
    "form.name.err": "Molimo upišite svoje ime.",
    "form.email": "Email adresa",
    "form.email.ph": "ime@primjer.com",
    "form.email.err": "Molimo upišite ispravnu email adresu, npr. ime@primjer.com.",
    "form.service": "U čemu vam možemo pomoći?",
    "form.multi": "Više usluga",
    "form.service.err": "Molimo odaberite šta vas zanima.",
    "form.message": "Detalji projekta",
    "form.message.ph": "Ukratko opišite ideju, ciljeve ili šta vam treba.",
    "form.message.err": "Napišite nam nešto više o projektu (najmanje 20 znakova).",
    "form.send": "Pošalji poruku",
    "form.offline": "Kontakt forma još nije povezana s emailom, pa poruka nije poslana. Pokušajte ponovo kasnije.",
    "form.ready": "Vaša email aplikacija bi se trebala otvoriti s pripremljenom porukom. Samo pritisnite pošalji.",

    "footer.line": "Stvaramo digitalna iskustva, proizvode i sadržaj koji brendove pokreću naprijed.",
    "footer.explore": "Istraži",
    "footer.follow": "Pratite nas (uskoro)",
    "footer.top": "Nazad na površinu ↑",

    "project.visit": "Posjeti stranicu",
    "project.soon": "Detalji projekta bit će dodani uskoro.",
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

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ============================================================ 1. Texts */

  let lang = "en";
  const t = (key) => TEXT[lang][key] ?? TEXT.en[key] ?? "";

  const statementEl = $("#statement");
  let words = [];

  function renderLines(lines) {
    return lines.map((line, i) => `<span class="ln" style="--i:${i}"><span>${line}</span></span>`).join("");
  }

  function renderStatement(text) {
    statementEl.innerHTML = text
      .split(" ")
      .map((w) => (w.startsWith("*") ? `<em class="w">${w.replace(/\*/g, "")}</em>` : `<span class="w">${w}</span>`))
      .join(" ");
    words = $$(".w", statementEl).map((node) => ({ node, shown: -1 }));
  }

  function setLang(next) {
    lang = TEXT[next] ? next : "en";
    root.lang = lang === "bs" ? "bs" : "en";
    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (key === "statement") return;
      const value = t(key);
      el.innerHTML = Array.isArray(value) ? renderLines(value) : value;
    });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    renderStatement(t("statement"));
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
  const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
  const dialogOpen = () => Boolean($("dialog[open]"));

  if (!reduceMotion) {
    window.addEventListener("wheel", (e) => {
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
      const at = el.id === "marketing" ? 0.02 : 0.62;
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
  const heroMeta = $("#heroMeta");
  const hint = $("#hint");
  const scenes = $$("[data-scene]").map((el) => ({ el, name: el.dataset.scene, p: -1 }));
  const seaZones = $$("[data-sea]");
  const track = $("#track");
  const marketing = $(".marketing");
  const filmVideo = $(".film video");
  const navLinks = $$(".bar-nav a");
  const people = $$(".person[data-speed]");

  // Where each layer waits before the logo comes together:
  // x, y as a share of the logo width, z in px, rotations in degrees.
  const SCATTER = {
    wave:        { x: 0.26, y: -0.24, z: -700, rx: 0,  ry: -28, rz: 10,  o: 1 },
    band:        { x: 0.02, y: 0.6,   z: -1300, rx: 72, ry: 0,  rz: -3,  o: 0.9 },
    box:         { x: -0.36, y: -0.28, z: -480, rx: 0, ry: 38,  rz: -12, o: 1 },
    ripples:     { x: -0.42, y: 0.16,  z: 260,  rx: 0, ry: 0,   rz: 9,   o: 1 },
    fourth:      { x: -0.18, y: 0.36,  z: 300,  rx: 18, ry: 0,  rz: -8,  o: 1 },
    "word-wave": { x: 0.36, y: 0.3,   z: 380,  rx: -14, ry: 0, rz: 10,  o: 1 },
    dot:         { x: 0.52, y: -0.42, z: 600,  rx: 0, ry: 0,    rz: 0,   o: 1 },
  };
  const ORDER = ["wave", "band", "box", "ripples", "fourth", "word-wave", "dot"];
  const INK = ["wave", "ripples", "dot"];
  const layers = ORDER.map((name, i) => ({ name, i, el: $(`[data-layer="${name}"]`), s: SCATTER[name], ink: INK.includes(name) }));

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

    // The marketing track: the section is as tall as the sideways travel.
    const shift = Math.max(0, track.scrollWidth - vw);
    marketing.style.setProperty("--shift", shift.toFixed(0));
    if (!reduceMotion) marketing.style.height = `${shift * 1.1 + vh}px`;
    sizeSea();
  }

  /* ---- Hero */

  let mx = 0;
  let my = 0;
  let pmx = 0;
  let pmy = 0;

  function renderHero(p, time) {
    const W = heroBox.start.w;
    pmx += (mx - pmx) * 0.06;
    pmy += (my - pmy) * 0.06;

    for (const layer of layers) {
      const begin = layer.i * 0.045;
      const k = easeInOut(step(p, begin, begin + 0.25));
      const left = 1 - k;
      const s = layer.s;
      const floatY = Math.sin(time * 0.0007 + layer.i * 1.7) * 14 * left;
      const floatX = Math.cos(time * 0.0005 + layer.i) * 8 * left;
      const depth = (s.z + 1600) / 2400;
      const spread = narrow ? 0.62 : 1;
      const x = s.x * spread * W * left + floatX + pmx * 40 * depth * left;
      const y = s.y * spread * W * left + floatY + pmy * 30 * depth * left;
      // Ink drawings are light while they drift in the dark, true colour once in place.
      if (layer.ink) layer.el.style.filter = left > 0.002 ? `invert(${(left * 0.92).toFixed(3)})` : "";
      const z = s.z * left;
      layer.el.style.transform =
        `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(1)}px) ` +
        `rotateX(${(s.rx * left).toFixed(2)}deg) rotateY(${(s.ry * left).toFixed(2)}deg) rotateZ(${(s.rz * left).toFixed(2)}deg)`;
      layer.el.style.opacity = lerp(s.o * (layer.name === "band" ? 0.85 : 0.92), 1, k).toFixed(3);
    }

    // The assembled logo leans toward the pointer.
    const done = step(p, 0.4, 0.55);
    heroLogoInner.style.transform =
      `rotateY(${(pmx * 7 * done).toFixed(2)}deg) rotateX(${(-pmy * 5 * done).toFixed(2)}deg)`;

    // Then it moves aside to make room for the headline.
    const m = easeInOut(step(p, 0.5, 0.8));
    const { start, end } = heroBox;
    const w = lerp(start.w, end.w, m);
    const cx = lerp(start.cx, end.cx, m);
    const cy = lerp(start.cy, end.cy, m);
    heroLogo.style.transform = `translate3d(${(cx - w / 2).toFixed(1)}px, ${(cy - (w * RATIO) / 2).toFixed(1)}px, 0) scale(${(w / start.w).toFixed(4)})`;

    heroCopy.style.setProperty("--c", step(p, 0.6, 0.95).toFixed(3));
    heroCopy.style.visibility = p < 0.58 ? "hidden" : "visible";
    hint.style.opacity = (1 - step(p, 0, 0.08)).toFixed(3);
    heroMeta.style.opacity = (1 - step(p, 0.55, 0.7)).toFixed(3);
  }

  /* ---- Scenes */

  function sceneProgress(el) {
    const r = el.getBoundingClientRect();
    const travel = r.height - vh;
    return travel > 0 ? clamp(-r.top / travel) : r.top < 0 ? 1 : 0;
  }

  let videoPlaying = false;

  function renderScenes(time) {
    for (const s of scenes) {
      const p = reduceMotion ? 1 : sceneProgress(s.el);
      if (s.name === "hero") { renderHero(p, time); continue; }
      if (Math.abs(p - s.p) < 0.0005) continue;
      s.p = p;
      s.el.style.setProperty("--p", p.toFixed(4));

      if (s.name === "web") {
        s.el.style.setProperty("--e", easeOut(step(p, 0, 0.55)).toFixed(4));
        s.el.style.setProperty("--e2", easeOut(step(p, 0.12, 0.7)).toFixed(4));
      } else if (s.name === "video") {
        s.el.style.setProperty("--e", easeInOut(step(p, 0.05, 0.6)).toFixed(4));
        const r = s.el.getBoundingClientRect();
        const onScreen = r.top < vh && r.bottom > 0;
        if (onScreen !== videoPlaying) {
          videoPlaying = onScreen;
          if (onScreen) filmVideo.play().catch(() => {});
          else filmVideo.pause();
        }
      } else if (s.name === "statement") {
        const lit = step(p, 0.08, 0.8) * (words.length + 1);
        words.forEach((w, i) => {
          const v = Math.round((0.14 + 0.86 * clamp(lit - i)) * 100) / 100;
          if (v !== w.shown) { w.shown = v; w.node.style.opacity = v; }
        });
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
    for (const id of ["services", "web", "mobile", "video", "marketing", "team", "contact"]) {
      const r = document.getElementById(id).getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) section = id;
    }
    const nav = ["web", "mobile", "video", "marketing"].includes(section) ? "web" : section;
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
    const lines = narrow ? 26 : 36;
    const horizon = H * 0.5;
    const stepX = narrow ? 8 : 6;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1;

    for (let i = 0; i < lines; i++) {
      const z = i / (lines - 1);
      const base = horizon + (H - horizon + 80) * Math.pow(z, 1.75);
      const amp = (3 + 52 * z * z) * swell;
      const f = 0.0032 * (1.6 - z);
      const crest = i === Math.round(lines * 0.62);

      ctx.beginPath();
      for (let x = -stepX; x <= W + stepX; x += stepX) {
        let n =
          Math.sin(x * f + T * 0.5 + i * 0.42 + phase) * 0.55 +
          Math.sin(x * f * 2.7 - T * 0.85 + i * 0.9 - phase * 0.6) * 0.28 +
          Math.sin(x * 0.0011 + T * 0.22 + i * 0.13) * 0.6;
        if (pEnergy > 0.01) {
          const d = x - px;
          n += Math.exp(-(d * d) / 26000) * Math.sin(T * 3 - Math.abs(d) * 0.028) * 1.1 * pEnergy * z;
        }
        const yy = base + n * amp;
        if (x === -stepX) ctx.moveTo(x, yy);
        else ctx.lineTo(x, yy);
      }
      if (crest) {
        ctx.strokeStyle = `rgba(255, 181, 0, ${0.55 * z})`;
        ctx.lineWidth = 1.3;
      } else {
        ctx.strokeStyle = `rgba(0, 150, 255, ${(0.04 + 0.42 * Math.pow(z, 1.4)).toFixed(3)})`;
        ctx.lineWidth = 1;
      }
      ctx.stroke();
    }
  }

  /* ---- The loop */

  function frame(time) {
    if (gliding) {
      scrollCur += (scrollTgt - scrollCur) * 0.1;
      if (Math.abs(scrollTgt - scrollCur) < 0.5) { scrollCur = scrollTgt; gliding = false; }
      window.scrollTo(0, scrollCur);
    }
    renderScenes(time);
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
    if (reduceMotion) frame(0);
  });

  measure();
  if (location.hash) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) window.scrollTo(0, anchorTop(target));
  }
  requestAnimationFrame(frame);
  // Fonts change text widths; the marketing track needs measuring again.
  document.fonts?.ready.then(() => measure());

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
    $("#videoPlayer").play().catch(() => {});
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
    const subject = `New project: ${data.get("service")} — ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    notice.textContent = t("form.ready");
  });
})();
