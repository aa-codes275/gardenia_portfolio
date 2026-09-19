/* ================= GARDENIA A — shared script ================= */
const PHONE_INTL = "966573866384";          // الرقم الرئيسي
const PHONE_LOCAL = "0573866384";
const EMAIL = "gardeniaaa44@gmail.com";
const WA_LINK = "https://wa.me/" + PHONE_INTL;
const SITE_URL = "https://gardenia-portfolio.vercel.app/";
const SOCIAL = {
  instagram: "https://www.instagram.com/gardenia44a?igsi=MWFlOGg5YmExY2QwdA==",
    tiktok: "https://www.tiktok.com/@gardeniaa44?_r=1&_t=ZS-99rE1ZqBT3I",
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
    { t: "جاردينيا .  [جاردينيا اي في قلب الحدث]", sub: "مقطع 1", c: "video", type: "video", src: "IMG_2815.MP4", poster: "5855030552308683210_121.jpg" },
    { t: "جاردينيا .  [جاردينيا اي في قلب الحدث]", sub: "مقطع 2", c: "video", type: "video", src: "IMG_2817 - Trim - Trim.mp4", poster: "5855030552308683210_121.jpg" },
  { t: "جاردينيا .  [جاردينيا اي في قلب الحدث]", sub: "مقطع 3", c: "video", type: "video", src: "IMG_2644.MP4", poster: "5834916271273742324_121.jpg" },
    { t: "جاردينيا ·    كواليس التنظيم", sub: "مقطع 4", c: "video", type: "video", src: "IMG_2520.MP4", poster: "assets/5796193438838493395_121.jpg" },
   { t: "جاردينيا ·    كواليس التنظيم", sub: "مقطع 5", c: "video", type: "video", src: "assets/video-1.mp4", poster: "assets/5796193438838493364_121.jpg" },
  { t: "جاردينيا . كواليس التنظيم", sub: "مقطع 6", c: "video", type: "video", src: "assets/5796193438378500974.mp4", poster: "assets/5796193438838493364_121.jpg" },
  { t: "جاردينيا · مشروعك يحتاج فريق", sub: "تصميم 2", c: "design", type: "image", src: "5855030552308683210_121.jpg", poster: "5855030552308683210_121.jpg" },
  { t: "جاردينيا · مشروعك يحتاج فريق", sub: "تصميم 2", c: "design", type: "image", src: "assets/5796193438838493362_121.jpg", poster: "assets/5796193438838493362_121.jpg" },
  { t: "جاردينيا · مشروعك يحتاج فريق", sub: "تصميم 4", c: "design", type: "image", src: "assets/5796193438838493366_121.jpg", poster: "assets/5796193438838493366_121.jpg" },
  { t: "جاردينيا · مشروعك يحتاج فريق", sub: "تصميم 5", c: "design", type: "image", src: "assets/5796193438838493367_121.jpg", poster: "assets/5796193438838493367_121.jpg" },
  { t: "جاردينيا · مشروعك يحتاج فريق", sub: "تصميم 6", c: "design", type: "image", src: "assets/5796193438838493368_121.jpg", poster: "assets/5796193438838493368_121.jpg" },
  { t: "جاردينيا · الفرق يصنعه الإخراج", sub: "تصميم 7", c: "design", type: "image", src: "assets/img-2.jpg", poster: "assets/img-2.jpg" },
  { t: "جاردينيا · اختيار اللقطات", sub: "تصميم 8", c: "design", type: "image", src: "assets/img-3.jpg", poster: "assets/img-3.jpg" },
  { t: "جاردينيا · مرحلة المونتاج", sub: "تصميم 9", c: "design", type: "image", src: "assets/img-4.jpg", poster: "assets/img-4.jpg" },
  { t: "جاردينيا × ريتش جروب · شراكة", sub: "فعاليات", c: "events", type: "image", src: "assets/img-5.jpg", poster: "assets/img-5.jpg" },
  { t: "جاردينيا × ريتش جروب · شراكة", sub: "فعاليات", c: "events", type: "image", src: "assets/promo-1.jpg", poster: "assets/promo-1.jpg" },
  { t: "جاردينيا × ريتش جروب · شراكة", sub: "فعاليات", c: "events", type: "image", src: "assets/5780757485290459673_121.jpg", poster: "assets/5780757485290459557_120.jpg" }
];


