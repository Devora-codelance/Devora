// ------------------------------------------------- //
// ===== THEME TOGGLE =====
const toggleTheme = document.getElementById('toggle-theme');
const themeIcon = toggleTheme.querySelector('i');

toggleTheme.onclick = () => {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
};

// ------------------------------------------------- //
// ===== BACK TO TOP BUTTON =====
const toTop = document.getElementById('to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ------------------------------------------------- //
// ===== ANIMATE SKILLS SECTION =====
const skillsSection = document.querySelector('.skills');

window.addEventListener('scroll', () => {
  if (!skillsSection) return; // تأكد أن القسم موجود
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    skillsSection.classList.add('visible');
  }
});

// ------------------------------------------------- //
// ===== ACTIVE NAVIGATION LINK ON SCROLL =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// ------------------------------------------------- //
// ===== FAQ TOGGLE =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  if (question) {
    question.addEventListener('click', () => {
      item.classList.toggle('active');
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });
    });
  }
});

// ------------------------------------------------- //
// ===== MENU TOGGLE (Mobile) =====
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navLinksMobile = document.querySelectorAll('.navbar ul li a');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active'); // يحول الزر إلى X
  navbar.classList.toggle('active');     // إظهار / إخفاء القائمة
});

// عند الضغط على أي رابط داخل القائمة تُغلق
navLinksMobile.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});
