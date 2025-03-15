/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e81938",
        secondary: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
