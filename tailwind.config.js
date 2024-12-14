/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#5f0027'
      },
      height: {
        full: '100vh'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}