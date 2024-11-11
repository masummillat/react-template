import React, { useState } from "react";
import useOnClickOutside from "@src/hooks/useOnClickOutside";
import FontIcon from "@assets/images/icons/Font.svg?react";

const FontSizeDropdown: React.FC = () => {
  const [isOpen, setIOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIOpen(false);
  };
  const [ref] = useOnClickOutside(handleClose);

  return (
    <div className="relative rounded-full">
      <div
        style={{ minWidth: "32px" }}
        className="cursor-pointer"
        onClick={() => setIOpen(true)}
      >
        <FontIcon width={32} height={32} />
      </div>
      {isOpen && (
        <div
          style={{ boxShadow: "8px 16px 32px 0px #71809614" }}
          ref={ref}
          className="absolute px-4 pt-3 pb-2 rounded-xl border border-[#E9EAEC] dark:border-[#242427]   z-10  grid  top-12 right-0 drop-shadow-md bg-white dark:bg-cardBackground-dark w-[14.5rem]"
        >
          <h3 className="text-base font-semibold">Font Size</h3>
          <hr className="my-2 dark:border-[#242427] border-[#E9EAEC]" />
          <div className="flex flex-col gap-1">
            <button className="px-3 py-2 hover:bg-[#00CD82] flex items-center justify-start gap-2 rounded-lg hover:text-[#1A202C]">
              <FontIcon width={24} height={24} /> Regular
            </button>
            <button className="px-3 py-2 hover:bg-[#00CD82] flex items-center justify-start gap-2 rounded-lg hover:text-[#1A202C]">
              <FontIcon width={32} height={32} /> Medium
            </button>
            <button className="px-3 py-2 hover:bg-[#00CD82] flex items-center justify-start gap-2 rounded-lg hover:text-[#1A202C]">
              <FontIcon width={40} height={40} /> Large
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FontSizeDropdown;
