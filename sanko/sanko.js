/*
 * Šanko page: texts (EN / BS, shared language choice with the home page),
 * reveals, the loss sum and the role tabs.
 */

const TEXT = {
  en: {
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "page.back": "FourthWave home",
    "page.zoom": "Enlarge",
    "page.close": "Close",
    "footer.line": "A small studio for web, mobile, video and marketing.",
    "footer.explore": "Pages",
    "footer.follow": "Follow (soon)",
    "footer.top": "Back to top",

    "book.run": "The bar book",
    "book.kicker": "Everything about Šanko",
    "book.title": "Know what's missing, in whose shift, <em>the moment it happens.</em>",
    "book.lede": "Šanko replaces the notebook and the Excel sheet behind the bar. In a few minutes the waiter enters on the phone what arrived, what was spent from the till and what's left, then hands over the money. The app works out the settlement, the shortage or the surplus, and you see it all on your computer and get a message on your phone, even when you're not in the café.",
    "book.demo": "Ask for a demo",
    "book.faq.go": "Questions",
    "book.f1": "to train a waiter",
    "book.f2": "sheet brings in your whole bar book",
    "book.f3": "devices: Android, Windows, browser",
    "book.f4": "internet needed to work through a shift",

    "book.p.kicker": "How it's done today",
    "book.p.title": "The notebook doesn't say who.",
    "book.p1": "A shortage turns up late, or never.",
    "book.p2": "Shift hands over to shift with nothing written down.",
    "book.p3": "The owner has to be in the café to know anything.",
    "book.p4": "Adding up by hand takes time and goes wrong.",
    "book.p5": "Supplier orders are made from memory.",

    "book.c.kicker": "The sum",
    "book.c.a": "If every day",
    "book.c.b": "drinks go missing at",
    "book.c.month": "a month",
    "book.c.year": "a year",
    "book.c.note": "An example; the real loss depends on the café. Šanko shows where and when it happens, so it can be stopped.",

    "book.s.kicker": "How a shift works",
    "book.s.title": "One shift, line by line.",
    "book.s.lede": "Every shift has its waiter. What's left at the end of one shift is where the next one starts, on its own.",
    "book.s.col1": "Entry",
    "book.s.col2": "What gets written",
    "book.s.col3": "What Šanko does",
    "book.s1": "Goods that came in: tap the item, type the number.",
    "book.s1.r": "Adds it to the stock.",
    "book.s2": "Cash spent from the till, with a note: milk from the shop.",
    "book.s2.r": "Takes it off what's to hand over.",
    "book.s3": "The count at the end of the shift, item by item, with photos. Coffee is weighed in grams.",
    "book.s3.r": "Works out what was sold, and warns when more was counted than could be there.",
    "book.s4": "The kitchen total, and the cash and cards handed over.",
    "book.s4.r": "Shows short, over or exact before the shift closes.",
    "book.s5.t": "Closed",
    "book.s5": "The shift locks and can't be changed without a record.",
    "book.s5.r": "Messages the owner and carries the stock over to the next shift.",
    "book.stamp": "Closed",

    "book.r.kicker": "Who uses it",
    "book.r.title": "Three sides of the bar.",
    "book.r1": "Waiter",
    "book.r1.on": "Android phone",
    "book.r2": "Bar",
    "book.r2.on": "Phone behind the bar",
    "book.r3": "Owner",
    "book.r3.on": "Computer, phone, browser",
    "book.w1": "<b>A PIN of their own.</b> Every waiter logs in with four digits, so you always know who ran the shift.",
    "book.w2": "<b>Four screens.</b> ULAZ, RASHOD, STANJE and PREDAJA, done in a few minutes.",
    "book.w3": "<b>Orders at the table.</b> The waiter taps the order on the phone and it goes straight to the bar.",
    "book.w4": "<b>Mistakes caught early.</b> A count that can't be right is flagged before the shift closes.",
    "book.w5": "<b>No signal, no problem.</b> Everything stays on the phone and is sent as soon as the connection is back.",
    "book.t.table4": "Table 4",
    "book.t.table2": "Table 2",
    "book.t.table7": "Table 7",
    "book.b1": "<b>Orders arrive on their own.</b> The oldest is on top, and nobody shouts across the room.",
    "book.b2": "<b>Nothing waits too long.</b> An order waiting more than five minutes turns red.",
    "book.b3": "<b>One swipe.</b> Swipe an order to the right and it's marked as done.",
    "book.o1": "<b>The whole settlement.</b> Bar, kitchen, expenses, handed over and the difference, per day or per shift.",
    "book.o2": "<b>The same panel everywhere.</b> On a Windows computer, in a browser or on the owner's own phone.",
    "book.o3": "<b>Corrections on record.</b> Fix a count or a handover; who, when, old, new and why stays written down.",
    "book.o4": "<b>Close a shift for them.</b> If a waiter leaves without closing, the owner closes it so the next shift can start.",
    "book.o5": "<b>More than one café.</b> One owner account, and each café with its own waiters, items and books.",

    "book.m.kicker": "When the shift closes",
    "book.m.title": "The numbers come to you.",
    "book.m.lede": "The moment a shift is closed, the owner gets a Telegram message: bar, kitchen, expenses, handed over, any shortage, and the items counted higher than they could be.",
    "book.m.link": "Connecting takes one click in the admin panel. Several phones or a group chat can get it, say the owner and the manager.",
    "book.m.l1": "Korzo: shift 2 closed",
    "book.m.l2": "Bar",
    "book.m.l3": "Kitchen",
    "book.m.l4": "Expenses",
    "book.m.l5": "To hand over",
    "book.m.l6": "Handed over",
    "book.m.l7": "⚠️ Short",
    "book.m.l8": "⚠️ Counted higher than possible: KOLA, was 40, entered 42",
    "book.m.note": "An example message with demo data.",

    "book.a.kicker": "The admin panel",
    "book.a.title": "Everything the owner needs, on one shelf.",
    "book.a1": "Settlement",
    "book.a1.d": "The bar book as a table: before, received, used, left, price and amount. Shortages in red, export to PDF, and warnings on unusual use and low stock.",
    "book.a2": "Monthly report",
    "book.a2.d": "Turnover and the change on last month, the strongest days of the week, the best-selling items, and each waiter's shifts, shortages and suspicious counts. Export to Excel.",
    "book.a3": "Averages",
    "book.a3.d": "Use per day and per shift over 7, 30 or 90 days, how many days the stock will last, and the counts that don't fit.",
    "book.a4": "Items",
    "book.a4.d": "Your Excel bar book comes in within a minute, with prices and stock. Photos from the catalogue help waiters find an item faster.",
    "book.a5": "Supplier order",
    "book.a5.d": "Set a minimum and an order-up-to level for each item. When stock falls to the minimum, the item joins the list with a suggested amount, ready to send on Viber or as a PDF.",
    "book.a6": "Staff and tables",
    "book.a6.tag": "tables",
    "book.a6.d": "Add waiters and bar staff with their PINs, and enter your tables. A removed waiter is logged out of every phone at once.",

    "book.y.kicker": "Why Šanko",
    "book.y.title": "Eight reasons, no small print.",
    "book.y1": "<b>Loss control.</b> Missing goods and money show up per shift and per waiter, not at the end of the month.",
    "book.y2": "<b>Responsibility.</b> Every shift has a name, locks when it's closed, and changes only with a record.",
    "book.y3": "<b>Insight from anywhere.</b> A Telegram message, and the whole admin panel on your phone.",
    "book.y4": "<b>Time saved.</b> No adding up in a notebook. The settlement, the report and the order are ready on their own.",
    "book.y5": "<b>Better buying.</b> The order list and the averages tell you what to order and how much.",
    "book.y6": "<b>Works offline</b> behind the bar; the data is sent as soon as the connection is back.",
    "book.y7": "<b>Safe data.</b> PINs are stored encrypted on the server, every café sees only its own data, and every correction is recorded.",
    "book.y8": "<b>Easy start.</b> Your Excel sheet comes in as it is, and a waiter learns the app in 15 minutes.",

    "book.g.kicker": "Getting started",
    "book.g.title": "From notebook to Šanko in five steps.",
    "book.g1": "<b>Send us your bar book</b> in Excel, or a list of items with prices.",
    "book.g2": "<b>We set up the café:</b> items, photos, waiters and PINs.",
    "book.g3": "<b>Waiters install the app</b> and enter the café code once.",
    "book.g4": "<b>A short training,</b> about 15 minutes, and a trial period.",
    "book.g5": "<b>Connect Telegram</b> for the messages, if you want them.",

    "book.q.kicker": "Questions",
    "book.q.title": "What owners ask us.",
    "book.q1": "What if the internet goes down?",
    "book.q1.a": "The waiter keeps working as usual. Everything is kept on the phone and sent when the connection is back. Starting a new shift needs the internet, so two shifts are never open at once.",
    "book.q2": "What if a waiter miscounts?",
    "book.q2.a": "The app warns about obvious mistakes before the shift closes. The owner can correct a count or a handover later, and the correction stays on record.",
    "book.q3": "What if a waiter leaves without closing the shift?",
    "book.q3.a": "The owner closes it from the admin panel and enters the stock and the handover.",
    "book.q4": "Which devices does it run on?",
    "book.q4.a": "Waiters use an Android phone. The owner uses the same app on their own phone, or a Windows computer or a browser, and sees the same data on every one.",
    "book.q5": "I have more than one café.",
    "book.q5.a": "One owner account can hold several cafés, each with its own waiters, items and settlement.",
    "book.q6": "Can I keep my Excel sheet?",
    "book.q6.a": "You can bring it into Šanko, and export the reports back to Excel at any time.",
    "book.q7": "How is coffee counted?",
    "book.q7.a": "Coffee and instant coffee are kept in grams. You set the weight of one portion, and Šanko works out how many portions were sold.",
    "book.q8": "How much does it cost?",
    "book.q8.a": "Šanko is a monthly subscription per café. Write to us and we'll send you an offer and set up a demo.",

    "book.e.kicker": "Subscription",
    "book.e.title": "A monthly subscription per café. The first step is a demo.",
    "book.e.sign": "Owner's signature",
  },
  bs: {
    "nav.services": "Usluge",
    "nav.work": "Radovi",
    "nav.team": "Tim",
    "nav.contact": "Kontakt",
    "page.back": "Početna FourthWave",
    "page.zoom": "Uvećaj",
    "page.close": "Zatvori",
    "footer.line": "Mali studio za web, mobilne aplikacije, video i marketing.",
    "footer.explore": "Stranice",
    "footer.follow": "Pratite nas (uskoro)",
    "footer.top": "Na vrh",

    "book.run": "Knjiga šanka",
    "book.kicker": "Sve o Šanku",
    "book.title": "Znajte koliko nedostaje, u čijoj smjeni, <em>istog trenutka.</em>",
    "book.lede": "Šanko zamjenjuje svesku i Excel tabelu na šanku. Konobar na telefonu za par minuta upiše šta je stiglo, šta je potrošeno iz kase i koliko je čega ostalo, pa preda novac. Aplikacija sama izračuna obračun, manjak ili višak, a vi sve vidite na računaru i dobijete poruku na telefon, i kad niste u lokalu.",
    "book.demo": "Zatražite demo",
    "book.faq.go": "Česta pitanja",
    "book.f1": "da konobar nauči aplikaciju",
    "book.f2": "tabela i cijela knjiga šanka je unutra",
    "book.f3": "uređaja: Android, Windows, pregledač",
    "book.f4": "interneta treba za rad u smjeni",

    "book.p.kicker": "Kako je danas",
    "book.p.title": "Sveska ne kaže ko.",
    "book.p1": "Manjak se otkrije kasno, ili nikako.",
    "book.p2": "Smjena preda smjeni bez ikakvog zapisa.",
    "book.p3": "Gazda mora biti u lokalu da bi išta znao.",
    "book.p4": "Sabiranje na ruke traje i lako se pogriješi.",
    "book.p5": "Narudžba se pravi napamet.",

    "book.c.kicker": "Računica",
    "book.c.a": "Ako dnevno nestane",
    "book.c.b": "pića po",
    "book.c.month": "mjesečno",
    "book.c.year": "godišnje",
    "book.c.note": "Primjer; stvarni gubitak zavisi od lokala. Šanko pokazuje gdje i kada nestaje, pa se gubitak može zaustaviti.",

    "book.s.kicker": "Kako ide smjena",
    "book.s.title": "Jedna smjena, red po red.",
    "book.s.lede": "Svaka smjena ima svog konobara. Stanje na kraju jedne smjene samo postaje početno stanje sljedeće.",
    "book.s.col1": "Unos",
    "book.s.col2": "Šta se upiše",
    "book.s.col3": "Šta Šanko uradi",
    "book.s1": "Roba koja je stigla: dodir na artikal i broj.",
    "book.s1.r": "Doda je na zalihu.",
    "book.s2": "Novac potrošen iz kase, sa opisom: mlijeko iz prodavnice.",
    "book.s2.r": "Oduzme ga od iznosa za predaju.",
    "book.s3": "Brojanje na kraju smjene, artikal po artikal, sa slikama. Kafa se vodi u gramima.",
    "book.s3.r": "Izračuna šta je prodano i upozori kad je prebrojano više nego što je moglo biti.",
    "book.s4": "Iznos kuhinje, te gotovina i kartice koje se predaju.",
    "book.s4.r": "Pokaže manjak, višak ili tačno, prije nego što se smjena zaključi.",
    "book.s5.t": "Zaključeno",
    "book.s5": "Smjena se zaključa i ne može se mijenjati bez zapisa.",
    "book.s5.r": "Pošalje poruku gazdi i prenese stanje u sljedeću smjenu.",
    "book.stamp": "Zaključeno",

    "book.r.kicker": "Ko ga koristi",
    "book.r.title": "Tri strane šanka.",
    "book.r1": "Konobar",
    "book.r1.on": "Android telefon",
    "book.r2": "Šank",
    "book.r2.on": "Telefon na šanku",
    "book.r3": "Gazda",
    "book.r3.on": "Računar, telefon, pregledač",
    "book.w1": "<b>Svako ima svoj PIN.</b> Konobar se prijavi sa četiri cifre, pa se uvijek zna ko je radio smjenu.",
    "book.w2": "<b>Četiri ekrana.</b> ULAZ, RASHOD, STANJE i PREDAJA, gotovo za par minuta.",
    "book.w3": "<b>Narudžba za stolom.</b> Konobar ukuca narudžbu na telefonu i ona odmah stigne na šank.",
    "book.w4": "<b>Greška se vidi na vrijeme.</b> Brojanje koje ne može biti tačno označi se prije zaključenja smjene.",
    "book.w5": "<b>Nema mreže, nema problema.</b> Sve ostaje na telefonu i šalje se čim se veza vrati.",
    "book.t.table4": "Sto 4",
    "book.t.table2": "Sto 2",
    "book.t.table7": "Sto 7",
    "book.b1": "<b>Narudžbe stižu same.</b> Najstarija je gore i niko ne viče preko sale.",
    "book.b2": "<b>Ništa ne čeka predugo.</b> Narudžba koja čeka duže od pet minuta pocrveni.",
    "book.b3": "<b>Jedan potez.</b> Povucite narudžbu udesno i označena je kao gotova.",
    "book.o1": "<b>Cijeli obračun.</b> Šank, kuhinja, rashod, predano i razlika, za dan ili za jednu smjenu.",
    "book.o2": "<b>Isti panel svuda.</b> Na Windows računaru, u pregledaču ili na gazdinom telefonu.",
    "book.o3": "<b>Ispravke uz zapis.</b> Ispravite brojanje ili predaju; ko, kada, staro, novo i zašto ostaje zapisano.",
    "book.o4": "<b>Zaključavanje umjesto konobara.</b> Ako je otišao bez zaključenja, gazda zaključi smjenu da sljedeća može početi.",
    "book.o5": "<b>Više lokala.</b> Jedan nalog gazde, a svaki lokal sa svojim konobarima, artiklima i obračunom.",

    "book.m.kicker": "Kad se smjena zaključi",
    "book.m.title": "Brojke dolaze same do vas.",
    "book.m.lede": "Čim se smjena zaključi, gazdi na Telegram stiže poruka: šank, kuhinja, rashod, predano, manjak ako ga ima i artikli prebrojani više nego što je moglo biti.",
    "book.m.link": "Povezivanje je jedan klik u admin panelu. Poruku može dobiti više telefona ili grupni razgovor, npr. vlasnik i menadžer.",
    "book.m.l1": "Korzo: smjena 2 zaključena",
    "book.m.l2": "Šank",
    "book.m.l3": "Kuhinja",
    "book.m.l4": "Rashod",
    "book.m.l5": "Za predati",
    "book.m.l6": "Predano",
    "book.m.l7": "⚠️ MANJAK",
    "book.m.l8": "⚠️ Prebrojano više nego što je moglo biti: KOLA, bilo 40, uneseno 42",
    "book.m.note": "Primjer poruke, probni podaci.",

    "book.a.kicker": "Admin panel",
    "book.a.title": "Sve što gazdi treba, na jednoj polici.",
    "book.a1": "Obračun",
    "book.a1.d": "Tabela kao u knjizi šanka: ostatak prije, primljeno, utrošeno, ostatak, cijena i iznos. Manjak crveno, izvoz u PDF i upozorenja na neobičnu potrošnju i nisku zalihu.",
    "book.a2": "Mjesečni izvještaj",
    "book.a2.d": "Promet i promjena prema prošlom mjesecu, najjači dani u sedmici, najprodavaniji artikli, i za svakog konobara smjene, manjkovi i sumnjiva brojanja. Izvoz u Excel.",
    "book.a3": "Prosjek",
    "book.a3.d": "Potrošnja po danu i smjeni u zadnjih 7, 30 ili 90 dana, za koliko dana je zaliha dovoljna i brojanja koja ne štimaju.",
    "book.a4": "Artikli",
    "book.a4.d": "Vaša knjiga šanka iz Excela učita se za minut, sa cijenama i stanjem. Slike iz kataloga pomažu konobaru da brže nađe artikal.",
    "book.a5": "Narudžba",
    "book.a5.d": "Za svaki artikal postavite minimum i „naručiti do”. Kad zaliha padne na minimum, artikal se sam pojavi na listi sa predloženom količinom, spreman za Viber ili PDF.",
    "book.a6": "Radnici i stolovi",
    "book.a6.tag": "stolovi",
    "book.a6.d": "Dodajte konobare i šankere sa njihovim PIN-ovima i upišite svoje stolove. Obrisani konobar se odmah odjavi sa svih telefona.",

    "book.y.kicker": "Zašto Šanko",
    "book.y.title": "Osam razloga, bez sitnih slova.",
    "book.y1": "<b>Kontrola gubitaka.</b> Manjak robe i novca vidi se po smjeni i po konobaru, a ne na kraju mjeseca.",
    "book.y2": "<b>Odgovornost.</b> Svaka smjena ima ime, zaključava se i mijenja samo uz zapis.",
    "book.y3": "<b>Uvid i kad niste u lokalu.</b> Poruka na Telegram, a cijeli admin panel i na telefonu.",
    "book.y4": "<b>Ušteda vremena.</b> Nema sabiranja u svesci. Obračun, izvještaj i narudžba su gotovi sami.",
    "book.y5": "<b>Bolja nabavka.</b> Lista za narudžbu i prosjeci govore šta i koliko naručiti.",
    "book.y6": "<b>Radi bez interneta</b> na šanku; podaci se šalju čim se veza vrati.",
    "book.y7": "<b>Sigurni podaci.</b> PIN-ovi se na serveru čuvaju šifrovano, svaki lokal vidi samo svoje podatke, a svaka ispravka ostaje zapisana.",
    "book.y8": "<b>Lako uvođenje.</b> Vaša Excel tabela se uveze kakva jeste, a konobar nauči aplikaciju za 15 minuta.",

    "book.g.kicker": "Uvođenje",
    "book.g.title": "Od sveske do Šanka u pet koraka.",
    "book.g1": "<b>Pošaljete nam knjigu šanka</b> u Excelu, ili spisak artikala s cijenama.",
    "book.g2": "<b>Mi postavimo lokal:</b> artikle, slike, konobare i PIN-ove.",
    "book.g3": "<b>Konobari instaliraju aplikaciju</b> i jednom upišu kod lokala.",
    "book.g4": "<b>Kratka obuka,</b> oko 15 minuta, i probni period.",
    "book.g5": "<b>Povežete Telegram</b> za obavještenja, ako želite.",

    "book.q.kicker": "Česta pitanja",
    "book.q.title": "Šta nas gazde pitaju.",
    "book.q1": "Šta ako nestane interneta?",
    "book.q1.a": "Konobar nastavlja raditi normalno. Sve se čuva na telefonu i šalje kad se veza vrati. Za početak nove smjene potreban je internet, da dvije smjene ne bi bile otvorene istovremeno.",
    "book.q2": "Šta ako konobar pogriješi u brojanju?",
    "book.q2.a": "Aplikacija upozori na očite greške prije zaključenja. Gazda kasnije može ispraviti brojanje ili predaju, a ispravka ostaje zapisana.",
    "book.q3": "Šta ako konobar ode bez zaključenja smjene?",
    "book.q3.a": "Gazda je zaključi iz admin panela i upiše stanje i predaju.",
    "book.q4": "Na kojim uređajima radi?",
    "book.q4.a": "Konobar koristi Android telefon. Gazda koristi istu aplikaciju na svom telefonu, ili Windows računar i pregledač, i na svim uređajima vidi iste podatke.",
    "book.q5": "Imam više lokala.",
    "book.q5.a": "Jedan nalog gazde može imati više lokala; svaki ima svoje konobare, artikle i obračun.",
    "book.q6": "Mogu li zadržati svoju Excel tabelu?",
    "book.q6.a": "Možete je uvesti u Šanko, a izvještaje u svakom trenutku izvesti nazad u Excel.",
    "book.q7": "Kako se vodi kafa?",
    "book.q7.a": "Kafa i nes vode se u gramima. Upišete gramažu jedne porcije, a Šanko izračuna koliko je porcija prodano.",
    "book.q8": "Koliko košta?",
    "book.q8.a": "Šanko je mjesečna pretplata po lokalu. Javite nam se, poslat ćemo vam ponudu i dogovoriti demo.",

    "book.e.kicker": "Pretplata",
    "book.e.title": "Mjesečna pretplata po lokalu. Prvi korak je demo.",
    "book.e.sign": "Potpis gazde",
  },
};

