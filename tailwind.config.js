/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6", // Blue
          dark: "#60A5FA", // Lighter blue for dark mode
        },
        background: {
          light: "#FFFFFF",
          dark: "#1F2937",
        },
        cardBackground: {
          light: "#F4F4F6",
          dark: "#0E1218",
        },
        text: {
          light: "#1F2937",
          dark: "#F3F4F6",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, scaleY: 0 },
          "100%": { opacity: 1, scaleY: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
