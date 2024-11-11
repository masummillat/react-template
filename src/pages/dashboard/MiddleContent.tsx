import React from "react";
import SleepSummaryCard from "./SleepSummaryCard";
import CheckupSchedules from "./CheckupSchudles";

const MiddleContent: React.FC = () => {
  return (
    <div className="grid gap-4">
      <SleepSummaryCard />
      <CheckupSchedules />
    </div>
  );
};
export default MiddleContent;
