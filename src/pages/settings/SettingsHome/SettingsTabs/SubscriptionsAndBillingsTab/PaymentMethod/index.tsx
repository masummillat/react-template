import React from "react";
import PlusIcon from "@assets/images/icons/Plus.svg?react";
import PaymentCard from "./PaymentCard";
import visa from "@assets/images/logos/visa.png";
import mastercard from "@assets/images/logos/master-card.png";
import CustomModal from "@src/components/CustomModal";
import DeletePaymentMethodConfirm from "./DeletePaymentMethodConfirm";

const PaymentMethod: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const openDeleteModal = (id: string) => {
    console.log(id);
    setOpen(true);
  };
  const closeDeleteModal = () => {
    setOpen(false);
  };

  const handleSetAsPrimary = (id: string) => {
    console.log(id);
  };

  return (
    <div className="border border-border-light dark:border-border-dark rounded-2xl dark:bg-cardBackground-dark">
      <div className="border-b border-border-light dark:border-border-dark flex flex-col sm:flex-row gap-4 justify-between items-baseline sm:items-center p-5">
        <div>
          <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-1">
            Payment method
          </h3>
          <p className="text-text-subbed dark:text-text-darkSubbed text-sm">
            Manage your saved payment cards for easy billing.
          </p>
        </div>
        <button
          onClick={openModal}
          className="font-medium w-full sm:w-fit justify-center text-text-primary dark:text-white dark:bg-cardBackground-dark2 flex gap-2 items-center border border-border-light dark:border-border-dark rounded-lg p-2  px-4"
        >
          <PlusIcon /> Add payment mothod
        </button>
      </div>

      <div className="p-5 grid gap-4">
        <PaymentCard
          id="1"
          handleSetAsPrimary={handleSetAsPrimary}
          onDelete={openDeleteModal}
          cardName="Visa"
          expireDate="02/2030"
          isPrimary
          lastFourDigits="4242"
          icon={visa}
        />
        <PaymentCard
          id="2"
          handleSetAsPrimary={handleSetAsPrimary}
          onDelete={openDeleteModal}
          cardName="Visa"
          expireDate="02/2030"
          isPrimary={false}
          lastFourDigits="4242"
          icon={mastercard}
        />
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        content={<div>Content</div>}
      />
      {/* delete payment method card */}
      <CustomModal
        isOpen={open}
        onClose={closeDeleteModal}
        content={
          <DeletePaymentMethodConfirm
            onConfirm={closeDeleteModal}
            onClose={closeDeleteModal}
          />
        }
      />
    </div>
  );
};

export default PaymentMethod;
