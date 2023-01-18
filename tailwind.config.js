/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 2px 25px",
      },
      dropShadow: {
        "3xl": "0 0 3px",
        "2xl": "0 0 2px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2.5s ease-in-out infinite",
      },
      colors: {
        darkbg: "#fff",
      },
      spacing: {
        15: "3.75rem",
        1.5: "0.35rem",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "920px",
        // => @media (min-width: 992px) { ... }

        xl: "1200px",
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
};
