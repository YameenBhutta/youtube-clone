/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      width: {
        '12': '12%',
        '88': '88%',
        
      },
    },
  },
  plugins: [],
}