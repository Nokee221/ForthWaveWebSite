/*
 * The FourthWave scroll story.
 *
 * Scrolling moves through eight chapters. Each step from one chapter to the
 * next adds one layer to the logo while the content beside it changes:
 *
 *   01 #intro      the big wave alone       Creative Technology Company
 *   02 #services   + ripples: wave complete What We Do
 *   03 #web        + yellow band            Web Development
 *   04 #mobile     + blue block             Mobile Development
 *   05 #video      + "fourth"               Video Editing
 *   06 #marketing  + "wave"                 Digital Marketing
 *   07 #team       + full stop              Team
 *   08 #contact    logo moves to center     Contact
 *
 * The value shown on screen eases toward the scroll position every frame, so
 * the mouse wheel glides instead of jumping. Scrolling back takes the logo
 * apart again. Only transform, opacity and clip-path change.
 */

/*
 * Where contact form messages go. Leave empty until the address is decided;
 * the form then says that email is not set up yet instead of pretending.
 */
const CONTACT_EMAIL = "";

/*
 * Project details for the dialogs. Only what is known is filled in; empty
 * fields are not shown, and an empty description shows the placeholder.
 */
const PROJECTS = {
  perfectcv: {
    kind: "web",
    title: "PerfectCV",
    category: "Website",
    image: "assets/content/web-perfectcv.jpg",
    alt: "Home page of the PerfectCV website.",
    description: "",
    url: "",
  },
  shift: {
    kind: "web",
    title: "SHIFT",
    category: "Website",
    image: "assets/content/web-shift.jpg",
    alt: "Home page of the SHIFT website.",
    description: "",
    url: "",
  },
  finance: {
    kind: "mobile",
    // The app's real name is not known yet.
    title: "Personal finance app",
    category: "Mobile app",
    image: "assets/content/mobile-finance.jpg",
    alt: "Home screen of a personal finance app.",
    description: "",
    url: "",
  },
  "shift-app": {
    kind: "mobile",
    title: "SHIFT",
    category: "Mobile app",
    image: "assets/content/mobile-shift.jpg",
    alt: "Check-in screen of the SHIFT app.",
    description: "",
    url: "",
  },
};
const PROJECT_PLACEHOLDER = "Project details will be added soon.";

