import React from "react";
import BatteryIcon from "@assets/images/icons/Battery.svg?react";
import ChargeBar from "./ChargeBar";

const DeviceStatus: React.FC = () => {
  return (
    <div className="grid gap-4 rounded-2xl p-6 bg-cardBackground-light dark:bg-cardBackground-dark">
      <h2 className="font-medium">Device Status</h2>
      <div className="flex items-center gap-4">
        <div className="py-[6px] px-3 rounded-md bg-[#D5F6E5] inline-block">
          <div className="text-2xl font-semibold text-[#1A202C]">
            5<sub className="text-xs text-[#475569] font-normal">/5</sub>
          </div>
        </div>
        <div>
          <h3>Good</h3>
          <div className="text-sm text-[#475569] dark:text-white">
            Device Health
          </div>
        </div>
      </div>
      <hr />
      <div className="flex gap-1 items-center">
        <BatteryIcon width={36} height={36} />
        <div className="text-sm text-[#1A202C] font-semibold dark:text-white">
          Battery
        </div>
      </div>
      <ChargeBar chargePercentage={75} />
      <div className="text-sm text-[#475569] dark:text-white">
        Remaining hours: :{" "}
        <span className="text-[#1A202C] font-medium dark:text-white">
          7 days 40 mins
        </span>
      </div>
    </div>
  );
};

export default DeviceStatus;
