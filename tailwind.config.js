/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#1e1e2f",
        "secondary-bg": "#2a2a3b",
        "primary-text": "#e0e0e0",
        "secondary-text": "#b0b0b0",
        "accent-1": "#007bff",
        "accent-2": "#ff4081",
        "border-divider": "#3a3a4b",
      },
    },
  },
  plugins: [],
};
