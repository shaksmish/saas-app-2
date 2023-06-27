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
      // lineHeight: {
      //   'lh-display': '5.828 rem',
      //   'lh-h1': '4.995 rem',
      //   'lh-h2': '3.33 rem',
      //   'lh-h3': '3.161 rem',
      //   'lh-h4': '2.432 rem',
      //   'lh-h5': '2.027 rem',
      //   'lh-h6': '1.621 rem',
      // },
    },
    fontFamily: {
      "sans": ["Jost", "sans-serif"],
      "serif": ["Open Sans", "serif"],
    },
    // fontSize: {
    //   'display-text':'4.375 rem',
    //   'h1': '3.75 rem',
    //   'h2': '2.5 rem',
    //   'h3': '2.188 rem',
    //   'h4': '1.875 rem',
    //   'h5': '1.563 rem',
    //   'h6': '1.25 rem',
    // },
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

