document.addEventListener('DOMContentLoaded', function () {
  
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const form = document.getElementById('signupForm');
  const msg = document.getElementById('formMessage');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();

      if (!name || !email) {
        msg.textContent = 'Please enter name and a valid email.';
        msg.style.color = 'crimson';
        return;
      }

      msg.style.color = 'green';
      msg.textContent = `Thanks ${name}! You've been added to our newsletter.`;
      form.reset();
    });
  }
});