/* ================= SUPABASE INTEGRATION ================= */
// استخدام المفاتيح المدخلة من لوحة التحكم (localStorage) أو القيم الافتراضية
const SUPABASE_URL = localStorage.getItem("GARDENIA_SB_URL") || "https://ctvssdbzakrxipwbxaet.supabase.co";
const SUPABASE_KEY = localStorage.getItem("GARDENIA_SB_KEY") || "sb_publishable_UbpB_5DCSsZZeGqBUEUEyg_mreUcaZo";

let sbClient = null;
if (window.supabase && SUPABASE_URL && !SUPABASE_URL.includes("YOUR_SUPABASE")) {
  try {
    sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  } catch (e) {
    console.warn("Supabase init error:", e);
  }
}

async function fetchWorksFromSupabase() {
  if (!sbClient) return null;
  try {
    const { data, error } = await sbClient
      .from("works")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });
    if (error) throw error;
    if (data && data.length > 0) {
      return data.map(w => ({
        t: w.title,
        sub: w.subtitle || "",
        c: w.category,
        type: w.type,
        src: w.src,
        poster: w.poster || w.src
      }));
    }
  } catch (err) {
    console.warn("Could not fetch from Supabase, using local fallback:", err);
  }
  return null;
}


let currentMediaList = [];
let currentMediaIndex = 0;

function q(id) { return document.getElementById(id); }

async function initModernGallery() {
  const videosContainer = q("videosContainer");
  const imagesContainer = q("imagesContainer");
  if (!videosContainer && !imagesContainer) return;

  const remoteWorks = await fetchWorksFromSupabase();
  const allWorks = remoteWorks || WORKS;

  const videoItems = allWorks.filter(w => w.type === "video" || w.c === "video");
  const designItems = allWorks.filter(w => w.type !== "video" && w.c !== "video");

  if (q("videoCountBadge")) q("videoCountBadge").textContent = videoItems.length + " فيديو";
  if (q("designCountBadge")) q("designCountBadge").textContent = designItems.length + " عمل وإعلان";

  // عرض الفيديوهات
  if (videosContainer) {
    videosContainer.innerHTML = videoItems.map((w, i) => `
      <div class="video-card" data-v-index="${i}">
        <div class="video-thumb-box">
          <img src="${w.poster || w.src}" alt="${w.t}" loading="lazy" decoding="async"/>
          <span class="video-tag"><i class="fa-solid fa-play-circle"></i> ${w.sub || 'فيديو'}</span>
          <div class="video-play-overlay">
            <div class="play-pulse-btn"><i class="fa-solid fa-play"></i></div>
          </div>
        </div>
        <div class="video-card-body">
          <h4 class="video-card-title">${w.t}</h4>
          <span class="video-card-sub">${w.sub || 'توثيق مرئي احترافي'}</span>
        </div>
      </div>
    `).join('');

    videosContainer.querySelectorAll(".video-card").forEach(card => {
      card.addEventListener("click", () => {
        const idx = +card.dataset.vIndex;
        openLightbox(videoItems, idx);
      });
    });
  }

  // عرض الصور
  function renderImages(filter = "all") {
    if (!imagesContainer) return;
    const filtered = filter === "all" ? designItems : designItems.filter(w => w.c === filter);
    imagesContainer.innerHTML = filtered.map((w, i) => `
      <div class="image-card" data-img-index="${i}">
        <div class="image-thumb-box">
          <img src="${w.src}" alt="${w.t}" loading="lazy" decoding="async"/>
          <span class="image-zoom-icon"><i class="fa-solid fa-expand"></i></span>
          <div class="image-hover-info">
            <h5 class="image-hover-title">${w.t}</h5>
            <span class="image-hover-sub">${w.sub || ''}</span>
          </div>
        </div>
      </div>
    `).join('');

    imagesContainer.querySelectorAll(".image-card").forEach(card => {
      card.addEventListener("click", () => {
        const idx = +card.dataset.imgIndex;
        openLightbox(filtered, idx);
      });
    });
  }

  renderImages("all");

  // فلاتر الصور
  document.querySelectorAll("[data-img-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-img-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderImages(btn.dataset.imgFilter);
    });
  });

  // مبدل الأقسام (كل الأعمال / فيديوهات / صور وإعلانات)
  document.querySelectorAll(".switch-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".switch-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.dataset.target;
      const vSec = q("videosSection");
      const dSec = q("designsSection");
      const sep = q("sectionSeparator");

      if (target === "all") {
        vSec && vSec.classList.remove("is-hidden");
        dSec && dSec.classList.remove("is-hidden");
        sep && sep.classList.remove("is-hidden");
      } else if (target === "videos") {
        vSec && vSec.classList.remove("is-hidden");
        dSec && dSec.classList.add("is-hidden");
        sep && sep.classList.add("is-hidden");
      } else if (target === "designs") {
        vSec && vSec.classList.add("is-hidden");
        dSec && dSec.classList.remove("is-hidden");
        sep && sep.classList.add("is-hidden");
      }
    });
  });

  setupLightboxEvents();
}

