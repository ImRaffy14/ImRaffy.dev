/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      height: {
        '96': '24rem',
        '90': '20rem', 
      },

      width: {
        '96': '29rem', 
      },
      fontFamily:{
        secularOne:['Secular One','sans-serif'],
        russoOne:['Russo One', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
}

