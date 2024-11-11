import clsx from "clsx";
import React from "react";
import CheckIcon from "@assets/images/icons/Check.svg?react";
import { Link } from "react-router-dom";

export interface SubscriptionCardProps {
  title?: string;
  subtitle?: string;
  price?: number;
  type?: string;
  features: string[];
  isPopular?: boolean;
  checkoutUrl?: string;
  id: string;
}
const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  id,
  title,
  subtitle,
  price,
  type,
  features,
  isPopular = false,
  checkoutUrl = "/upgrade/checkout",
}) => {
  return (
    <div
      className={clsx([
        `grid gap-6 border-2 border-transparent rounded-3xl p-8 relative bg-[#F8FAFB] dark:bg-cardBackground-dark`,
      ])}
      style={{ borderColor: isPopular ? "#00CD82" : "transparent" }}
    >
      {/* popular badge */}
      {isPopular && (
        <div className="absolute -top-5 right-[15%] text-[#00CD82] bg-[#002B2B] py-[6px] px-3 rounded-full rotate-[8deg]">
          🔥 Most Popular
        </div>
      )}
      {/* popular badge end */}
      <div className="grid gap-1">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-lg text-text-subbed dark:text-text-darkSubbed">
          {subtitle}
        </p>
      </div>
      <div className="flex gap-1">
        <h1 className="text-5xl text-[#002B2B] dark:text-white -tracking-[2%]">
          ${price}
        </h1>

        <p className="text-lg text-text-subbed dark:text-text-darkSubbed self-end">
          /{type}
        </p>
      </div>
      <ul className="">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-2 items-center mb-4">
            <CheckIcon width={24} height={24} color="#00CD82" /> {feature}
          </li>
        ))}
      </ul>
      <Link
        to={`${checkoutUrl}?planId=${id}`}
        className={clsx([
          "w-full p-3 px-5 rounded-lg text-text-primary text-center",
          isPopular ? "bg-[#00CD82]" : "bg-white border border-[#CCD0D0]",
        ])}
      >
        Get Started
      </Link>
    </div>
  );
};

export default SubscriptionCard;
