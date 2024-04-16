/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#1C9F49",
        "lite-green": "#1DB954",
        background: "#121313",
        "blue-gray": "#2F4A5D",
        blue: "#2E3F8D",
      },
    },
  },
  plugins: [],
};
