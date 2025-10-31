// header.js
// Handles hamburger toggle, dark mode, language selection/order actions

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const primaryNav = document.getElementById('primaryNav');
  const darkToggle = document.getElementById('darkToggle');
  const languageSelect = document.getElementById('language');
  const orderBtn = document.getElementById('orderBtn');
  const todayOffer = document.getElementById('todayOffer');

  // Restore theme from localStorage
  const savedTheme = localStorage.getItem('site-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(savedTheme);

  // Hamburger open/close
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    primaryNav.classList.toggle('open');
  });

  // Dark mode toggle
  darkToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('site-theme', next);
    darkToggle.setAttribute('aria-pressed', String(next === 'dark'));
  });

  // Language change (basic demo: store choice)
  languageSelect.addEventListener('change', (e) => {
    localStorage.setItem('site-lang', e.target.value);
    // In a real site: trigger i18n or redirect to language-specific pages
    console.log('Language changed to', e.target.value);
  });

  // Order button (demo)
  orderBtn.addEventListener('click', () => {
    // redirect to order page or open ordering modal
    window.location.href = '#order'; // replace with real ordering URL
  });

  // Example: highlight today's offer dynamically (simple)
  setTodayOffer('20% off on all pizzas today!');

  // helper functions
  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  function setTodayOffer(text) {
    if (!todayOffer) return;
    todayOffer.textContent = text;
    // optionally add aria-live for screen readers
    todayOffer.setAttribute('role', 'status');
  }
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const homeContent = document.querySelector(".home-content");
  const animatedText = document.getElementById("animatedText");
  const homeSection = document.querySelector(".home-section");
  const playVideoBtn = document.getElementById("playVideoBtn");
  const videoModal = document.getElementById("videoModal");
  const closeVideo = document.getElementById("closeVideo");
  const restaurantVideo = document.getElementById("restaurantVideo");

  // Fade-in animation
  setTimeout(() => {
    homeContent.classList.add("visible");
  }, 300);

  // Animated Text
  const phrases = ["Welcome", "Bon Appétit", "Enjoy Your Meal", "Taste the Perfection"];
  let index = 0;
  setInterval(() => {
    index = (index + 1) % phrases.length;
    animatedText.style.opacity = 0;
    setTimeout(() => {
      animatedText.textContent = phrases[index];
      animatedText.style.opacity = 1;
    }, 400);
  }, 3000);

  // Parallax effect
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    homeSection.style.backgroundPositionY = `${scrollY * 0.5}px`;
  });

  // Video Modal
  playVideoBtn.addEventListener("click", () => {
    videoModal.style.display = "flex";
    restaurantVideo.src += "&autoplay=1";
  });
  closeVideo.addEventListener("click", () => {
    videoModal.style.display = "none";
    restaurantVideo.src = restaurantVideo.src.replace("&autoplay=1", "");
  });
  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      videoModal.style.display = "none";
      restaurantVideo.src = restaurantVideo.src.replace("&autoplay=1", "");
    }
  });
});

// about.js
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-section");

  // Animation on scroll
  window.addEventListener("scroll", () => {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 150) {
      aboutSection.classList.add("visible");
    }
  });
});
// menu.js
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".menu-tab");
  const categories = document.querySelectorAll(".menu-category");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.dataset.category;
      categories.forEach(cat => {
        cat.classList.remove("active");
        if (cat.id === category) cat.classList.add("active");
      });
    });
  });
});


// Fade-in animation for chefs
const chefCards = document.querySelectorAll(".chef-card");

window.addEventListener("scroll", () => {
  chefCards.forEach(card => {
    const cardPos = card.getBoundingClientRect().top;
    const winHeight = window.innerHeight;
    if (cardPos < winHeight - 100) {
      card.classList.add("visible");
    }
  });
});

// ===== RESERVATION FORM =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservationForm");
  const message = document.getElementById("reservationMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name?.value || document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;

    message.style.display = "block";
    message.style.color = "#28a745";
    message.textContent = `✅ Thank you ${name}, your reserved a table for ${people} person in ${date} at ${time}.`;

    form.reset();

    setTimeout(() => {
      message.style.display = "none";
    }, 10000);
  });
});

// ===== SERVICES FADE-IN ANIMATION =====
document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card");

  const revealOnScroll = () => {
    serviceCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight - 100) {
        card.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// ===== GALLERY LIGHTBOX =====
document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = item.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});

// ===== BLOG SCROLL ANIMATION =====
const blogCards = document.querySelectorAll(".blog-card");

