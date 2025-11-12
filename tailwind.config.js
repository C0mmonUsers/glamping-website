/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['"Righteous"', 'sans-serif'],
        noto: ['"Noto Sans JP"', 'sans-serif'],
        kanit: ['"Kanit"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },

      colors: {
        cream: '#fdfbf7',
        olive: '#6d7325',
        footer: '#2c2b2a',
      },

      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeInDown: { '0%': { opacity: 0, transform: 'translateY(-20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeInUp: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },

      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeInDown: 'fadeInDown 1s ease-out forwards',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
