/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js'], // Adjust paths to your project files
  theme: {
    extend: {
      colors: {
        brand: '#1c3faa', // Add a custom brand color
      },
      spacing: {
        128: '32rem', // Add a custom spacing scale
      },
    },
  },
  plugins: [],
}

