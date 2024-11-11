import CustomModal from "@src/components/CustomModal";
import React, { useState } from "react";
import RestoreDefaultSettingsConfirm from "./RestoreDefaultSettingsConfirm";
import SettingsTabs from "./SettingsTabs";

const SettingsHomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleConfirmRestoreDefault = () => {
    setIsOpen(false);
  };
  return (
    <div className="grid gap-4 mt-5 sm:mt-0">
      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between border border-[#CCD0D0] dark:border-[#242427] dark:bg-cardBackground-dark p-4 rounded-2xl">
        <div className="">
          <h4 className="mb-1 font-semibold text-[1.25rem] leading-6 text-[#1A202C] dark:text-white">
            Default Settings
          </h4>
          <p className="text-base text-[#4B5563] dark:text-text-darkSubbed ">
            Not sure about your changes? Click 'Set Default' to reset everything
            back to its original settings.
          </p>
        </div>
        <button
          onClick={handleOpen}
          className="px-5 py-3 w-full sm:w-fit mt-4 sm:mt-0 rounded-lg bg-[#00CD82] text-[#1A202C] text-nowrap"
        >
          Set Default
        </button>
      </div>
      <SettingsTabs />

      <CustomModal
        isOpen={isOpen}
        onClose={handleClose}
        content={
          <RestoreDefaultSettingsConfirm
            onClose={handleClose}
            onConfirm={handleConfirmRestoreDefault}
          />
        }
      />
    </div>
  );
};

export default SettingsHomePage;
