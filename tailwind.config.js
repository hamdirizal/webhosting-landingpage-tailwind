/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Inter','ui-sans-serif', 'system-ui', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'monospace']
    },
    extend: {
      fontSize:{
        'xxs': '0.65rem'
      },
      colors:{
        brand:{
          1: "#0148ff"
        }
      }
    },
  },
  plugins: [],
}