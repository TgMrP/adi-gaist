import { Config } from "tailwindcss";
export default <Config>{
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        adi: {
          100: "#E0B1CB",
          200: "#BE95C4",
          300: "#9F86C0",
          400: "#5E548E",
          500: "#231942",
        },
      },
    },
  },
  plugins: [],
};
