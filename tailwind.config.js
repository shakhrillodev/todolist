/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "out": '12px 12px 16px 0 rgba(200, 255, 250, 0.5) inset, -8px -8px 12px 0 rgba(0, 0, 0, .25) inset',
        "in": 'inset 12px 12px 16px 0 rgba(0, 0, 0, 0.25), inset -8px -8px 12px 0 rgba(255, 255, 255, 0.3)',
        "hover": "2px 2px 16px 0 rgba(255, 255, 255, 0.5) inset, -2px -2px 12px 0 rgba(0, 0, 0, .25) inset"
      }
    },
  },
  plugins: [],
}