/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'
    , "./src/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: [
      {
        booktheme: {
          primary: '#78290f',
          secondary: '#faf4d3',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        }
      },
      "cupcake"
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}
