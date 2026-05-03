document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('#login-form');
  const notify = document.querySelector('#login-notice');

  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = loginForm.querySelector('#username').value.trim();
      const password = loginForm.querySelector('#password').value.trim();
      const role = loginForm.querySelector('#role').value;

      if (!username || !password || !role) {
        notify.className = 'form-notice error';
        notify.textContent = 'Παρακαλώ συμπληρώστε όλα τα πεδία για να συνεχίσετε';
        return;
      }

      notify.className = 'form-notice success';
      notify.textContent = `Σύνδεση επιτυχής ως ${role} - μπορείτε να συνεχίσετε με τις ενδεικτικές σελίδες`;
      setTimeout(() => {
        notify.textContent = '';
        notify.className = 'form-notice';
      }, 5000);
    });
  }
});
