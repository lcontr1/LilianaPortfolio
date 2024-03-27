/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      container: {
        padding: {
          DEFAULT: '5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        sienna: '#752305',
        rust: '#AC420A',
        butterscotch: '#CE8A37',
        sunset: '#F8CA7C',
        jasmine: '#FFDE90',
        lightblue: '#76A1CD',
        steelblue: '#4E79A5',
        blue: '#1B3A6B',
        darkblue: '#0D1D3C',
        black: '#060b1f'

      },
    },
  },
  plugins: [],
}

