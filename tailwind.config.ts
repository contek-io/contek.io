import flowbite from 'flowbite-react/tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {},
    screens: {
      mobile: '375px',
      tablet: '768px',
      laptop: '992px',
      desktop: '1440px',
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), flowbite.plugin()],
};
export default config;
