/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        color1: "#0e345a",
        color2: "#ffffff",
        color3: "#f2f2f2",
        color4: "#dc3134",
      },
      fontFamily: {
        RobotoSlab: ['Roboto Slab', 'serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
