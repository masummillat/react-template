import React, { useState } from "react";

interface SwitchButtonProps {
  onToggle: (value: boolean) => void;
  value: boolean;
  className?: string;
}
const SwitchButton: React.FC<SwitchButtonProps> = ({
  onToggle,
  value = false,
  className,
}) => {
  const [checked, setChecked] = useState(value);

  const handleToggle = () => {
    setChecked(!checked);
    if (onToggle) onToggle(!checked); // Call onToggle function if provided
  };

  return (
    <div
      className={`w-9 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        checked ? "bg-[#00CD82]" : "bg-[#F3F4F6] dark:bg-[#1D2025]"
      } ${className}`}
      onClick={handleToggle}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${
          checked ? "translate-x-[0.85rem]" : "-translate-x-[1px]"
        }`}
      ></div>
    </div>
  );
};

export default SwitchButton;
