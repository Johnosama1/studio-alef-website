document.addEventListener('DOMContentLoaded', () => {

  /* ─── Scroll Animations ─── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ─── Contact Form ─── */
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('يرجى ملء جميع الحقول');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'جاري الإرسال...';
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.textContent = 'إرسال الرسالة';
      btn.disabled = false;
      successMsg.style.display = 'block';
      setTimeout(() => { successMsg.style.display = 'none'; }, 4000);
    }, 1200);
  });

  /* ─── Smooth Scroll for Nav Links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
