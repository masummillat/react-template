import React from "react";
import Subscription from "./Subscription";
import PaymentMethod from "./PaymentMethod";
import InvoiceTableSection from "./InvoiceTableSection";

const SubscriptionsAndBillingsTab: React.FC = () => {
  return (
    <div className="grid gap-4 animate-slideUp">
      <Subscription />
      <PaymentMethod />
      <InvoiceTableSection />
    </div>
  );
};

export default SubscriptionsAndBillingsTab;