const revealOnScroll = () => {
  blogCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;
    if (cardTop < triggerPoint) {
      card.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== REVIEWS SCROLL ANIMATION =====
const reviewCards = document.querySelectorAll(".review-card");

const showReviewsOnScroll = () => {
  reviewCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;
    if (cardTop < triggerPoint) {
      card.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", showReviewsOnScroll);
showReviewsOnScroll();

// ===== REVIEW MODAL =====
const openReviewModal = document.getElementById("openReviewModal");
const closeReviewModal = document.getElementById("closeReviewModal");
const reviewModal = document.getElementById("reviewModal");

openReviewModal.addEventListener("click", () => {
  reviewModal.style.display = "flex";
});

closeReviewModal.addEventListener("click", () => {
  reviewModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === reviewModal) {
    reviewModal.style.display = "none";
  }
});

// ===== CONTACT FORM SUCCESS MESSAGE =====
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    alert("Thank you! Your message has been sent successfully.");
  });
}

// ===== TODAY'S OFFER ANIMATION =====
const offerCards = document.querySelectorAll(".offer-card");

function showOffersOnScroll() {
  const trigger = window.innerHeight * 0.85;
  offerCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOffersOnScroll);
showOffersOnScroll();

// ===== STATISTICS COUNTER ANIMATION =====
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function startCounters() {
  if (counterStarted) return;
  const statsSection = document.querySelector(".stats-section");
  const sectionPosition = statsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
    counterStarted = true;
    counters.forEach(counter => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200; // سرعة العدّ
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 15);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      updateCounter();
    });
  }
}

window.addEventListener("scroll", startCounters);

// ===== PERFORMANCE PROGRESS ANIMATION =====
function animateProgressBars() {
  const fills = document.querySelectorAll(".progress-fill");
  const section = document.querySelector(".performance");
  const sectionPosition = section.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
    fills.forEach(fill => {
      const percentage = fill.getAttribute("data-percentage");
      fill.style.width = percentage + "%";
    });
    window.removeEventListener("scroll", animateProgressBars);
  }
}

window.addEventListener("scroll", animateProgressBars);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletterForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input").value;
    
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`✅ Thank you for subscribing, ${email}!`);
    form.reset();
  });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-list a");

  function activateNavLink() {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 150; // تعديل الارتفاع حسب حجم الهيدر
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // استدعاء الدالة عند التمرير
  window.addEventListener("scroll", activateNavLink);

  // استدعاء أولي عند تحميل الصفحة
  activateNavLink();
});

// ===== LANGUAGE SWITCHER =====
document.addEventListener("DOMContentLoaded", () => {
  const languageSwitcher = document.getElementById("languageSwitcher");

  // النصوص المترجمة
  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      menu: "Menu",
      chefs: "Our Chefs",
      reservation: "Reservation",
      services: "Services",
      gallery: "Gallery",
      blog: "Blog",
      reviews: "Reviews",
      contact: "Contact Us",
      offer: "Today's Offer",
      order: "Statistics",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      menu: "Menu",
      chefs: "Nos Chefs",
      reservation: "Réservation",
      services: "Services",
      gallery: "Galerie",
      blog: "Blog",
      reviews: "Avis",
      contact: "Contactez-nous",
      offer: "Offre du jour",
      order: "Statistiques",
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      menu: "القائمة",
      chefs: "طهاتنا",
      reservation: "الحجز",
      services: "الخدمات",
      gallery: "المعرض",
      blog: "المدونة",
      reviews: "التقييمات",
      contact: "اتصل بنا",
      offer: "عرض اليوم",
      order: "الإحصائيات",
    },
  };

  function changeLanguage(lang) {
    document.querySelectorAll(".nav-list a").forEach(link => {
      const key = link.getAttribute("data-key");
      if (translations[lang][key]) {
        link.textContent = translations[lang][key];
      }
    });
  }

  // عند التبديل
  languageSwitcher.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem("selectedLanguage", selectedLang);
    changeLanguage(selectedLang);
  });

  // تحميل اللغة المختارة مسبقًا
  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  languageSwitcher.value = savedLang;
  changeLanguage(savedLang);
});

// ===== DATE & TIME =====
function updateDateTime() {
  const now = new Date();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // تنسيق التاريخ المطلوب
  const dateStr = `${dayName} ${day} ${month} ${year}`;
  const timeStr = `${hours}:${minutes}:${seconds}`;

  document.getElementById("current-date").textContent = dateStr;
  document.getElementById("current-time").textContent = timeStr;
}

// تحديث كل ثانية
setInterval(updateDateTime, 1000);
updateDateTime();

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.primary-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('open');
});