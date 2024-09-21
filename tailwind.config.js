/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define custom colors for light mode, dark mode, and the third mode
        lightBackground: "#ffffff",
        darkBackground: "#050505",
        customModeBackground: "#f0f0f0",
        // Define text colors or other properties as needed
        lightText: "#000000",
        darkText: "#ffffff",
        customModeText: "#333333",
      },
    },
  },
  plugins: [],
};