(() => {
  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Texts and the language switch (same choice as the home page) */

  let lang = "bs";
  const t = (key) => TEXT[lang][key] ?? TEXT.en[key] ?? "";

  function setLang(next) {
    lang = TEXT[next] ? next : "bs";
    root.lang = lang;
    $$("[data-i18n]").forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
    $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    try { localStorage.setItem("fw-lang", lang); } catch {}
    renderCalc();
    labelShots();
  }

  /* ---- Reveals */

  // On phones the admin cards sit in a swipe row, so the ones off to the
  // side would never scroll into view: they arrive together with the first.
  const swipeRow = window.matchMedia("(max-width: 560px)");
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const together = swipeRow.matches && entry.target.matches(".bk-card")
        ? $$(".bk-card") : [entry.target];
      for (const el of together) {
        el.classList.add("in");
        io.unobserve(el);
      }
    }
  }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });
  $$(".bk-rv").forEach((el) => (reduceMotion ? el.classList.add("in") : io.observe(el)));

  /* ---- The loss sum */

  // Amounts the way each language writes them: 2.880,00 KM or 2,880.00 KM.
  function amount(n, decimals) {
    const [whole, part] = n.toFixed(decimals).split(".");
    const [group, point] = lang === "bs" ? [".", ","] : [",", "."];
    return whole.replace(/\B(?=(\d{3})+(?!\d))/g, group) + (part ? point + part : "");
  }

  const steppers = $$("#bookCalc .bk-step");
  function renderCalc() {
    if (!steppers.length) return;
    const v = {};
    for (const s of steppers) {
      const value = Number(s.dataset.value);
      v[s.dataset.calc] = value;
      $("output", s).textContent = amount(value, Number(s.dataset.by) < 1 ? 2 : 0);
      $('[data-d="-1"]', s).disabled = value <= Number(s.dataset.min);
      $('[data-d="1"]', s).disabled = value >= Number(s.dataset.max);
    }
    // A month of 30 days, a year of 12 months, as in the Šanko presentation.
    const month = v.qty * v.price * 30;
    $("#calcMonth").textContent = `${amount(month, 0)} KM`;
    $("#calcYear").textContent = `${amount(month * 12, 0)} KM`;
  }
  steppers.forEach((s) => s.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (!button) return;
    const next = Number(s.dataset.value) + Number(s.dataset.by) * Number(button.dataset.d);
    const clamped = Math.min(Number(s.dataset.max), Math.max(Number(s.dataset.min), next));
    s.dataset.value = String(Math.round(clamped * 100) / 100);
    renderCalc();
  }));

  /* ---- Role tabs */

  const roleTabs = $$('.bk-tablist [role="tab"]');
  function selectRole(tab, focus) {
    for (const r of roleTabs) {
      const on = r === tab;
      r.setAttribute("aria-selected", String(on));
      r.tabIndex = on ? 0 : -1;
      document.getElementById(r.getAttribute("aria-controls")).hidden = !on;
    }
    if (focus) tab.focus();
  }
  roleTabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectRole(tab));
    tab.addEventListener("keydown", (e) => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      selectRole(roleTabs[(i + d + roleTabs.length) % roleTabs.length], true);
    });
  });

  /* ---- Admin panel screenshots: full size, and the dots of the swipe row */

  const shots = $$(".bk-card-shot");
  const shotTitle = (b) => b.closest(".bk-card").querySelector("h4").textContent;
  function labelShots() {
    for (const b of shots) b.setAttribute("aria-label", `${t("page.zoom")}: ${shotTitle(b)}`);
    $("#shotDialog .bk-lb-close")?.setAttribute("aria-label", t("page.close"));
  }

  const lightbox = $("#shotDialog");
  let shown = 0;
  function showShot(i) {
    shown = (i + shots.length) % shots.length;
    const img = $("img", shots[shown]);
    $("#shotImage").src = img.currentSrc || img.src;
    $("#shotImage").alt = shotTitle(shots[shown]);
    $("#shotTitle").textContent = shotTitle(shots[shown]);
    $("#shotCount").textContent = `${shown + 1} / ${shots.length}`;
  }
  if (lightbox) {
    shots.forEach((b, i) => b.addEventListener("click", () => {
      showShot(i);
      lightbox.showModal();
    }));
    lightbox.addEventListener("click", (e) => {
      const step = e.target.closest("[data-step]");
      if (step) { showShot(shown + Number(step.dataset.step)); return; }
      // The close button, or anywhere outside the picture.
      if (e.target.closest("[data-close]") || !e.target.closest("img, figcaption")) lightbox.close();
    });
    lightbox.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") showShot(shown + 1);
      if (e.key === "ArrowLeft") showShot(shown - 1);
    });
    // Swipe left or right on a phone.
    let touchX = null;
    lightbox.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener("touchend", (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 50) showShot(shown + (dx < 0 ? 1 : -1));
    });
  }

  const row = $(".bk-cards");
  const dots = $(".bk-cards-dots");
  if (row && dots) {
    const cards = $$(".bk-card", row);
    dots.innerHTML = cards.map(() => "<i></i>").join("");
    const marks = $$("i", dots);
    const mark = () => {
      const step = cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : 1;
      const at = Math.round(row.scrollLeft / step);
      marks.forEach((m, i) => m.classList.toggle("on", i === Math.min(at, marks.length - 1)));
    };
    row.addEventListener("scroll", mark, { passive: true });
    mark();
  }

  /* ---- Start */

  let saved = null;
  try { saved = localStorage.getItem("fw-lang"); } catch {}
  const guess = /^(bs|hr|sr|sh)\b/i.test(navigator.language || "") ? "bs" : "en";
  setLang(saved || guess);
  $$(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  $("#year").textContent = new Date().getFullYear();
})();
