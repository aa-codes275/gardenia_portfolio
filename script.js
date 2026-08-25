/* ================= GARDENIA A — shared script ================= */
const PHONE_INTL = "966573866384";          // الرقم الرئيسي
const PHONE_LOCAL = "0573866384";
const EMAIL = "gardeniaaa44@gmail.com";
const WA_LINK = "https://wa.me/" + PHONE_INTL;
const SITE_URL = "https://gardenia-portfolio.vercel.app/";
const SOCIAL = {
  instagram: "https://www.instagram.com/gardenia44a?igsi=MWFlOGg5YmExY2QwdA==",
  tiktok: "https://www.tiktok.com/@gardeniaa44?_r=1&_t=ZS-99AwvLzKUWA",
  snapchat: "https://snapchat.com/t/TI7watIr"
};

/* ---------- الشعار الرسمي محفور كـ SVG مفرغ (ليس صورة) ---------- */
const LOGO_SVG = `
<svg class="logo-mark" viewBox="0 0 198 269" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="شعار جاردينيا A">
  <g transform="translate(0.000000,269.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
    <path d="M1155 2581 c-72 -34 -118 -78 -151 -143 l-24 -47 -41 39 c-98 93 -234 93 -320 0 -108 -116 -39 -300 113 -300 72 0 138 57 138 120 0 36 -44 26 -58 -14 -37 -103 -192 -53 -192 61 0 148 183 202 292 86 45 -48 48 -65 48 -408 1 -341 3 -352 43 -307 15 17 17 56 17 351 l0 332 26 54 c63 134 225 194 345 129 117 -64 146 -212 58 -302 -74 -75 -213 -46 -234 49 -5 22 -12 29 -31 29 -30 0 -32 -26 -4 -80 31 -60 90 -95 160 -94 196 3 280 233 144 393 -70 84 -215 107 -329 52z"/>
    <path d="M384 2039 c-134 -17 -251 -127 -290 -273 -83 -311 237 -598 576 -517 122 29 155 55 488 386 351 349 365 359 472 352 128 -8 220 -93 220 -206 0 -153 -188 -241 -275 -127 -67 88 15 214 107 165 17 -9 24 -7 41 9 l20 20 -31 16 c-163 84 -295 -147 -153 -267 136 -114 341 -5 341 182 0 157 -133 270 -304 259 -114 -8 -130 -20 -468 -357 -277 -276 -314 -310 -384 -346 -76 -40 -77 -40 -193 -40 -110 0 -120 2 -183 32 -243 115 -309 387 -140 575 155 172 454 78 454 -142 0 -71 -23 -121 -73 -162 -122 -99 -305 16 -244 152 15 32 15 42 5 55 -20 24 -30 18 -50 -27 -31 -68 -26 -128 13 -180 113 -150 338 -100 393 88 57 198 -120 381 -342 353z"/>
    <path d="M1307 1449 c-110 -26 -138 -48 -472 -380 -350 -348 -364 -358 -471 -359 -186 0 -295 185 -190 323 58 77 158 87 223 22 67 -67 31 -185 -56 -185 -20 0 -43 4 -51 10 -9 5 -19 5 -27 -2 -21 -17 -15 -35 18 -48 152 -63 274 130 160 254 -136 148 -380 19 -358 -190 14 -135 118 -225 269 -232 136 -7 130 -11 493 348 176 175 340 329 365 343 169 96 393 68 532 -67 211 -206 88 -576 -192 -576 -153 0 -257 104 -248 246 5 79 41 137 101 165 135 61 275 -60 211 -183 -14 -27 -14 -32 -1 -45 19 -19 35 -9 53 33 65 155 -85 302 -259 253 -128 -35 -201 -224 -136 -353 97 -195 381 -229 525 -63 203 233 93 582 -214 677 -69 21 -204 26 -275 9z"/>
    <path d="M982 1027 c-22 -23 -22 -28 -22 -353 0 -324 -1 -330 -24 -379 -93 -198 -369 -210 -442 -19 -44 115 30 234 145 234 64 0 107 -28 122 -80 10 -32 17 -40 36 -40 27 0 30 23 9 73 -49 117 -220 136 -317 35 -101 -106 -67 -296 69 -375 144 -85 354 -14 424 143 l19 45 50 -45 c120 -108 288 -79 350 58 87 191 -180 350 -277 164 -21 -41 -18 -58 11 -58 16 0 25 6 25 16 0 8 14 29 30 46 76 75 199 -15 169 -124 -40 -151 -252 -153 -320 -3 -17 36 -19 71 -19 363 0 177 -4 322 -8 322 -5 0 -18 -10 -30 -23z"/>
  </g>
</svg>`;

