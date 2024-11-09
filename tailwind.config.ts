import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #1f4037, #99f2c8)',
      },
      colors: {
        forestGreen: '#2b2f33',
        lightMint: '#e0f7f1',
        warmGray: '#b1b1b1',
        offWhite: '#f8f9fa',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px'
      },
    },
  },
  plugins: [],
};
export default config;
