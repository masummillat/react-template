import React, { useState } from "react";
import NotificationIcon from "@assets/images/icons/Notification.svg?react";
import clsx from "clsx";
import useOnClickOutside from "@src/hooks/useOnClickOutside";
import HeartIcon from "@assets/images/icons/Heart.svg?react";
import BloodIcon from "@assets/images/icons/Blood.svg?react";
import WalkingIcon from "@assets/images/icons/Walking.svg?react";
import BatteryIcon from "@assets/images/icons/Battery.svg?react";
import { Link } from "react-router-dom";
import { getRelativeTime } from "@src/utils/time";

const iconDictionary: Record<string, React.ReactElement> = {
  heart: (
    <div className=" rounded-full bg-[#FFE4E6] dark:bg-[#1D2025] w-12 h-12 flex justify-center items-center flex-none ">
      <HeartIcon color="#F43F5E" stroke="#F43F5E" width={24} height={24} />
    </div>
  ),
  blood: (
    <div className=" rounded-full bg-[#D5F6EC] dark:bg-[#1D2025] w-12 h-12 flex justify-center items-center flex-none ">
      <BloodIcon color="#37C390" stroke="#37C390" width={24} height={24} />
    </div>
  ),
  step: (
    <div className=" rounded-full bg-[#E9EAEC] dark:bg-[#1D2025] w-12 h-12 flex justify-center items-center flex-none ">
      <WalkingIcon width={24} height={24} />
    </div>
  ),
  battery: (
    <div className=" rounded-full bg-[#FFF6CC] dark:bg-[#1D2025] w-12 h-12 flex justify-center items-center flex-none ">
      <BatteryIcon color="#EEC10D" stroke="#EEC10D" width={24} height={24} />
    </div>
  ),
};
const notifications = [
  {
    type: "heart",
    title: "Heart Rate Alert",
    description:
      "Your heart rate is higher/lower than usual. Please rest and monitor, or contact your doctor if needed.",
    timeStamp: new Date().toISOString(),
  },
  {
    type: "blood",
    title: "Time to Check Blood Pressure",
    description:
      "It’s time for your regular blood pressure check. Click here to view your last readings.",
    timeStamp: new Date(2011, 9, 1, 15, 12, 1).toISOString(),
  },
  {
    type: "step",
    title: "Step Goal Achieved",
    description:
      "Great job! You’ve reached your step goal for today. Keep up the good work!",
    timeStamp: new Date(2021, 9, 1, 14, 12, 1).toISOString(),
  },
  {
    type: "battery",
    title: "Low Battery",
    description:
      "Your Cline device battery is running low. Please charge it soon to stay connected.",
    timeStamp: new Date(2024, 9, 1, 14, 12, 33).toISOString(),
  },
  {
    type: "heart",
    title: "Heart Rate Alert",
    description:
      "Your heart rate is higher/lower than usual. Please rest and monitor, or contact your doctor if needed.",
    timeStamp: new Date(2024, 9, 1, 14, 12, 33).toISOString(),
  },
  {
    type: "blood",
    title: "Time to Check Blood Pressure",
    description:
      "It’s time for your regular blood pressure check. Click here to view your last readings.",
    timeStamp: new Date(2024, 9, 1, 14, 12, 33).toISOString(),
  },
  {
    type: "step",
    title: "Step Goal Achieved",
    description:
      "Great job! You’ve reached your step goal for today. Keep up the good work!",
    timeStamp: new Date(2024, 9, 1, 14, 12, 33).toISOString(),
  },
  {
    type: "battery",
    title: "Low Battery",
    description:
      "Your Cline device battery is running low. Please charge it soon to stay connected.",
    timeStamp: new Date(2024, 9, 1, 14, 12, 33).toISOString(),
  },
];
const NotificationDropdown: React.FC = () => {
  const [isOpen, setIOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIOpen(false);
  };
  const [ref] = useOnClickOutside(handleClose);

  return (
    <div className="relative ">
      <button
        ref={ref}
        onClick={() => setIOpen(true)}
        className="relative notification"
      >
        <NotificationIcon
          width={32}
          height={32}
          className={clsx(["relative cursor-pointer"])}
        />
        <span className="inline-block ml-2 bg-red-500 rounded-full w-[0.625rem] h-[0.625rem] absolute top-[0.35rem] right-[0.3rem] border-[1.5px]  border-white"></span>
      </button>
      {isOpen && (
        <div
          style={{ boxShadow: "4px 8px 50px 0px #4A55681F" }}
          ref={ref}
          className={clsx([
            "fixed rounded-xl border border-[#E9EAEC] dark:border-[#242427]   z-10  flex flex-col  right-5  top-20 sm:right-20 drop-shadow-md bg-white dark:bg-cardBackground-dark w-[95vw] sm:w-[60vw] md:w-[26vw] max-h-[calc(100dvh-10rem)]",
          ])}
        >
          <div className="p-8 text-lg font-semibold">Notifications</div>
          <hr className=" dark:border-[#242427]" />
          <ul className="flex-1 overflow-y-auto">
            {notifications?.map((notifications, index) => (
              <li key={index} className="px-8 py-2 flex gap-4">
                {iconDictionary[notifications.type]}
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <h3 className="text-base font-semibold">
                      {notifications?.title}
                    </h3>
                    <p className="text-sm font-medium text-pretty text-[#475569] dark:text-white">
                      {notifications?.description}
                    </p>
                  </div>
                  <p>{getRelativeTime(notifications?.timeStamp)}</p>
                </div>
              </li>
            ))}
          </ul>
          <hr className=" dark:border-[#242427] " />
          <Link
            to="/notifications"
            className="p-8 text-sm font-medium text-[#194BFB]"
          >
            See all notifications
          </Link>
        </div>
      )}
    </div>
  );
};
export default NotificationDropdown;
