// Sticky header
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');
const mobileNav = document.getElementById('mobileNav');
navToggle.addEventListener('click', () => mobileNav.classList.add('open'));
navClose.addEventListener('click', () => mobileNav.classList.remove('open'));
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Booking form
const form = document.getElementById('bookingForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  if (!name || !phone) {
    status.textContent = 'Пожалуйста, заполните имя и телефон.';
    status.style.color = '#d45c4a';
    return;
  }
  status.style.color = '#d45c4a';
  status.textContent = 'Спасибо! Мы свяжемся с вами в течение дня.';
  form.reset();
});
