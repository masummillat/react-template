import { PopoverContentProps } from "@reactour/tour";
import React from "react";

interface TourBodyProps extends PopoverContentProps {
  title: string;
  content: string;
}
const TourBody: React.FC<TourBodyProps> = ({
  title,
  content,
  setIsOpen,
  setCurrentStep,
  currentStep,
}) => {
  return (
    <div className="bg-white dark:bg-cardBackground-dark dark:text-white p-5 rounded-lg">
      <h4 className="text-lg font-semibold mb-2 text-[#111827] dark:text-white">
        {title}
      </h4>
      <p className="text-sm mb-4 text-[#4B5563] dark:text-white">{content}</p>

      <div className="flex justify-between items-center mt-4">
        <div className="text-[#374151] dark:text-white text-sm font-medium">
          Done?{" "}
          <button onClick={() => setIsOpen(false)} className="underline  ">
            Click here to skip
          </button>
        </div>
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="bg-[#00CD82] text-sm font-medium px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TourBody;
