// domElements.js
export function createDomElements() {
    // Create the main container
    document.body.className = 'bg-slate-300 flex justify-center items-center h-screen'
    const container = document.createElement('div');
    container.className = 'bg-slate-200 shadow-lg rounded-lg p-6 max-w-sm';
  
    // Create the title
    const title = document.createElement('h1');
    title.textContent = 'Password Generator';
    title.className = 'text-2xl font-bold text-gray-800 mb-4';
    container.appendChild(title);
  
    // Create the password input field
    const passwordField = document.createElement('input');
    passwordField.id = 'password';
    passwordField.type = 'text';
    passwordField.readOnly = true;
    passwordField.placeholder = 'Your password will appear here';
    passwordField.className = 'w-full p-2 mb-4 border rounded-lg text-center bg-gray-50';
    container.appendChild(passwordField);
  
    // Create the length label and input field
    const lengthWrapper = document.createElement('div');
    lengthWrapper.className = 'flex items-center justify-between mb-4';
  
    const lengthLabel = document.createElement('label');
    lengthLabel.htmlFor = 'length';
    lengthLabel.textContent = 'Password Length:';
    lengthLabel.className = 'text-gray-700';
    lengthWrapper.appendChild(lengthLabel);
  
    const lengthField = document.createElement('input');
    lengthField.id = 'length';
    lengthField.type = 'number';
    lengthField.min = 4;
    lengthField.max = 20;
    lengthField.value = 12;
    lengthField.className = 'w-16 p-1 border rounded-lg text-center';
    lengthWrapper.appendChild(lengthField);
  
    container.appendChild(lengthWrapper);
  
    // Create the generate button
    const generateButton = document.createElement('button');
    generateButton.id = 'generate';
    generateButton.textContent = 'Generate Password';
    generateButton.className = 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full';
    container.appendChild(generateButton);
  
    // Create the copy button
    const copyButton = document.createElement('button');
    copyButton.id = 'copy';
    copyButton.textContent = 'Copy Password';
    copyButton.className = 'bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-full mt-2';
    container.appendChild(copyButton);
  
    // Custom character options
    const optionsWrapper = document.createElement('div');
    optionsWrapper.className = 'mb-4 mt-6';
  
    const upperCaseWrapper = document.createElement('div');
    upperCaseWrapper.className = 'flex items-center mb-2';
    const upperCaseCheckbox = document.createElement('input');
    upperCaseCheckbox.type = 'checkbox';
    upperCaseCheckbox.checked = true;
    upperCaseCheckbox.className = 'mr-2';
    const upperCaseLabel = document.createElement('label');
    upperCaseLabel.textContent = 'Include Uppercase';
    upperCaseLabel.className = 'text-gray-700';
    upperCaseWrapper.appendChild(upperCaseCheckbox);
    upperCaseWrapper.appendChild(upperCaseLabel);
    optionsWrapper.appendChild(upperCaseWrapper);
  
    const lowerCaseWrapper = document.createElement('div');
    lowerCaseWrapper.className = 'flex items-center mb-2';
    const lowerCaseCheckbox = document.createElement('input');
    lowerCaseCheckbox.type = 'checkbox';
    lowerCaseCheckbox.checked = true;
    lowerCaseCheckbox.className = 'mr-2';
    const lowerCaseLabel = document.createElement('label');
    lowerCaseLabel.textContent = 'Include Lowercase';
    lowerCaseLabel.className = 'text-gray-700';
    lowerCaseWrapper.appendChild(lowerCaseCheckbox);
    lowerCaseWrapper.appendChild(lowerCaseLabel);
    optionsWrapper.appendChild(lowerCaseWrapper);
  
    const numbersWrapper = document.createElement('div');
    numbersWrapper.className = 'flex items-center mb-2';
    const numbersCheckbox = document.createElement('input');
    numbersCheckbox.type = 'checkbox';
    numbersCheckbox.checked = true;
    numbersCheckbox.className = 'mr-2';
    const numbersLabel = document.createElement('label');
    numbersLabel.textContent = 'Include Numbers';
    numbersLabel.className = 'text-gray-700';
    numbersWrapper.appendChild(numbersCheckbox);
    numbersWrapper.appendChild(numbersLabel);
    optionsWrapper.appendChild(numbersWrapper);
  
    const specialCharsWrapper = document.createElement('div');
    specialCharsWrapper.className = 'flex items-center mb-2';
    const specialCharsCheckbox = document.createElement('input');
    specialCharsCheckbox.type = 'checkbox';
    specialCharsCheckbox.checked = true;
    specialCharsCheckbox.className = 'mr-2';
    const specialCharsLabel = document.createElement('label');
    specialCharsLabel.textContent = 'Include Special Characters';
    specialCharsLabel.className = 'text-gray-700';
    specialCharsWrapper.appendChild(specialCharsCheckbox);
    specialCharsWrapper.appendChild(specialCharsLabel);
    optionsWrapper.appendChild(specialCharsWrapper);
  
    container.appendChild(optionsWrapper);
  
    return { container, passwordField, generateButton, copyButton, lengthField, upperCaseCheckbox, lowerCaseCheckbox, numbersCheckbox, specialCharsCheckbox };
  }
  