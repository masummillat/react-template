import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface SleepBarProps {
  title: string;
  value: number;
  icon: React.ReactElement;
  color: string;
}

const SleepBar: React.FC<SleepBarProps> = ({
  title,
  value,
  icon,
  color = "#f0f0f0",
}) => {
  const [animatedValue, setAnimatedValue] = useState(0); // For animation

  // Trigger animation after component mounts
  useEffect(() => {
    const delay = 300; // Delay in ms before animation starts
    // const duration = 1000; // Duration of the animation

    const timeout = setTimeout(() => {
      setAnimatedValue(value);
    }, delay);

    return () => clearTimeout(timeout); // Cleanup the timeout on unmount
  }, [value]); // Re-run the effect when value changes
  return (
    <div className="flex gap-4">
      <div className="h-full flex justify-center items-center">
        <div className="bg-[#F2F2F2] rounded-full w-8 h-8 flex justify-center items-center">
          {icon}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>{title}</div>
          <div>{animatedValue}%</div>
        </div>
        <div
          className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
          role="progressbar"
          aria-valuenow={animatedValue}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* Progress bar with smooth animation */}
          <div
            className={clsx([
              `flex flex-col justify-center overflow-hidden text-xs text-white text-center whitespace-nowrap transition-[width] duration-[1000ms] ease-in-out`,
            ])}
            style={{ width: `${animatedValue}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SleepBar;
