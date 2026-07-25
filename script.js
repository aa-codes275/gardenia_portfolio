// Portfolio data
// Portfolio data
const portfolioItems = [ 
  
  // التعديل هنا: حطينا اسم الفيديو في الـ videoSrc والـ src سيبناها لغلاف الكرت برة (تقدر تسيبها كدة أو تحط اسم صورة للغلاف)
  { id: "3", title: "   Gardenia ", category: "concerts", type: "video", src: "hero-stage.jpg", videoSrc: "IMG_111171.MOV", desc: "إضاءة ومؤثرات " },

  { id: "1", title: "حفل زفاف ملكي", category: "weddings", type: "image", src: "event-wedding.jpg", videoSrc: "", desc: "تنسيق وقاعة فاخرة بالكامل" },
  { id: "2", title: "مؤتمر القمة 2025", category: "conferences", type: "image", src: "event-conference.jpg", videoSrc: "", desc: "إنتاج مسرحي وإدارة تقنية" },
  
  
  { id: "4", title: "إطلاق منتج فاخر", category: "exhibitions", type: "image", src: "event-launch.jpg", videoSrc: "", desc: "تجربة علامة تجارية متكاملة" },
  { id: "5", title: "حفل عشاء خاص", category: "weddings", type: "image", src: "event-gala.jpg", videoSrc: "", desc: "أجواء حميمية ساحرة" },
  { id: "6", title: "معرض دولي", category: "exhibitions", type: "image", src: "event-exhibition.jpg", videoSrc: "", desc: "تصميم أجنحة وإدارة كاملة" },
];

const grid = document.getElementById('portfolioGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';

function renderPortfolio(filter) {
  const filtered = filter === 'all' ? portfolioItems : portfolioItems.filter(i => i.category === filter);
  grid.innerHTML = '';
  filtered.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'portfolio-item reveal visible';
    el.style.transitionDelay = (idx * 0.05) + 's';
    const isVideo = item.type === 'video';
    el.innerHTML = `
      <img src="${item.src}" alt="${item.title}" loading="lazy" />
      <div class="portfolio-overlay"></div>
      <div class="portfolio-info">
        <div class="portfolio-meta">
          <i class="fas ${isVideo ? 'fa-video' : 'fa-image'}"></i>
          <span>${isVideo ? 'فيديو' : 'صور'}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
      ${isVideo ? `<div class="play-btn"><div class="play-circle"><i class="fas fa-play"></i></div></div>` : ''}
    `;
    el.addEventListener('click', () => openLightbox(item));
    grid.appendChild(el);
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderPortfolio(currentFilter);
  });
});

renderPortfolio('all');

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxMediaWrap = document.getElementById('lightboxMediaWrap');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxHint = document.getElementById('lightboxHint');

function openLightbox(item) {
  lightboxTitle.textContent = item.title;
  lightboxDesc.textContent = item.desc;
  if (item.type === 'video' && item.videoSrc) {
    lightboxMediaWrap.innerHTML = `<video src="${item.videoSrc}" controls autoplay style="width:100%;aspect-ratio:16/9;background:#000;display:block;"></video>`;
    lightboxHint.textContent = '';
  } else if (item.type === 'video' && !item.videoSrc) {
    lightboxMediaWrap.innerHTML = `<img src="${item.src}" alt="${item.title}" class="lightbox-media" />`;
    lightboxHint.textContent = 'ضع رابط الفيديو في خاصية videoSrc داخل ملف script.js لتشغيله هنا.';
  } else {
    lightboxMediaWrap.innerHTML = `<img src="${item.src}" alt="${item.title}" class="lightbox-media" />`;
    lightboxHint.textContent = '';
  }
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxMediaWrap.innerHTML = '';
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuBtn.innerHTML = isOpen ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
});
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Scroll reveal (IntersectionObserver)
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('span');
  p.className = 'particle';
  const size = 2 + Math.random() * 4;
  p.style.left = (Math.random() * 100) + '%';
  p.style.width = size + 'px';
  p.style.height = size + 'px';
  p.style.animationDuration = (8 + Math.random() * 10) + 's';
  p.style.animationDelay = (Math.random() * 8) + 's';
  particlesContainer.appendChild(p);
}

// Year
const year = new Date().getFullYear();
if (document.getElementById('year')) document.getElementById('year').textContent = year;

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
// تشغيل وتنسيق نافذة الحجز عبر الواتساب
const whatsappCardBtn = document.getElementById('whatsappCardBtn');
const whatsappModal = document.getElementById('whatsappModal');
const closeWhatsappModal = document.getElementById('closeWhatsappModal');
const whatsappForm = document.getElementById('whatsappForm');

// فتح النافذة عند الضغط على الكرت
if (whatsappCardBtn && whatsappModal) {
  whatsappCardBtn.addEventListener('click', (e) => {
    whatsappModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // قفل سكرول الصفحة الخلفية
  });
}

// إغلاق النافذة بالـ X
if (closeWhatsappModal) {
  closeWhatsappModal.addEventListener('click', () => {
    whatsappModal.style.display = 'none';
    document.body.style.overflow = ''; // إعادة السكرول
  });
}

// إغلاق النافذة لو ضغط برة الصندوق
if (whatsappModal) {
  whatsappModal.addEventListener('click', (e) => {
    if (e.target === whatsappModal) {
      whatsappModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
}

// معالجة الفورم وفتح الواتساب بالرسالة المنسقة
if (whatsappForm) {
  whatsappForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('waName').value.trim();
    const phone = document.getElementById('waPhone').value.trim();
    const details = document.getElementById('waDetails').value.trim();
    
    const whatsappNumber = "966573866384";
    
    // تنسيق شكل الرسالة يروح منظم ومكتوب بخط عريض على الواتساب
    const message = `السلام عليكم ورحمة الله وبركاته،%0A%0A` +
                    `*طلب حجز واستفسار جديد*%0A` +
                    `-------------------------%0A` +
                    `👤 *الاسم الكريم:* ${encodeURIComponent(name)}%0A` +
                    `📱 *رقم التواصل:* ${encodeURIComponent(phone)}%0A` +
                    `📝 *تفاصيل الحجز:*%0A${encodeURIComponent(details)}%0A` +
                    `-------------------------%0A` +
                    `تم الإرسال من الموقع الإلكتروني الخاص بكم.`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // قفل وتصفير الفورم
    whatsappModal.style.display = 'none';
    document.body.style.overflow = '';
    whatsappForm.reset();
  });
}
