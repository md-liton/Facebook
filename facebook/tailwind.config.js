/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        width: '1320px',
      },
      colors:{
        primary_color:'#1877F2',
        secondary_color:'#e5e5e5',
        bg_color:'#F0F2F5',
      }
    },
  },
  plugins: [],
}