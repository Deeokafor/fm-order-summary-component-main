/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html, js}'],
  theme: {
    extend: {
      colors: {
        "os-pb": "hsl(225, 100%, 94%)",
        "os-bb": "hsl(245, 75%, 52%)",
        "os-vpb": "hsl(225, 100%, 98%)",
        "os-db": "hsl(224, 23%, 55%)",
        "os-dkb": "hsl(223, 47%, 23%)"
      }
    },
  },
  plugins: [],
  prefix: "tw-"
}