(() => {
  const root = document.documentElement;
  const scroller = document.getElementById("scroller");
  const logoWrap = document.getElementById("logoWrap");
  const progressBar = document.getElementById("progress");
  const cue = document.getElementById("cue");
  const counter = document.getElementById("counter");
  const skip = document.getElementById("skip");
  const panelsBox = document.querySelector(".panels");
  const panels = [...document.querySelectorAll("[data-chapter]")];
  const ids = panels.map((panel) => panel.dataset.chapter);
  const navLinks = [...document.querySelectorAll("#chapters a")];
  const filmVideo = document.querySelector(".film video");
  const CHAPTERS = panels.length;
  const layer = (name) => document.querySelector(`[data-layer="${name}"]`);
  const el = {
    band: layer("band"),
    box: layer("box"),
    ripples: layer("ripples"),
    wave: layer("wave"),
    fourth: layer("fourth"),
    wordWave: layer("word-wave"),
    dot: layer("dot"),
  };

  // Inside each chapter, the parts that come in one after another.
  const ITEM_SELECTOR =
    ":scope > .eyebrow, :scope > .title, :scope > .body, :scope > .btn, " +
    ".services > li, .browsers > *, .phones > *, :scope > .film, .steps > li, .team > li";
  const items = panels.map((panel) => [...panel.querySelectorAll(ITEM_SELECTOR)]);

  const clamp = (x) => Math.min(1, Math.max(0, x));
  const step = (c, a, b) => clamp((c - a) / (b - a));
  const lerp = (from, to, x) => from + (to - from) * x;
  const easeOut = (x) => 1 - Math.pow(1 - x, 4);
  const easeInOut = (x) => (x < 0.5 ? 8 * x ** 4 : 1 - Math.pow(-2 * x + 2, 4) / 2);
  const easeBack = (x) => 1 + 2.4 * Math.pow(x - 1, 3) + 1.4 * Math.pow(x - 1, 2);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  /* ------------------------------------------------------------ Layout */

  // Where the logo sits: beside the text, then centered for the finale.
  let layout;
  function measure() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const narrow = vw <= 860;
    const ratio = 2437 / 7010;
    const side = narrow
      ? { w: vw - 32, cx: vw / 2, cy: 64 + ((vw - 32) * ratio) / 2 + 12 }
      : { w: Math.min(vw * 0.43, 860), cx: vw * 0.745, cy: vh * 0.5 };
    const center = narrow
      ? { w: vw - 32, cx: vw / 2, cy: vh * 0.19 }
      : { w: Math.min(vw * 0.64, 1180), cx: vw / 2, cy: vh * 0.34 };
    layout = { side, center, ratio };
    logoWrap.style.width = `${side.w}px`;
    // The final panel starts just below the centered logo.
    const below = center.cy + (center.w * ratio) / 2 + (narrow ? 28 : 44);
    const panelsTop = panelsBox.getBoundingClientRect().top;
    panels[CHAPTERS - 1].style.paddingTop = `${Math.max(0, below - panelsTop)}px`;
  }

  // Scroll position at which a chapter is fully in place.
  function chapterTop(i) {
    const distance = scroller.offsetHeight - window.innerHeight;
    return scroller.offsetTop + (distance * i) / (CHAPTERS - 1);
  }

  /* ------------------------------------------------------------ Render */

  // The step from chapter k-1 to chapter k, as 0..1.
  const arrive = (c, k) => step(c, k - 0.5, k - 0.12);
  // The first chapter fades in once on load (0..1); the rest follow the scroll.
  let introIn = 1;
  let lastChapter = -1;

  function render(c) {
    // ---- Logo layers
    // The wave settles into place while its ripples arrive (chapter 02).
    const w = easeInOut(step(c, 0.45, 0.95));
    el.wave.style.transform = `translate(${lerp(-3.2, 0, w)}%, ${lerp(4, 0, w)}%) scale(${lerp(1.3, 1, w)})`;
    el.wave.style.opacity = introIn;

    const rip = easeOut(arrive(c, 1));
    el.ripples.style.transform = `translateX(${lerp(-18, 0, rip)}%)`;
    el.ripples.style.opacity = rip;

    const band = easeOut(arrive(c, 2));
    el.band.style.transform = `scaleX(${band}) scaleY(${lerp(0.55, 1, band)})`;
    el.band.style.opacity = step(band, 0, 0.08);

    const box = easeOut(arrive(c, 3));
    el.box.style.clipPath = `inset(0 ${(1 - box) * 100}% 0 0)`;

    for (const [node, k] of [[el.fourth, 4], [el.wordWave, 5]]) {
      const t = easeOut(arrive(c, k));
      node.style.transform = `translateY(${lerp(55, 0, t)}%)`;
      node.style.clipPath = `inset(0 0 ${lerp(100, 0, t)}% 0)`;
      node.style.opacity = step(t, 0, 0.1);
    }

    const dot = arrive(c, 6);
    el.dot.style.transform = `scale(${dot === 0 ? 0 : easeBack(dot)})`;
    logoWrap.classList.toggle("complete", c > 6.2);
    logoWrap.classList.toggle("at-contact", c > 6.7);

    // ---- Logo position: beside the text, then to the center for the finale
    const m = easeInOut(arrive(c, 7));
    const { side, center, ratio } = layout;
    const width = lerp(side.w, center.w, m);
    const cx = lerp(side.cx, center.cx, m);
    const cy = lerp(side.cy, center.cy, m);
    const x = cx - width / 2;
    const y = cy - (width * ratio) / 2;
    logoWrap.style.transform = `translate(${x}px, ${y}px) scale(${width / side.w})`;

    // ---- Chapters: the parts come in one after another, then leave together
    panels.forEach((panel, i) => {
      const local = c - i; // 0 when the chapter starts, 1 when the next one does
      const fadeIn = i === 0 ? introIn : step(local, -0.45, -0.05);
      const fadeOut = i === CHAPTERS - 1 ? 1 : 1 - easeOut(step(local, 0.38, 0.62));
      const visible = Math.min(fadeIn, fadeOut);

      panel.style.opacity = fadeOut;
      panel.style.transform = `translateY(${-(1 - fadeOut) * 40}px)`;
      panel.style.visibility = visible < 0.01 ? "hidden" : "visible";
      panel.inert = visible < 0.5;

      const parts = items[i];
      const spread = 0.42;
      parts.forEach((part, j) => {
        const start = parts.length > 1 ? (j / (parts.length - 1)) * spread : 0;
        const t = easeOut(step(fadeIn, start, start + 1 - spread));
        part.style.opacity = t;
        part.style.transform = `translateY(${(1 - t) * 34}px)`;
      });
    });

    // ---- Chrome
    progressBar.style.transform = `scaleX(${clamp(c / (CHAPTERS - 1))})`;
    cue.style.opacity = 1 - step(c, 0, 0.25);
    const current = Math.round(c);
    if (current !== lastChapter) {
      lastChapter = current;
      counter.textContent = String(current + 1).padStart(2, "0");
      navLinks.forEach((link, i) => {
        link.classList.toggle("active", i === current);
        if (i === current) link.setAttribute("aria-current", "step");
        else link.removeAttribute("aria-current");
      });
      skip.classList.toggle("hidden", current === CHAPTERS - 1);
      // The address follows the chapter, so a link can open any of them.
      const hash = current === 0 ? "" : `#${ids[current]}`;
      if (location.hash !== hash) {
        history.replaceState(null, "", hash || location.pathname + location.search);
      }
      // The clip only plays while its chapter is on screen.
      if (ids[current] === "video") filmVideo.play().catch(() => {});
      else filmVideo.pause();
    }
  }

  /* ------------------------------------------------------- Scroll loop */

  let target = 0;
  let shown = 0;
  let frame = 0;

  function readScroll() {
    const distance = scroller.offsetHeight - window.innerHeight;
    const p = distance > 0 ? clamp((window.scrollY - scroller.offsetTop) / distance) : 1;
    target = p * (CHAPTERS - 1);
  }

  function tick() {
    shown += (target - shown) * 0.13;
    if (Math.abs(target - shown) < 0.002) shown = target;
    render(shown);
    frame = shown === target ? 0 : requestAnimationFrame(tick);
  }

  function onScroll() {
    readScroll();
    if (!frame) frame = requestAnimationFrame(tick);
  }

  function onResize() {
    measure();
    render(shown);
    onScroll();
  }

  // Links to chapters (#web, #team, …) scroll to them instead of jumping.
  function goTo(id, smooth = true) {
    const i = ids.indexOf(id);
    if (i < 0) return false;
    if (reduceMotion.matches) {
      panels[i].scrollIntoView();
      return true;
    }
    window.scrollTo({ top: chapterTop(i), behavior: smooth ? "smooth" : "instant" });
    return true;
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    if (goTo(link.getAttribute("href").slice(1))) event.preventDefault();
  });

  // On first load the opening chapter fades in, part by part.
  function playIntro() {
    const begin = performance.now();
    const run = (now) => {
      introIn = clamp((now - begin) / 1400);
      render(shown);
      if (introIn < 1) requestAnimationFrame(run);
    };
    introIn = 0;
    render(shown);
    requestAnimationFrame(run);
  }

  function start() {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    cancelAnimationFrame(frame);
    frame = 0;

    if (reduceMotion.matches) {
      // An ordinary page: finished logo, every chapter visible (see styles.css).
      panels.forEach((panel) => {
        panel.inert = false;
        panel.style.visibility = "visible";
      });
      Object.values(el).forEach((node) => {
        node.style.transform = "none";
        node.style.clipPath = "none";
        node.style.opacity = 1;
      });
      return;
    }

    measure();
    const hashId = location.hash.slice(1);
    if (ids.includes(hashId)) goTo(hashId, false);
    readScroll();
    shown = target;
    render(shown);
    if (shown < 0.3) playIntro();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
  }

  reduceMotion.addEventListener("change", start);
  start();

  /* ------------------------------------------- Footer and fixed chrome */

  document.getElementById("year").textContent = new Date().getFullYear();

  new IntersectionObserver(([entry]) => {
    document.body.classList.toggle("at-footer", entry.isIntersecting);
  }, { threshold: 0.15 }).observe(document.getElementById("footer"));

  /* ----------------------------------------------- Pointer: depth, ring */

  if (finePointer.matches && !reduceMotion.matches) {
    const ring = document.getElementById("cursor");
    let px = -100;
    let py = -100;
    let rx = px;
    let ry = py;
    let ringFrame = 0;

    const follow = () => {
      rx += (px - rx) * 0.22;
      ry += (py - ry) * 0.22;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      // Depth: the logo and the pictures lean away from each other.
      root.style.setProperty("--mx", ((px / window.innerWidth) * 2 - 1).toFixed(3));
      root.style.setProperty("--my", ((py / window.innerHeight) * 2 - 1).toFixed(3));
      ringFrame = Math.abs(px - rx) + Math.abs(py - ry) > 0.5 ? requestAnimationFrame(follow) : 0;
    };

    window.addEventListener("pointermove", (event) => {
      px = event.clientX;
      py = event.clientY;
      ring.classList.add("on");
      if (!ringFrame) ringFrame = requestAnimationFrame(follow);
    }, { passive: true });
    root.addEventListener("pointerleave", () => ring.classList.remove("on"));
    document.addEventListener("pointerover", (event) => {
      ring.classList.toggle("hover", Boolean(event.target.closest("a, button, select, input, textarea, label")));
    });
  }

  /* ----------------------------------------------------------- Dialogs */

  function openDialog(dialog) {
    root.style.overflow = "hidden";
    dialog.showModal();
  }

  function afterClose(dialog) {
    root.style.overflow = "";
    dialog.querySelector("video")?.pause();
  }

  document.querySelectorAll("dialog").forEach((dialog) => {
    // Escape closes the dialog natively; tidy up when it does.
    dialog.addEventListener("close", () => afterClose(dialog));
    // A click on the dialog itself (not its content) is a click on the backdrop.
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog || event.target.closest("[data-close]")) {
        dialog.close();
        afterClose(dialog);
      }
    });
  });

  // Projects
  const projectDialog = document.getElementById("projectDialog");
  document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = PROJECTS[button.dataset.project];
      if (!project) return;
      const media = document.getElementById("projectMedia");
      media.className = `project-media ${project.kind}`;
      media.replaceChildren(Object.assign(new Image(), { src: project.image, alt: project.alt }));
      document.getElementById("projectCategory").textContent = project.category;
      document.getElementById("projectTitle").textContent = project.title;
      document.getElementById("projectDescription").textContent =
        project.description || PROJECT_PLACEHOLDER;
      const link = document.getElementById("projectLink");
      link.hidden = !project.url;
      if (project.url) link.href = project.url;
      openDialog(projectDialog);
    });
  });

  // Showreel
  const videoDialog = document.getElementById("videoDialog");
  document.querySelector("[data-video]").addEventListener("click", () => {
    openDialog(videoDialog);
    document.getElementById("videoPlayer").play().catch(() => {});
  });

  // Contact
  const contactDialog = document.getElementById("contactDialog");
  const form = document.getElementById("contactForm");
  const notice = document.getElementById("contactNotice");
  document.querySelectorAll("[data-contact]").forEach((button) => {
    button.addEventListener("click", () => {
      notice.hidden = true;
      openDialog(contactDialog);
    });
  });

  const fields = [...form.querySelectorAll(".field")];
  const control = (field) => field.querySelector("input, select, textarea");

  function checkField(field) {
    const input = control(field);
    const value = input.value.trim();
    const minLength = input.minLength > 0 ? input.minLength : 1;
    const ok = input.checkValidity() && value.length >= minLength;
    field.classList.toggle("invalid", !ok);
    field.querySelector(".error").hidden = ok;
    return ok;
  }

  fields.forEach((field) => {
    control(field).addEventListener("blur", () => checkField(field));
    control(field).addEventListener("input", () => {
      if (field.classList.contains("invalid")) checkField(field);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const results = fields.map(checkField);
    const firstBad = results.indexOf(false);
    if (firstBad >= 0) {
      control(fields[firstBad]).focus();
      return;
    }
    const data = new FormData(form);
    notice.hidden = false;
    if (!CONTACT_EMAIL) {
      notice.textContent =
        "The contact form isn't connected to email yet, so your message could not be sent. Please try again later.";
      return;
    }
    // Opens the visitor's email app with the message ready to send.
    const subject = `New project: ${data.get("service")} — ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    notice.textContent = "Your email app should open with the message ready. Just press send.";
  });
})();
