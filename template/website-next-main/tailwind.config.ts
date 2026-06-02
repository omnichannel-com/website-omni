import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'icon-sm': '16px', // Small screens
        'icon-md': '20px', // Medium screens
        'icon-lg': '24px', // Large screens
      },
      dropShadow: {
        '3xl': '0 5px 5px rgba(0, 0, 0, 1)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      objectPosition: {
        inherit: "inherit",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      container: {
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          md: '3.5rem',
          lg: '10rem',
          xl: '10rem',
          '2xl': '10rem',
        },
      },
      screens: {
        'landscape': { 'raw': '(orientation: landscape)' },
        xxl: "1852px",
        "h-sm": { raw: "(min-height: 100px)" },
        "h-md": { raw: "(min-height: 368px)" },
        "h-lg": { raw: "(min-height: 424px)" },
        "h-xl": { raw: "(min-height: 680px)" },
      },
      colors: {
        primary: "#F45615",
        primaryColorOne: "#1F3138",
        primaryColor: "#232426",
        secondaryColor: "#F45615",
        LightOrange: "#F7931F",
        DarkGray: "#202021",
        OffWhite: "#F8F3EE",
        borderClr: "#C8C8C9",
        backgroundClr: 'var(--bg-color)',
        backgroundClrOp: 'var(--bg-color-op)',
        textClr: 'var(--text-color)',
        cardClr: 'var(--card-color)',
        primaryClr: 'var(--primary-color)',
        secondaryClr: 'var(--secondary-color)',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#F45615",
            },
          },
        },
      },
    }),
    require("tailwind-scrollbar"),
    function ({ addUtilities }: { addUtilities: Function }) {
      const newObjectUtilities = {
        ".object-inherit": {
          "object-fit": "inherit",
        },
      };
      addUtilities(newObjectUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
