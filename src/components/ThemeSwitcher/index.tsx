import React, { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save to localStorage
  }, [theme]);

  return (
    <div className="flex gap-4">
      <button onClick={() => handleThemeChange("light")}>Light</button>
      <button onClick={() => handleThemeChange("dark")}>Dark</button>
      {/* <button onClick={() => handleThemeChange("custom")}>Custom Mode</button> */}
    </div>
  );
};

export default ThemeSwitcher;
