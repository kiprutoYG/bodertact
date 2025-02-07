/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '350px',
      }
    },
    colors: {
      main: '#00236E',
      sec: '#545283',
      acc: '#f1edff'
    },
  },
  plugins: [],
}

