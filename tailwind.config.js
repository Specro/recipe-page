/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Young Serif', 'serif']
      },
      colors: {
        'stone-100': '#f3e6d8',
        'stone-150': '#e4ded8',
        'stone-600': '#5f574e',
        'stone-900': '#302d2c',
        'brown-800': '#854632',
        'rose-800': '#7B284F',
        'rose-50': '#FFF5FA'
      }
    },
  },
  plugins: [],
}

