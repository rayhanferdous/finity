/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1208px",
        "2xl": "1600px",
      },
      fontFamily: {
        CircularStd: ["CircularStd", "sans-serif"],
      },
      colors: {
        primary: "#258AFF",
        secondary: "#FFD166",
        heading: "#1D293F",
        "light-gray": "#7C8087",
      },
      fontWeight: {
        book: 350,
      },
    },
  },
  plugins: [],
};
