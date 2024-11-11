/** @type {import('tailwindcss').Config} */

const generateGrid = (size) => {
  const gridColumn = {};
  const gridTemplateColumns = {};
  const gridRow = {};
  const gridTemplateRows = {};
  const gridRowStart = {};
  const gridRowEnd = {};
  const gridColumnStart = {};
  const gridColumnEnd = {};
  for (let i = 1; i <= size; i++) {
    gridRow[`span-${i}`] = `span ${i} / span ${i}`;
    gridColumn[`span-${i}`] = `span ${i} / span ${i}`;
    gridTemplateColumns[i] = `repeat(${i}, minmax(0, 1fr))`;
    gridTemplateRows[i] = `repeat(${i}, minmax(0, 1fr))`;
    gridRowStart[i] = `${i}`;
    gridRowEnd[i] = `${i}`;
    gridColumnStart[i] = `${i}`;
    gridColumnEnd[i] = `${i}`;
  }
  return {
    gridColumn,
    gridTemplateColumns,
    gridRow,
    gridTemplateRows,
    gridRowStart,
    gridRowEnd,
    gridColumnStart,
    gridColumnEnd,
  };
};

export default {
  darkMode: "class", // or 'media'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...generateGrid(24),
      colors: {
        primary: {
          light: "#00CD82", // Blue
          dark: "#60A5FA", // Lighter blue for dark mode
        },
        background: {
          light: "#FFFFFF",
          dark: "#1F2937",
        },
        cardBackground: {
          light: "#F4F4F6",
          dark: "#0E1218",
          dark2: "#1D2025",
        },
        text: {
          primary: "#1A202C",
          subbed: "#4B5563",
          darkSubbed: "#E0E9E5",
        },
        border: {
          dark: "#242427",
          light: "#CCD0D0",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, scaleY: 0 },
          "100%": { opacity: 1, scaleY: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(10%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 500ms ease-in-out",
        slideUp: "slideUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
