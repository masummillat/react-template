import React, { useState } from "react";
import BillingForm from "./BillingForm";
import CheckoutSuccess from "./CheckoutSuccess";
import CheckoutFailure from "./CheckoutFailure";

export enum CheckoutViewType {
  billing = "billing",
  success = "success",
  failure = "failure",
}
const CheckoutPage: React.FC = () => {
  const [view, setView] = useState<CheckoutViewType>(CheckoutViewType.billing);

  const getView = (v: CheckoutViewType) => {
    const viewMap = new Map([
      [CheckoutViewType.billing, <BillingForm cb={setView} />],
      [CheckoutViewType.success, <CheckoutSuccess />],
      [CheckoutViewType.failure, <CheckoutFailure />],
    ]);
    return viewMap.get(v);
  };

  return <div>{getView(view)}</div>;
};

export default CheckoutPage;
