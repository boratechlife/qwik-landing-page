/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 1: '#217BF4', 2: '#0A093D', 3: '#2F2C4A', 4: '#E5F0FD' },
        washed: { 1: '#2B2B39', 2: '#656464', 3: '#8c8c8c', 4: '#4A4A56' },
        yellowish: '#FFAF2E',
      },
    },
  },
  plugins: [],
};
