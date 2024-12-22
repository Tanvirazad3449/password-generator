// copyToClipboard.js
export function copyToClipboard(password) {
    navigator.clipboard.writeText(password)
      .then(() => {
        alert('Password copied to clipboard!');
      })
      .catch((err) => {
        console.error('Error copying text: ', err);
      });
  }
  