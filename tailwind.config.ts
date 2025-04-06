/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",   // Light background
        foreground: "#111111",   // Dark text
        border: "#e5e7eb",       // Light border (gray-200)
        ring: "#000000",         // For outline ring if needed
      },
      fontFamily: {
        heading: ["Funnel Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};