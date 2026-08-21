/* ================= GARDENIA A — shared script ================= */
const PHONE_INTL = "966573866384";          // الرقم الرئيسي
const PHONE_LOCAL = "0573866384";
const EMAIL = "gardeniaaa44@gmail.com";
const WA_LINK = "https://wa.me/" + PHONE_INTL;
const SOCIAL = {
  instagram: "https://www.instagram.com/gardenia44a?igsi=MWFlOGg5YmExY2QwdA==",
  tiktok: "https://tiktok.com/@gardenia.a_events",
  snapchat: "https://www.snapchat.com/t/ASOkxZcD"
};

/* ---------- الشعار محفور كـ SVG (ليس صورة) ---------- */
const LOGO_SVG = `
<svg class="logo-mark" viewBox="0 0 200 240" role="img" aria-label="شعار جاردينيا A">
  <g>
    <!-- الساق الرأسية -->
    <path d="M100 48 V192"/>
    <!-- زخرفة أعلى الساق -->
    <path d="M100 40 C92 26 78 26 74 38 C71 48 84 54 89 44"/>
    <path d="M100 40 C108 26 122 26 126 38 C129 48 116 54 111 44"/>
    <!-- زخرفة أسفل الساق -->
    <path d="M100 200 C92 214 78 214 74 202 C71 192 84 186 89 196"/>
    <path d="M100 200 C108 214 122 214 126 202 C129 192 116 186 111 196"/>
    <!-- لوالب علوية -->
    <path d="M100 80 C126 54 166 62 168 92 C169 114 142 124 132 108 C124 95 135 82 146 89"/>
    <path d="M100 80 C74 54 34 62 32 92 C31 114 58 124 68 108 C76 95 65 82 54 89"/>
    <!-- لوالب سفلية -->
    <path d="M100 160 C126 186 166 178 168 148 C169 126 142 116 132 132 C124 145 135 158 146 151"/>
    <path d="M100 160 C74 186 34 178 32 148 C31 126 58 116 68 132 C76 145 65 158 54 151"/>
    <!-- حرف S في المنتصف -->
    <path d="M56 132 C68 108 92 110 100 124 C108 138 132 140 144 116"/>
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
            <li><a href="qr.html" class="${active === "qr.html" ? "active" : ""}">QR</a></li>
          </ul>
          <button class="burger" id="burger" aria-label="القائمة">☰</button>
        </div>
      </div>
      <div class="container mobile" id="mobileMenu">
        ${links.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}
        <a href="gallery.html">معرض الأعمال</a>
        <a href="qr.html">رمز QR</a>
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

/* ---------- معرض الأعمال ---------- */
const WORKS = [
  { t: "هوية وتصميم إعلاني", c: "design", type: "image", src: "assets/promo-1.jpg", d: "تصميم إعلان متكامل لجاردينيا A" },
  { t: "تغطية وتنظيم فعالية", c: "events", type: "image", src: "assets/promo-2.jpg", d: "تنسيق مسرح وقاعة وتغطية كاملة" },
  { t: "فيديو من كواليس التنفيذ", c: "video", type: "video", src: "assets/video-1.mp4", d: "أضف الفيديو باسم assets/video-1.mp4" },
  { t: "فيديو تغطية حفل", c: "video", type: "video", src: "assets/video-2.mp4", d: "أضف الفيديو باسم assets/video-2.mp4" }
];

function renderWorks(filter = "all") {
  const grid = document.getElementById("worksGrid");
  if (!grid) return;
  const items = filter === "all" ? WORKS : WORKS.filter(w => w.c === filter);
  grid.innerHTML = items.map((w, i) => `
    <div class="tile reveal in" data-i="${WORKS.indexOf(w)}">
      ${w.type === "video"
        ? `<video src="${w.src}" muted playsinline preload="metadata"></video><div class="ov"></div><div class="play"><span>▶</span></div>`
        : `<img src="${w.src}" alt="${w.t}" loading="lazy"/><div class="ov"></div>`}
      <span class="badge">${w.type === "video" ? "فيديو" : "صورة"}</span>
      <div class="info"><b>${w.t}</b><small>${w.d}</small></div>
    </div>`).join("");
  grid.querySelectorAll(".tile").forEach(t =>
    t.addEventListener("click", () => openLb(WORKS[+t.dataset.i])));
}

function openLb(w) {
  const lb = document.getElementById("lb");
  if (!lb) return;
  lb.querySelector("#lbMedia").innerHTML = w.type === "video"
    ? `<video src="${w.src}" controls autoplay playsinline></video>`
    : `<img src="${w.src}" alt="${w.t}"/>`;
  lb.querySelector("#lbTitle").textContent = w.t;
  lb.querySelector("#lbDesc").textContent = w.d;
  lb.classList.add("open");
}

document.addEventListener("click", e => {
  if (e.target.id === "lb" || e.target.id === "lbClose") {
    const lb = document.getElementById("lb");
    lb.classList.remove("open");
    lb.querySelector("#lbMedia").innerHTML = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  buildChrome(document.body.dataset.page || "");
  renderWorks();
  document.querySelectorAll(".filter-btn").forEach(b =>
    b.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      renderWorks(b.dataset.filter);
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
  if (qr) qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=" +
    encodeURIComponent(WA_LINK);
});