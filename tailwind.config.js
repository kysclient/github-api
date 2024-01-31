/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        "main-accent": "rgb(var(--main-accent) / <alpha-value>)",
        "transparent-white": "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