function openLightbox(list, index) {
  currentMediaList = list;
  currentMediaIndex = index;
  renderLightboxItem();
  const modal = q("lightboxModal");
  if (modal) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox() {
  const modal = q("lightboxModal");
  if (modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    const stage = q("lightboxStage");
    if (stage) stage.innerHTML = "";
  }
}

function renderLightboxItem() {
  if (!currentMediaList.length) return;
  const item = currentMediaList[currentMediaIndex];
  const stage = q("lightboxStage");
  if (!stage) return;

  const isVideo = item.type === "video" || item.c === "video";
  if (isVideo) {
    stage.innerHTML = `<video src="${item.src}" poster="${item.poster || item.src}" controls autoplay playsinline style="max-height:64vh;max-width:100%"></video>`;
  } else {
    stage.innerHTML = `<img src="${item.src}" alt="${item.t}" style="max-height:64vh;max-width:100%">`;
  }

  if (q("lightboxTitle")) q("lightboxTitle").textContent = item.t;
  if (q("lightboxSub")) q("lightboxSub").textContent = item.sub || '';
  if (q("lightboxBadge")) q("lightboxBadge").textContent = isVideo ? 'فيديو وتوثيق مرئي' : 'تصميم وإعلان';

  const orderBtn = q("lightboxOrderBtn");
  if (orderBtn) {
    const text = encodeURIComponent(`مرحباً جاردينيا A، أرغب في الاستفسار أو طلب تنفيذ عمل مشابه لـ (${item.t} - ${item.sub || ''})`);
    orderBtn.href = `${WA_LINK}?text=${text}`;
  }
}

function nextLightboxItem() {
  if (!currentMediaList.length) return;
  currentMediaIndex = (currentMediaIndex + 1) % currentMediaList.length;
  renderLightboxItem();
}

function prevLightboxItem() {
  if (!currentMediaList.length) return;
  currentMediaIndex = (currentMediaIndex - 1 + currentMediaList.length) % currentMediaList.length;
  renderLightboxItem();
}

function setupLightboxEvents() {
  const closeBtn = q("lightboxCloseBtn");
  const backdrop = q("lightboxBackdrop");
  const nextBtn = q("lightboxNextBtn");
  const prevBtn = q("lightboxPrevBtn");

  closeBtn && closeBtn.addEventListener("click", closeLightbox);
  backdrop && backdrop.addEventListener("click", closeLightbox);
  nextBtn && nextBtn.addEventListener("click", nextLightboxItem);
  prevBtn && prevBtn.addEventListener("click", prevLightboxItem);

  document.addEventListener("keydown", (e) => {
    const modal = q("lightboxModal");
    if (!modal || !modal.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") prevLightboxItem();
    if (e.key === "ArrowLeft") nextLightboxItem();
  });
}
document.addEventListener("DOMContentLoaded", () => {
  buildChrome(document.body.dataset.page || "");
  initModernGallery();

  const form = document.getElementById("bookForm");
  form && form.addEventListener("submit", async e => {
    e.preventDefault();
    const d = new FormData(form);
    
    // إرسال الحجز إلى جدول bookings المتوافق مع لوحة التحكم
    if (sbClient) {
      try {
        const { error } = await sbClient.from("bookings").insert([{
          full_name: d.get("name"),
          phone: d.get("phone"),
          service_type: d.get("service"),
          event_date: d.get("date") || null,
          notes: d.get("details") || ""
        }]);
        if (error) console.warn("Supabase booking error:", error.message);
      } catch (err) {
        console.warn("Error saving booking to Supabase:", err);
      }
    }

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
