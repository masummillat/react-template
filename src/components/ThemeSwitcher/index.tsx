import React, { useEffect } from "react";
import MoonIcon from "@assets/images/icons/Moon.svg?react";
import LightIcon from "@assets/images/icons/Light.svg?react";
import { useTheme } from "@src/providers/ThemeProvider";
import clsx from "clsx";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save to localStorage
  }, [theme]);

  return (
    <div className="flex gap-4">
      <button
        className={clsx(theme === "light" ? "text-[#00CD82]" : "")}
        onClick={() => toggleTheme("light")}
      >
        <LightIcon
          className={clsx(
            theme === "light" ? "bg-[#E6F5F0]" : "",
            "rounded-md"
          )}
          width={28}
          height={28}
        />
      </button>
      <button
        className={clsx(theme === "dark" ? "text-[#00CD82]" : "")}
        onClick={() => toggleTheme("dark")}
      >
        <MoonIcon
          className={clsx(theme === "dark" ? "bg-[#E6F5F0]" : "", "rounded-md")}
          width={28}
          height={28}
        />
      </button>
      {/* <button onClick={() => handleThemeChange("custom")}>Custom Mode</button> */}
    </div>
  );
};

export default ThemeSwitcher;
