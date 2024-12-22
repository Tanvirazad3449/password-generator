// generatePassword.js
export function generatePassword(length, upperCase, lowerCase, numbers, specialChars) {
    let chars = '';
  
    if (upperCase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowerCase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) chars += '0123456789';
    if (specialChars) chars += '!@#$%^&*()_+[]{}<>?';
  
    if (chars === '') return ''; // Ensure at least one character set is selected
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }
  