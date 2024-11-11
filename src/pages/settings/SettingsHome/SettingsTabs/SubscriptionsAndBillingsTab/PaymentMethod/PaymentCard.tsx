import React from "react";
import Trash2Icon from "@assets/images/icons/Trash2.svg?react";
import Tag from "@src/components/Tag";

interface PaymentCardProps {
  id: string;
  cardName: string;
  lastFourDigits: string;
  expireDate: string;
  isPrimary: boolean;
  icon: string;
  onDelete: (id: string) => void;
  handleSetAsPrimary: (id: string) => void;
}
const PaymentCard: React.FC<PaymentCardProps> = ({
  id,
  cardName,
  lastFourDigits,
  expireDate,
  isPrimary,
  icon,
  onDelete,
  handleSetAsPrimary,
}) => {
  return (
    <div
      className="border border-border-light dark:border-border-dark rounded-2xl dark:bg-cardBackground-dark2 p-5 flex justify-between items-center"
      style={{
        borderWidth: isPrimary ? "2px" : "1px",
        borderColor: isPrimary ? "#00CD82" : "",
      }}
    >
      <div className="flex gap-4 items-center">
        <img
          src={icon}
          alt={cardName}
          width={46}
          height={32}
          className="object-cover object-center rounded-md"
        />
        <div className="grid gap-1">
          <div className="flex gap-2 items-center">
            <h5 className="text-sm font-medium">{`${cardName} ending in ${lastFourDigits}`}</h5>
            <Tag
              backgroundColor="#F0F9FF"
              color="#0369A1"
              borderColor="#BAE6FD"
              className="cursor-pointer"
            >
              Edit
            </Tag>
          </div>
          <p>Expire {expireDate}</p>
          <div className="flex items-center gap-2 font-medium ">
            {isPrimary ? (
              <p className="text-[#9CA3AF]">Primary</p>
            ) : (
              <button
                onClick={() => handleSetAsPrimary(id)}
                className="text-[#0072DE]"
              >
                Set as primary
              </button>
            )}
            <Trash2Icon
              className="cursor-pointer"
              onClick={() => onDelete(id)}
            />
          </div>
        </div>
      </div>
      <div
        className="border border-border-light dark:bg-white dark:border-[#D1D5DB] rounded-full p-2"
        style={{ borderColor: isPrimary ? "#00CD82" : "" }}
      >
        <div
          className="bg-transparent w-2 h-2 rounded-full"
          style={{ backgroundColor: isPrimary ? "#00CD82" : "" }}
        />
      </div>
    </div>
  );
};

export default PaymentCard;
