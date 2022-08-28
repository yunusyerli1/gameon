/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackButton: '#1c1c1d',
        textTitle: '#2b2b2b',
        textPrimary:'#3a3a3a'
      },
    },
  },
  plugins: [],
}
