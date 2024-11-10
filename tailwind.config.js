/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': [ 
        'Poppins',
        'Roboto'
      ]
    },
    extend: {
      colors: {
        'agency-red': '#c8102e',
        'anomaly-blue': '#0047BB',
        'reality-yellow': '#fcad30'
      },
    },
  },
  plugins: [],
}

