/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#0F1214',
      'white': '#FFFFFF',
      'orange': '#ED7138',
      'orange-accent': '#FF8D58',
      'gray': '#979EA2',
      'blue-violet': '#7B72FE'
    },
    container: {
      center: true,
      screens: {
        m: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1410px',
      }
    },
    fontFamily: {
      'sans': ['GolosText', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}