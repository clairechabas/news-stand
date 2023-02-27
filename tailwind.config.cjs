/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        whiteish: '#FFFDFA',
        darkish: '#00001A',
        gunmetal: '#5E607A',
        vermillion: '#F15D51',
        silver: '#C5C6CE',
        yellow: '#E9AA52',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
