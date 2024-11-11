import React from "react";
import SubscriptionCard from "./SubscriptionCard";

interface AnnuallyTabProps {
  checkoutUrl?: string;
}
const AnnuallyTab: React.FC<AnnuallyTabProps> = ({
  checkoutUrl = "/upgrade/checkout",
}) => {
  return (
    <div className="flex flex-col gap-8 sm:flex-row">
      <SubscriptionCard
        checkoutUrl={checkoutUrl}
        id="ix_3r20jkljoqer03c"
        title="Cline AI Companion"
        subtitle="AI companion for managing your care"
        price={20}
        type="annual"
        features={[
          "All features from Cline Basic",
          "Activate all Cline AI features",
          "Access to customer support",
          "Easy and quick upgrade to Pro",
        ]}
      />
      <SubscriptionCard
        checkoutUrl={checkoutUrl}
        id="ie_3r_345xdjoqer03c"
        title="Cline Protect"
        subtitle="AI Companion + 24/7 monitoring service"
        price={50}
        type="annual"
        isPopular
        features={[
          "All features from Basic & AI companion",
          "24/7 fall detection monitoring service",
          "Unlimited customer support",
          "Get first access to new features",
        ]}
      />
    </div>
  );
};
export default AnnuallyTab;
