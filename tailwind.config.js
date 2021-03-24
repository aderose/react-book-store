module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        0.75: '3px',
      },
      colors: {
        'dim-purple': '#766f8f',
        'strong-purple': '#3f2b96',
      },
      fontFamily: {
        'custom-font': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s',
        'fade-out': 'fadeOut 0.3s',
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      borderColor: ['hover', 'focus'],
    },
  },
  plugins: [require('tailwindcss-blend-mode')()],
};
