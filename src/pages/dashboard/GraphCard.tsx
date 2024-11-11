import React from "react";
import LineChart from "@src/components/Charts/LineChart";
import clsx from "clsx";

interface GraphCardProps {
  title: string;
  value: number;
  icon: React.ReactElement;
  color: string;
  lowest?: number;
  highest?: number;
  data?: number[];
  unit?: string;
  className?: string;
  id: string;
}

const GraphCard: React.FC<GraphCardProps> = ({
  color,
  title,
  value,
  icon,
  highest,
  lowest,
  data = [],
  unit,
  className,
  id,
}) => {
  return (
    <div className={clsx(["grid gap-4 p-4 rounded-2xl", className])}>
      <div>{icon}</div>
      <div className="grid grid-cols-2">
        <div>
          <h5 className="text-sm text-[#1E293B] font-semibold text-nowrap dark:text-white">
            {title}
          </h5>
          <h4 className="text-[#1E293B] text-2xl font-semibold dark:text-white">
            {value}{" "}
            <span className="text-sm text-[#475569] font-normal dark:text-white">
              {unit}
            </span>
          </h4>
        </div>
        <div className="h-14 gap-2">
          <LineChart id={id} color={color} data={data} />
        </div>
      </div>
      {highest && lowest && (
        <div className="flex justify-between items-center">
          <p className="text-[0.625rem] leading-[0.875rem] text-[#475569] dark:text-white">
            Lowest:{" "}
            <span className="text-[#1A202C] dark:text-white">
              {lowest}
              {unit}
            </span>
          </p>
          <p className="text-[0.625rem] leading-[0.875rem] text-[#475569] dark:text-white">
            Highest:{" "}
            <span className="text-[#1A202C dark:text-white">
              {highest}
              {unit}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default GraphCard;
