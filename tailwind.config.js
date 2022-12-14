/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#E1ECE1',
        secondary : '#424941',
        green : '#E1ECE1'
      }
    },
  },
  plugins: [],
}
