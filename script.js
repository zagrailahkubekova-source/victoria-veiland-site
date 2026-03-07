const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggleBtn && nav) {
  toggleBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(open));
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.querySelector('.lightbox-close');

if (lightbox && lightboxImage) {
  document.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-full');
      lightboxImage.src = src;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
}

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('formMessage');
    if (msg) msg.textContent = 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.';
    bookingForm.reset();
  });
}
