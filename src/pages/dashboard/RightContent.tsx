import React from "react";
import MedicationList from "./MedicationLlist";
import DeviceStatus from "./DeviceStatus";

const RightContent: React.FC = () => {
  return (
    <div className="grid gap-4">
      <MedicationList />
      <DeviceStatus />
    </div>
  );
};

export default RightContent;
