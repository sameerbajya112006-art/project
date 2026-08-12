const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (!name || !email || !password || !confirmPassword) {
    showMessage('Please fill in all fields.', 'error');
    return;
  }

  if (password !== confirmPassword) {
    showMessage('Passwords do not match.', 'error');
    return;
  }

  showMessage('Registration successful! Welcome aboard.', 'success');
  form.reset();
});

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message ${type}`;
}
