const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(item => observer.observe(item));

document.querySelectorAll('.accordion details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('.accordion details').forEach(other => {
      if (other !== detail) other.open = false;
    });
  });
});

const bookingForm = document.querySelector('#booking');
const formMessage = document.querySelector('#formMessage');

bookingForm?.addEventListener('submit', event => {
  event.preventDefault();
  formMessage.textContent = 'Заявка отправлена. Мы свяжемся с вами в ближайшее время ✨';
  bookingForm.reset();
});
