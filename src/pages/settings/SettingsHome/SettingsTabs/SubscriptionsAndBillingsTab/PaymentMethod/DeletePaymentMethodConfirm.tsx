import React from "react";
import InfoIcon from "@assets/images/icons/Info.svg?react";

interface DeletePaymentMethodConfirmProps {
  onClose: () => void;
  onConfirm: () => void;
}
const DeletePaymentMethodConfirm: React.FC<DeletePaymentMethodConfirmProps> = ({
  onClose,
  onConfirm,
}) => {
  return (
    <div className="p-4 text-center">
      <div className="w-10 h-10 mx-auto rounded-full text-[#00CD82] bg-[#FEE2E2] flex items-center justify-center">
        <InfoIcon width={24} height={24} />
      </div>
      <h3 className="text-xl font-semibold my-2 text-[#1A202C] dark:text-white">
        Delete confirmation
      </h3>
      <p className="text-base text-[#4B5563] dark:text-white">
        Are you sure you want to delete this <br /> payment method?
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
          className="bg-[#DC2626] block w-full rounded-lg border text-white border-[#DC2626] py-[0.625rem] px-[1.125rem]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DeletePaymentMethodConfirm;
