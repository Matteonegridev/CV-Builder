import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  extract,
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        primary: '#00487C',
        secondSubtext: '#717171',
      },
      fontFamily: {
        headings: 'Roboto Slab',
        paragraph: 'EB Garamond',
      },
    },
  },
  plugins: [fluid],
};
