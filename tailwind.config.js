module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "sunny-blue": "#1E5067",
        "sunny-yellow": "#FFD300",
        "sunny-grey": "#8C8B91",
        "sunny-white": "#FFFBF8",
        "sunny-pink": "#FF7362",
        "sunny-green": "#25584F",
        "sunny-green-light": "#90D4C5",
      },
      backgroundImage: {
        "desktop-header": "url('./images/desktop/image-header.jpg')",
        "desktop-apple": "url('./images/desktop/image-graphic-design.jpg')",
        "desktop-orange": "url('./images/desktop/image-gallery-orange.jpg')",
        "mobile-header": "url('./images/mobile/image-header.jpg')",
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    },
    fontFamily: {
      Poppins: ['Poppins', "sans-serif"]
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}