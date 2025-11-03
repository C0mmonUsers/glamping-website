/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['"Righteous"', 'sans-serif'], // Hidden Heaven заголовок
        noto: ['"Noto Sans JP"', 'sans-serif'], // основной текст
        kanit: ['"Kanit"', 'sans-serif'], //Текст для кнопок і т.д
        bebas: ['"Bebas Neue"', 'sans-serif'], // Циферки
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeInDown: 'fadeInDown 1s ease-out forwards',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
       keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeInDown: { '0%': { opacity: 0, transform: 'translateY(-20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeInUp: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
