import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
      },
      fontFamily: {
        montserrat: ["Montserrat", "Inter", "sans-serif"],
      },
      backgroundImage: {
        main: "radial-gradient(transparent, #071023ff 70%)",
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwind-scrollbar")],
};
