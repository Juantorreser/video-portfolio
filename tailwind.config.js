/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: '#e83636', 
        sec: '#732323', 
        ter: '#3A2425',
      },
    },
  },
  plugins: [],
}

