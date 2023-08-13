/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero_pattern: "url('./src/assets/background.svg')",
      },
      fontFamily: {
        body: [],
      },
    },
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
