/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'customFont': ['"Custom Font"', "sans-serif"],
      },
      colors: {
        bgcolor: 'grey',
        themecolor: '#09d6bb',
        sidebgcolor: '#0e1722',
        textcolor: '#ffffff',
        iconbgcolor: '#202647',
        navcolor: '#808080f4',
      },
      keyframes: {
        'img-animation': {
          '0%': {
            opacity: '0',
            transform: 'scale(1.05) translateY(-100%)',
          },
          '4%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
          '20%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
          '24%': {
            opacity: '0',
            transform: 'scale(1.05) translateY(100%)',
          },
          '25%': {
            opacity: '0',
            transform: 'scale(1.05) translateY(-100%)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(1.05) translateY(-100%)',
          },
        },
        'fadeInOut': {
          '0%, 15%': { opacity: 0 },
          '20%, 45%': { opacity: 1 },
          '55%, 80%': { opacity: 1 },
          '85%, 100%': { opacity: 0 },
        },
        'popOut': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.4)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'img-animation': 'img-animation 25s ease-out infinite',
        'pop-out': 'popOut 1.5s ease-in forwards',
        fadeInOut1: 'fadeInOut 12s infinite ease-in-out',
        fadeInOut2: 'fadeInOut 12s infinite ease-in-out 4s', 
        fadeInOut3: 'fadeInOut 12s infinite ease-in-out 8s', 
      },
    },
  },
  variants: {},
  plugins: [],
}
