import React, { useEffect, useState } from "react";
import ClockIcon from "@assets/images/icons/Clock.svg?react";
import MoonIcon from "@assets/images/icons/MoonFill.svg?react";

interface SleepClockProps {
  progress: number;
}

const SleepClock: React.FC<SleepClockProps> = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // // Handle progress change
  // const handleChangeProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setProgress(Number(e.target.value));
  // };

  // Array to map hour markers (00h, 03h, 06h, 09h, and dashes)
  const hourMarkers = [
    { label: "12", angle: 0, isNumber: true },
    { label: "-", angle: 30, isNumber: false },
    { label: "-", angle: 60, isNumber: false },
    { label: "3", angle: 90, isNumber: true },
    { label: "-", angle: 120, isNumber: false },
    { label: "-", angle: 150, isNumber: false },
    { label: "6", angle: 180, isNumber: true },
    { label: "-", angle: 210, isNumber: false },
    { label: "-", angle: 240, isNumber: false },
    { label: "9", angle: 270, isNumber: true },
    { label: "-", angle: 300, isNumber: false },
    { label: "-", angle: 330, isNumber: false },
  ];

  // Define the radius
  const radius = 40; // Circle radius
  const iconOffset = radius + 31; // Add some offset to position the icons just outside the circle

  // Trigger the animation after a delay when the component mounts
  useEffect(() => {
    const delay = 500; // Delay in ms before animation starts
    // const duration = 1000; // Duration of the animation

    const timeout = setTimeout(() => {
      // Animate progress
      setAnimatedProgress(progress);
    }, delay);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [progress]); // Trigger animation whenever progress changes

  // Calculate the angle for the progress indicator
  const progressAngle = (animatedProgress / 100) * 360;

  return (
    <div className="">
      <div className="relative w-40 h-40  rounded-full flex items-center justify-center">
        <svg
          className="absolute size-full -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-[#E9EAEC]  dark:text-[#2C2C30]"
            strokeWidth="4"
          ></circle>

          {/* Progress Circle */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            strokeWidth="4"
            strokeDasharray="100"
            strokeDashoffset={100 - animatedProgress} // Animating this
            strokeLinecap="round"
            className="stroke-current text-[#00CD82] relative transition-[stroke-dashoffset] duration-[1000ms] ease-in-out" // Smooth ease-in-out animation over 1 second
          />
        </svg>
        {/* Hour Markers */}
        {hourMarkers.map((marker, index) => (
          <div
            key={index}
            className="absolute  text-sm flex gap-[2px] justify-center items-center"
            style={{
              transform: ["3", "6", "9"].includes(marker.label)
                ? `rotate(${marker.angle}deg) translate(0, -54.5px)`
                : ["12"].includes(marker.label)
                ? `rotate(${marker.angle}deg) translate(0, -51.5px)`
                : `rotate(${marker.angle}deg) translate(0, -59.5px)`,

              writingMode: "vertical-lr", // Maintain the dash orientation
              transformOrigin: "center",
            }}
          >
            -{" "}
            {["12", "3", "6", "9"].includes(marker.label) && (
              <div
                style={{
                  rotate:
                    marker.label === "12"
                      ? "-90deg"
                      : marker.label === "6"
                      ? "90deg"
                      : `${marker.angle + 90}deg`,
                }}
              >
                {marker.label}
              </div>
            )}
          </div>
        ))}

        {/* Clock center */}
        <div className="absolute  text-[1.5rem] font-medium">
          {(0.24 * progress).toFixed(1)}hr
        </div>

        {/* Icon at 00h */}
        <div
          className="absolute"
          style={{
            transform: `rotate(0deg) translate(0, -${iconOffset}px)`,
            transformOrigin: "center",
          }}
        >
          <MoonIcon className="w-[0.9rem] h-[0.9rem]" />
        </div>

        {/* Icon at the end of the progress circle */}
        <div
          className="absolute"
          style={{
            transform: `rotate(${progressAngle}deg) translate(-4px, -${iconOffset}px)`,
            transformOrigin: "center",
          }}
        >
          <ClockIcon
            style={{ rotate: `${360 - progressAngle}deg` }}
            className="w-[0.9rem] h-[0.9rem]"
          />
        </div>
      </div>

      {/* Range Input for Progress */}
      {/* <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleChangeProgress}
        className="mt-4"
      /> */}

      {/* Progress Display */}
      {/* <p className="mt-2">Progress: {progress}%</p> */}
    </div>
  );
};

export default SleepClock;
