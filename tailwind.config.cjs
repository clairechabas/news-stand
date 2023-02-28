/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      base: ['16px', '26px'],
      body: ['16px', '26px'],
      xs: ['18px', '24px'],
      sm: ['20px', '24px'],
      md: ['32px', '32px'],
      lg: ['40px', '40px'],
      xl: ['56px', '56px'],
    },
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
