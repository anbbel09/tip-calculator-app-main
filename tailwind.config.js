/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(172, 67%, 45%)',
        'veryDark': 'hsl(183, 100%, 15%)',
        'DarkGrayish': 'hsl(186, 14%, 43%)',
        'GrayishCyan': 'hsl(184, 14%, 56%)',
        'LightGrayish': 'hsl(185, 41%, 84%)',
        'VeryLight': 'hsl(189, 41%, 97%)',
        'White': 'hsl(0, 0%, 100%)'
      },
      spacing: {
        '96': '24rem',
      },
    },
  },
  plugins: [],
}

