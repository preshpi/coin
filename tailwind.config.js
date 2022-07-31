module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // false or 'media'
  theme: {
    extend: { 
    },

    colors: {
      'middle': '#191D21',
      'light': '#EEEEEE',
      'white': '#FFFFFF',
      'red': '#EB1D36',
      'body': '#131619',
      'gray': '#4B5563',
      'black': '#090910',
      'rare': '#0B0D0F',
      'blue': '#4954EF',
      'grey': '#BCC1CA',
      'orange': '#F77E21',
      'green': '#3EC70B',
      'yellow': '#FEB139',
      'transparent':'transparent',
    },
    
 
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
