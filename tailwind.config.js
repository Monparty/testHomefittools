/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#044394',
          50: '#eef5fd',
          100: '#d6e6fa',
          600: '#044394',
          700: '#053a7e',
          800: '#06305f',
          900: '#072546',
        },
        accent: {
          DEFAULT: '#FD5003',
          600: '#FD5003',
          700: '#e04602',
        },
      },
      fontFamily: {
        heading: ['Kanit', 'sans-serif'],
        body: ['Sarabun', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
