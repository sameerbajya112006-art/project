const assert = require('assert');

function validateRegistration(name, email, password, confirmPassword) {
  if (!name || !email || !password || !confirmPassword) {
    return 'Please fill in all fields.';
  }

  if (password !== confirmPassword) {
    return 'Passwords do not match.';
  }

  return 'Registration successful! Welcome aboard.';
}

try {
  assert.strictEqual(
    validateRegistration('Alice', 'alice@example.com', '123456', '123456'),
    'Registration successful! Welcome aboard.'
  );

  assert.strictEqual(
    validateRegistration('Alice', 'alice@example.com', '123456', '654321'),
    'Passwords do not match.'
  );

  assert.strictEqual(
    validateRegistration('', 'alice@example.com', '123456', '123456'),
    'Please fill in all fields.'
  );

  console.log('All tests passed.');
} catch (error) {
  console.error('Test failed:', error.message);
  process.exit(1);
}
