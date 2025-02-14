/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors : {
        "primary-white" : "#eaeaea",
        "primary-red-one" : "#8b0101",
        "primary-red-two" : "#580000",
        "primary-red-hati" : "#180000",
        "darknes" : "#000000"
      },
      fontFamily: {
        "strom" : "storm"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

