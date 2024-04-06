import type { Config } from 'tailwindcss';
import { appConfig } from './config/app';

const config: Config = {
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens:appConfig.screens,
    extend: {
      colors: appConfig.colors,
      backgroundImage:{
        'sidebar':"url('/images/darkLogo.svg')"
      },
      fontFamily:{
      generalSans:["GeneralSans"],
    }
    },
  },
};

export default config;
