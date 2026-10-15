/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        neutral: "#2b1968",
        primary: "#e56ab2",
        "primary-active": "#d060a1",
        "primary-content": "#480b22",
        secondary: "#8ccefd",
        "secondary-active": "#7fbbe6",
        "secondary-content": "#142d49",
        "base-100": "#08002e",
        "base-200": "#12093c",
        "base-300": "#231454",
      },
    },
  },
  plugins: [],
}