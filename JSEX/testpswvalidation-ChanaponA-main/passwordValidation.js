// Write your student id, firstname, and lastname in a single line comment here
function isPasswordValid(password) {
  // Check if password is undefined or null
  if (password === undefined || password === null) {
      return false;
  }

  // Check password length
  if (password.length < 8) {
      return false;
  }

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
      return false;
  }

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
      return false;
  }

  // Check for at least one digit
  if (!/\d/.test(password)) {
      return false;
  }

  // Check for at least one special character: @, #, $, %, ^, &, *, !
  if (!/[@#$%^&*!]/.test(password)) {
      return false;
  }

  // All requirements are met
  return true;
}

// Examples
console.log(isPasswordValid(undefined)); // false
console.log(isPasswordValid(null)); // false
console.log(isPasswordValid('')); // false
console.log(isPasswordValid('ab!12')); // false
console.log(isPasswordValid('1234abcd')); // false
console.log(isPasswordValid('Zky543#@')); // true
console.log(isPasswordValid('1#@!*aB^5')); // true
console.log(isPasswordValid('%5Ko&$pp')); // true
console.log(isPasswordValid('12345abcxyZ$')); // true

