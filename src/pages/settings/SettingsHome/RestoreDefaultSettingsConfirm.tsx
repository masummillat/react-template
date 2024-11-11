import React from "react";
import SettingsIcon from "@assets/images/icons/Settings.svg?react";

interface RestoreDefaultSettingsConfirmProps {
  onClose: () => void;
  onConfirm: () => void;
}
const RestoreDefaultSettingsConfirm: React.FC<
  RestoreDefaultSettingsConfirmProps
> = ({ onClose, onConfirm }) => {
  return (
    <div className="p-4 text-center">
      <div className="w-10 h-10 mx-auto rounded-full text-[#00CD82] bg-[#DCFCE7] flex items-center justify-center">
        <SettingsIcon width={24} height={24} />
      </div>
      <h3 className="text-lg font-semibold my-2 text-[#1A202C] dark:text-white">
        Restore Default Settings
      </h3>
      <p className="text-sm text-[#4B5563] dark:text-white">
        Are you sure you want to reset all settings to their <br /> default
        values?
      </p>
      <div className="font-medium text-[#1A202C] dark:text-white flex justify-between gap-4 mt-8">
        <button
          onClick={onClose}
          className="block w-full rounded-lg border border-[#CCD0D0] py-[0.625rem] px-[1.125rem]"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="bg-[#00CD82] block w-full rounded-lg border border-[#00CD82] py-[0.625rem] px-[1.125rem]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default RestoreDefaultSettingsConfirm;
