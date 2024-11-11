import React from "react";
import { CheckoutViewType } from ".";
import { useNavigate } from "react-router-dom";

interface BillingFormProps {
  cb: (view: CheckoutViewType) => void;
}
const BillingForm: React.FC<BillingFormProps> = ({ cb }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}> {"< "}Back</button>
      <h1> billing form</h1>
      <button onClick={() => cb(CheckoutViewType.success)}>Success</button>
      <br />
      <button onClick={() => cb(CheckoutViewType.failure)}>Failure</button>
    </div>
  );
};

export default BillingForm;
