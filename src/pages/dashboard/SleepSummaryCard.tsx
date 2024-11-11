import SleepBar from "@src/components/SleepBar";
import SleepClock from "@src/components/SleepClock";
import React from "react";
import MoonIcon from "@assets/images/icons/Moon.svg?react";
import CloudIcon from "@assets/images/icons/Cloud.svg?react";
import SunIcon from "@assets/images/icons/Light.svg?react";

const SleepSummaryCard: React.FC = () => {
  return (
    <div className="grid gap-8 rounded-2xl p-6 bg-cardBackground-light dark:bg-cardBackground-dark">
      <div className="flex  gap-8 flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="text-lg font-semibold">Sleep Time Summary</div>
        <div className="py-[0.375rem] px-3  text-[0.75rem] rounded-md bg-[#D5F6E5] flex gap-3 items-center h-full">
          <div className="text-[0.75rem] font-normal text-[#475569]">
            From: <span className="font-medium text-[#1E293B]">11.00</span>
            <span>pm</span>
          </div>
          <div className="border border-[#CCD0D0] h-full" />
          <div className="text-[0.75rem] font-normal text-[#475569]">
            To: <span className="font-medium text-[#1E293B]">7.00</span>
            <span className="font-medium text-[#1E293B]">am</span>
          </div>
        </div>
      </div>
      <div className="flex  gap-8 flex-col sm:flex-row">
        <SleepClock progress={39} />
        <div className="grid gap-4 flex-1">
          <SleepBar
            icon={
              <MoonIcon fill="#68BDC7" color="#68BDC7" width={20} height={20} />
            }
            color={"#68BDC7"}
            title="Deep Sleep"
            value={65}
          />
          <SleepBar
            icon={
              <CloudIcon
                fill="#FFA0A2"
                color="#FFA0A2"
                width={20}
                height={20}
              />
            }
            color={"#FFA0A2"}
            title="Light Sleep"
            value={25}
          />
          <SleepBar
            icon={
              <SunIcon fill="#6D73FF" color="#6D73FF" width={20} height={20} />
            }
            title="Awake Sleep"
            value={10}
            color={"#6D73FF"}
          />
        </div>
      </div>
    </div>
  );
};
export default SleepSummaryCard;
