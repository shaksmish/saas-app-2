/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './index.html',
  ],
  theme: {
    extend: {
      colors: {
        "primary-01": "#49DEFF",
        "primary-02": "#4FFFDF",
        "primary-03": "#303030",
        "primary-04": "#ffffff",
        "secondary-01": "#4E4E4E",
        "secondary-02": "#DEDEDE",
        "secondary-03": "#F4F4F4",
        "secondary-04": "#F9F9F9",
      },
    },
    fontFamily: {
      "sans": ["Jost", "sans-serif"],
      "serif": ["Open Sans", "serif"],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {  
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
    },
    
  },
  plugins: [],
}
}

