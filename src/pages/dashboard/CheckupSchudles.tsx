import { getCurrentWeek } from "@src/utils/time";
import React from "react";
import { isMobile } from "react-device-detect";
import TimeCircleIcon from "@assets/images/icons/TimeCircle.svg?react";
import doc1 from "@assets/images/doc1.png";
import clsx from "clsx";
import { DateTime } from "luxon";

const CheckupSchedules: React.FC = () => {
  return (
    <div className="grid gap-6 rounded-2xl p-6 bg-cardBackground-light dark:bg-cardBackground-dark">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-lg">Checkup Schedules</h3>
        <button className="text-xs">See more</button>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-5 text-[#1A202C] dark:text-white">
        {getCurrentWeek(isMobile ? 4 : 7).map((value, index) => (
          <div
            key={index}
            className={clsx([
              "text-center text-sm border border-[#CCD0D0] dark:border-white grid justify-center items-center gap-2 rounded-full p-2 py-6",
              DateTime.now().toFormat("d") === value.date &&
                "bg-[#FF7373] border-[#FF7373] dark:border-[#FF7373] text-white",
            ])}
          >
            <div>{value.day}</div> <div>{value.date}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[1, 2].map((schudle, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1D2025] p-4 rounded-2xl flex gap-4"
          >
            <img src={doc1} alt="Dr. John Copper" />
            <div className="grid flex-1">
              <div>
                <div>Dr. John Cooper</div>
                <div className="text-[#FF7272]">Dental Checkup</div>
              </div>
              <div className="flex gap-2 items-center">
                <TimeCircleIcon width={16} height={16} />{" "}
                <div>10.00-11.00am</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckupSchedules;
