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
        blue: {
          800: "#BA68C8",
          900: "#8E24AA"
        },
        gray: {
          900: "#388E3C",
          100: "#A5D6A7"
        },
        pink: {
          800: "#FBC02D",
          500: "#FFF176"
        }
      }
    },
  },
  plugins: [],
}