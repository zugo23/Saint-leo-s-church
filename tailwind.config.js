module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        darkPaleSand: '#D4B98D',
        offWhite:"#FFFFF0"
      },

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};