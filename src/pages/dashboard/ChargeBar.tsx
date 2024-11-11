import React from "react";

interface ChargeBarProps {
  chargePercentage: number;
}

const ChargeBar: React.FC<ChargeBarProps> = ({ chargePercentage }) => {
  return (
    <div className="w-full bg-[#E9EAEC] h-8 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full flex justify-center items-center text-left font-semibold text-[#1A202C]"
        style={{
          width: `${chargePercentage}%`,
          backgroundColor: "#C8C9F8",
        }}
      >
        {chargePercentage}%
      </div>
    </div>
  );
};

export default ChargeBar;
