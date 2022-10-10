/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter'],
      },

      content: {
        'earth': 'url("../images/Earth.png")',
        'location': 'url("../images/location.png")',
      },
  
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
