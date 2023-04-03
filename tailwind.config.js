/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      lineHeight: {
        "1": "4vw"
      },
      fontSize: {
        sz: '4vw',
        szsm: '2vw',
        szmd: '3vw'
      },
     
    },
  },
  plugins: [],
}
