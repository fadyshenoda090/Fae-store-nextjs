/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        darkText: "#1b2223",
        whiteText: "#f4fefd",
        whiteBg: "#f4fefd",
        drakBg: "#1b2223",
        lighterBg: "#3a4f50",
        mintText: "#69DA6AFF",
        mintBg: "#69DA6AFF",
        warningText: "#eed202",
        textDanger: "#ff0000",
      }
    },
  },
  plugins: [],
};
