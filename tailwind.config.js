/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#141d55",
        secondary: {
          1: "rgb(12,207,240)",
          2: "rgba(12,207,240,0.15)",
          3: "rgba(12,207,240,0.12)",
          4: "rgba(12,207,240,0.08)",
        },
        accent: "#FFBB04",
        "light-white": "rgba(255,255,255,0.3)",
        "light-blue": "#2E526B",
        turquoise: {
          1: "#0ccff0",
          2: "#dbf8fd",
          3: "#caf5fc",
          
        },
      },
    },
  },
  plugins: [],
};
