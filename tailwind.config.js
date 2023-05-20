/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray_01: '#EDF6F9',
        gray_02: '#D8DFE1',
        salmon_01: '#FFDDD2',
        salmon_02: '#E29578',
        green_01: '#83C5BE',
        green_02: '#006D77',
        text_white: '#FFFFFF',
        text_gray_01: '#AAAAAA',
        text_gray_02: '#666666',
        text_black: '#222222',
      },
      fontFamily: {
        suite: 'SUITE',
      },
    },
  },
  plugins: [],
};
