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
        primary: '#daff6f',
        secondary: '#a8aeff',
        tertiary: '#e6e6fa',
        black: '#161616',
        subtext: '#d3d3d3',
        secondSubtext: '#717171',
        secondaryAccent: '#CDD0ED',
        primaryAccent: '#EFFFC3',
      },
      fontFamily: {
        headings: 'Roboto Slab',
        paragraph: 'EB Garamond',
      },
    },
  },
  plugins: [fluid],
};
