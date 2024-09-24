import React, { useEffect } from "react";
import MoonIcon from "@assets/images/icons/Moon.svg?react";
import LightIcon from "@assets/images/icons/Light.svg?react";
import { useTheme } from "@src/providers/ThemeProvider";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save to localStorage
  }, [theme]);

  return (
    <div className="flex gap-4">
      <button onClick={() => toggleTheme("light")}>
        <LightIcon width={28} height={28} />
      </button>
      <button onClick={() => toggleTheme("dark")}>
        <MoonIcon width={28} height={28} />
      </button>
      {/* <button onClick={() => handleThemeChange("custom")}>Custom Mode</button> */}
    </div>
  );
};

export default ThemeSwitcher;
