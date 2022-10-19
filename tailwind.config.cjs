/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        imgBackgr: "url('/background.png')",
        'gradient': 'linear-gradient(89.86deg, #9572FC 27.56%, #43E7AD 48.94%, #E1D55D 25.00%)',
        'gameGradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
    },
  },
  plugins: [],
}
