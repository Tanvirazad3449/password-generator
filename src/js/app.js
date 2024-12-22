// /src/js/app.js
import '../styles.css';  // Import Tailwind CSS
import { generatePassword } from './generatePassword.js';
import { createDomElements } from './domElements.js';
import { copyToClipboard } from './copyToClipboard.js';

// Initialize the app
const { container, passwordField, generateButton, copyButton, lengthField, upperCaseCheckbox, lowerCaseCheckbox, numbersCheckbox, specialCharsCheckbox, footer } = createDomElements();

// Append the container to the body
document.body.appendChild(container);
document.body.appendChild(footer);

// Generate password logic
generateButton.addEventListener('click', () => {
  const length = parseInt(lengthField.value) || 12;
  const password = generatePassword(length, upperCaseCheckbox.checked, lowerCaseCheckbox.checked, numbersCheckbox.checked, specialCharsCheckbox.checked);
  passwordField.value = password;
});

// Copy password logic
copyButton.addEventListener('click', () => {
  copyToClipboard(passwordField.value);
});