/* ---------- الشريط العلوي ---------- */
function buildChrome(active) {
  const links = [
    ["index.html", "الصفحة الرئيسية"],
    ["services.html", "الخدمات التي نقدمها"],
    ["booking.html", "حجز خدمة"],
    ["contact.html", "تواصل"]
  ];
  const nav = document.querySelector("[data-nav]");
  if (nav) {
    nav.innerHTML = `
      <div class="container nav-inner">
        <a class="brand" href="index.html">
          <span class="mark">${LOGO_SVG}</span>
          <span style="min-width:0">
            <b>GARDENIA A</b>
            <small>تنظيم وخدمات عامة</small>
          </span>
        </a>
        <div style="display:flex;align-items:center;gap:.5rem">
          <ul class="nav-links">
            ${links.map(([h, t]) => `<li><a class="${h === active ? "active" : ""}" href="${h}">${t}</a></li>`).join("")}
            <li><a href="gallery.html" class="${active === "gallery.html" ? "active" : ""}">معرض الأعمال</a></li>
            <li><a href="qr.html" class="${active === "qr.html" ? "active" : ""}"><i class="fa-solid fa-qrcode"></i> واتساب QR</a></li>
            <li><a href="qr2.html" class="${active === "qr2.html" ? "active" : ""}"><i class="fa-solid fa-globe"></i> QR الموقع</a></li>
          </ul>
          <button class="burger" id="burger" aria-label="القائمة">☰</button>
        </div>
      </div>
      <div class="container mobile" id="mobileMenu">
        ${links.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}
        <a href="gallery.html">معرض الأعمال</a>
        <a href="qr.html"><i class="fa-solid fa-qrcode"></i> رمز QR للواتساب</a>
        <a href="qr2.html"><i class="fa-solid fa-globe"></i> رمز QR للموقع</a>
      </div>`;
    const b = document.getElementById("burger");
    b && b.addEventListener("click", () =>
      document.getElementById("mobileMenu").classList.toggle("open"));
  }

  const f = document.querySelector("[data-footer]");
  if (f) {
    f.innerHTML = `
      <div class="container">
        <div class="mark">${LOGO_SVG}</div>
        <p style="margin:0 0 .5rem">GARDENIA A — الرياض، السعودية</p>
        <p style="margin:0 0 .9rem"><a href="${WA_LINK}" class="gold" dir="ltr">${PHONE_LOCAL}</a> · <a href="mailto:${EMAIL}" class="gold">${EMAIL}</a></p>
        <div class="social">
          <a href="${SOCIAL.instagram}" target="_blank" aria-label="إنستجرام"><i class="fa-brands fa-instagram"></i></a>
          <a href="${SOCIAL.tiktok}" target="_blank" aria-label="تيك توك"><i class="fa-brands fa-tiktok"></i></a>
          <a href="${SOCIAL.snapchat}" target="_blank" aria-label="سناب شات"><i class="fa-brands fa-snapchat"></i></a>
          <a href="${WA_LINK}" target="_blank" aria-label="واتساب"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
        <p style="margin-top:1.2rem;font-size:.8rem">© ${new Date().getFullYear()} Gardenia A. جميع الحقوق محفوظة.</p>
      </div>`;
  }

  document.querySelectorAll("[data-logo]").forEach(el => (el.innerHTML = LOGO_SVG));
  document.querySelectorAll("[data-wa]").forEach(el => el.setAttribute("href", WA_LINK));
  document.querySelectorAll("[data-mail]").forEach(el => el.setAttribute("href", "mailto:" + EMAIL));
  document.querySelectorAll("[data-phone]").forEach(el => (el.textContent = PHONE_LOCAL));

  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ---------- معرض الأعمال — مشغّل وسائط بقائمة تشغيل ---------- */
const WORKS = [ 
    { t: "جاردينيا ·    كواليس التنظيم", sub: "مقطع 1", c: "video", type: "video", src: "assets/IMG_2520.MP4", poster: "assets/5796193438838493395_121.jpg" },
   { t: "جاردينيا ·    كواليس التنظيم", sub: "مقطع 2", c: "video", type: "video", src: "assets/video-1.mp4", poster: "assets/5796193438838493364_121.jpg" },
  { t: "جاردينيا · تنفيذ المشاريع", sub: "مقطع 3", c: "video", type: "video", src: "assets/video-2.mp4", poster: "assets/video-2-poster.jpg" },
  { t: "جاردينيا · كواليس التنظيم", sub: "مقطع 4", c: "video", type: "video", src: "assets/video-4.mp4", poster: "assets/video-4-poster.jpg" },
  { t: "جاردينيا · لقطات من الميدان", sub: "مقطع 5", c: "video", type: "video", src: "assets/5796193438378500971.mp4", poster: "assets/video-1-poster.jpg" },
  { t: "جاردينيا . كواليس التنظيم", sub: "مقطع 6", c: "video", type: "video", src: "assets/5796193438378500974.mp4", poster: "assets/5796193438838493364_121.jpg" },
  { t: "جاردينيا · لقطات من الميدان", sub: "مقطع 7", c: "video", type: "video", src: "assets/5796193438378500972.mp4", poster: "assets/video-1-poster.jpg" },
    { t: "جاردينيا · لقطات من الميدان", sub: "مقطع 8", c: "video", type: "video", src: "assets/video-2.mp4", poster: "assets/video-3-poster.jpg" },
  { t: "جاردينيا · لقطات من الميدان", sub: "مقطع 9", c: "video", type: "video", src: "assets/5796193438378500973.mp4", poster: "assets/video-1-poster.jpg" },

  { t: "جاردينيا · مشروعك يحتاج فريق", sub: "تصميم 1", c: "design", type: "image", src: "assets/5796193438838493361_121.jpg", poster: "assets/5796193438838493361_121.jpg" },
  { t: "جاردينيا · مشروعك يحتاج فريق", sub: "تصميم 2", c: "design", type: "image", src: "assets/5796193438838493362_121.jpg", poster: "assets/5796193438838493362_121.jpg" },
  { t: "جاردينيا · مشروعك يحتاج فريق", sub: "تصميم 3", c: "design", type: "image", src: "assets/5796193438838493365_121.jpg", poster: "assets/5796193438838493365_121.jpg" },
  { t: "جاردينيا · مشروعك يحتاج فريق", sub: "تصميم 4", c: "design", type: "image", src: "assets/5796193438838493366_121.jpg", poster: "assets/5796193438838493366_121.jpg" },
  { t: "جاردينيا · مشروعك يحتاج فريق", sub: "تصميم 5", c: "design", type: "image", src: "assets/5796193438838493367_121.jpg", poster: "assets/5796193438838493367_121.jpg" },
  { t: "جاردينيا · مشروعك يحتاج فريق", sub: "تصميم 6", c: "design", type: "image", src: "assets/5796193438838493368_121.jpg", poster: "assets/5796193438838493368_121.jpg" },
  { t: "جاردينيا · الفرق يصنعه الإخراج", sub: "تصميم 7", c: "design", type: "image", src: "assets/img-2.jpg", poster: "assets/img-2.jpg" },
  { t: "جاردينيا · اختيار اللقطات", sub: "تصميم 8", c: "design", type: "image", src: "assets/img-3.jpg", poster: "assets/img-3.jpg" },
  { t: "جاردينيا · مرحلة المونتاج", sub: "تصميم 9", c: "design", type: "image", src: "assets/img-4.jpg", poster: "assets/img-4.jpg" },
  { t: "جاردينيا × ريتش جروب · شراكة", sub: "فعاليات", c: "events", type: "image", src: "assets/img-5.jpg", poster: "assets/img-5.jpg" },
  { t: "جاردينيا × ريتش جروب · شراكة", sub: "فعاليات", c: "events", type: "image", src: "assets/promo-1.jpg", poster: "assets/promo-1.jpg" },
    { t: "جاردينيا × ريتش جروب · شراكة", sub: "فعاليات", c: "events", type: "image", src: "assets/5796193438838493392_121.jpg", poster: "assets/5796193438838493392_121.jpg" },
  { t: "جاردينيا × ريتش جروب · شراكة", sub: "فعاليات", c: "events", type: "image", src: "assets/5780757485290459673_121.jpg", poster: "assets/5780757485290459673_121.jpg" }

];

let PL = WORKS.slice();   // القائمة الحالية بعد الفلترة
let CUR = 0;

function q(id) { return document.getElementById(id); }

function renderPlaylist(filter = "all") {
  const list = q("playlist");
  if (!list) return;
  PL = filter === "all" ? WORKS.slice() : WORKS.filter(w => w.c === filter);
  CUR = 0;
  list.innerHTML = PL.map((w, i) => `
    <button class="pl-item${i === 0 ? " active" : ""}" data-i="${i}" type="button">
      <span class="pl-txt"><b>${w.t}</b><small>${w.sub}</small></span>
      <span class="pl-thumb"><img src="${w.poster}" alt="${w.t}" loading="lazy" decoding="async"/>
        <i class="fa-solid ${w.type === "video" ? "fa-play" : "fa-image"}"></i></span>
    </button>`).join("");
  list.querySelectorAll(".pl-item").forEach(b =>
    b.addEventListener("click", () => loadTrack(+b.dataset.i, true)));
  loadTrack(0, false);
}

function loadTrack(i, autoplay) {
  if (!PL.length) return;
  CUR = (i + PL.length) % PL.length;
  const w = PL[CUR];
  const stage = q("stage");
  if (!stage) return;
  stage.innerHTML = w.type === "video"
    ? `<video id="mediaEl" src="${w.src}" poster="${w.poster}" playsinline preload="auto"></video>`
    : `<img id="mediaEl" src="${w.src}" alt="${w.t}"/>`;
  q("nowTitle").textContent = w.t;
  q("nowSub").textContent = w.sub;
  document.querySelectorAll(".pl-item").forEach(el =>
    el.classList.toggle("active", +el.dataset.i === CUR));
  q("player").classList.toggle("is-image", w.type !== "video");

  const v = q("mediaEl");
  if (w.type === "video") {
    const vol = q("vol");
    v.volume = vol ? +vol.value : 1;
    v.addEventListener("loadedmetadata", () => {
      q("time").textContent = fmt(0) + " / " + fmt(v.duration || 0);
    });
    v.addEventListener("timeupdate", () => {
      const p = v.duration ? (v.currentTime / v.duration) * 100 : 0;
      const s = q("seek"); if (s) s.value = p;
      q("time").textContent = fmt(v.currentTime) + " / " + fmt(v.duration || 0);
    });
    v.addEventListener("play", () => setPlayIcon(true));
    v.addEventListener("pause", () => setPlayIcon(false));
    v.addEventListener("ended", () => loadTrack(CUR + 1, true));
    const showTime = () => { q("time").textContent = fmt(v.currentTime) + " / " + fmt(v.duration || 0); };
    if (v.readyState >= 1) showTime(); else v.addEventListener("durationchange", showTime, { once: true });
    if (autoplay) v.play().catch(() => {});
  } else {
    const s = q("seek"); if (s) s.value = 0;
    q("time").textContent = "صورة";
    setPlayIcon(false);
  }
}

function fmt(t) {
  t = Math.max(0, Math.floor(t || 0));
  return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0");
}
function setPlayIcon(playing) {
  const b = q("playBtn");
  if (b) b.innerHTML = `<i class="fa-solid ${playing ? "fa-pause" : "fa-play"}"></i>`;
}

function initPlayer() {
  if (!q("player")) return;
  q("playBtn").addEventListener("click", () => {
    const v = q("mediaEl");
    if (!v || v.tagName !== "VIDEO") return;
    v.paused ? v.play().catch(() => {}) : v.pause();
  });
  q("nextBtn").addEventListener("click", () => loadTrack(CUR + 1, true));
  q("prevBtn").addEventListener("click", () => loadTrack(CUR - 1, true));
  q("muteBtn").addEventListener("click", () => {
    const v = q("mediaEl"); if (!v || v.tagName !== "VIDEO") return;
    v.muted = !v.muted;
    q("muteBtn").innerHTML = `<i class="fa-solid ${v.muted ? "fa-volume-xmark" : "fa-volume-high"}"></i>`;
  });
  q("vol").addEventListener("input", e => {
    const v = q("mediaEl"); if (v && v.tagName === "VIDEO") v.volume = +e.target.value;
  });
  q("seek").addEventListener("input", e => {
    const v = q("mediaEl");
    if (v && v.tagName === "VIDEO" && v.duration) v.currentTime = (+e.target.value / 100) * v.duration;
  });
  q("fsBtn") && q("fsBtn").addEventListener("click", () => {
    const v = q("mediaEl");
    if (v && v.requestFullscreen) v.requestFullscreen();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildChrome(document.body.dataset.page || "");
  initPlayer();
  renderPlaylist();
  document.querySelectorAll(".filter-btn").forEach(b =>
    b.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      renderPlaylist(b.dataset.filter);
    }));

  const form = document.getElementById("bookForm");
  form && form.addEventListener("submit", e => {
    e.preventDefault();
    const d = new FormData(form);
    const msg =
      `طلب حجز خدمة من موقع Gardenia A%0A` +
      `الاسم: ${d.get("name")}%0A` +
      `الخدمة: ${d.get("service")}%0A` +
      `التاريخ: ${d.get("date")}%0A` +
      `التفاصيل: ${d.get("details")}`;
    window.open(WA_LINK + "?text=" + msg, "_blank");
  });

  const qr = document.getElementById("qrImg");
  if (qr) qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=800x800&margin=0&data=" +
    encodeURIComponent(WA_LINK);

  const qrSite = document.getElementById("qrSiteImg");
  if (qrSite) qrSite.src = "https://api.qrserver.com/v1/create-qr-code/?size=800x800&margin=0&data=" +
    encodeURIComponent(SITE_URL);

  document.querySelectorAll("[data-site]").forEach(el => {
    el.setAttribute("href", SITE_URL);
    if (el.hasAttribute("data-site-text")) el.textContent = SITE_URL;
  });

  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") loadTrack(CUR - 1, true);
    if (e.key === "ArrowLeft") loadTrack(CUR + 1, true);
  });
});