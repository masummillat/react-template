import React from "react";
import GraphCard from "./GraphCard";
import HeartIcon from "@assets/images/icons/Heart.svg?react";
import BloodIcon from "@assets/images/icons/Blood.svg?react";
import WalkingIcon from "@assets/images/icons/Walking.svg?react";
import FireIcon from "@assets/images/icons/Fire.svg?react";

const heartRateData = [
  50, 50, 50, 50, 200, 200, 40, 40, 300, 300, 300, 300, 150, 80, 120, 90, 200,
  200, 200, 150,
];
const bloodPressureData = [
  50, 50, 50, 50, 200, 200, 40, 40, 300, 300, 300, 300, 150, 80, 120, 90, 200,
  200, 200, 150,
];
const stepCountData = [
  50, 50, 100, 100, 200, 200, 40, 40, 300, 300, 300, 300, 150, 80, 120, 90, 200,
  200, 200, 150,
];
const caloriesBurnedData = [
  200, 200, 40, 40, 300, 300, 300, 300, 150, 80, 120, 90, 200, 200, 200, 150,
  50, 50, 50, 50,
];

const DashboardGraphs: React.FC = () => {
  const sortedHeartRateData = heartRateData.sort((a, b) => a - b);
  const lowestHeartRate = sortedHeartRateData[0];
  const highestHeartRate = sortedHeartRateData[sortedHeartRateData.length - 1];
  return (
    <div className="grid gap-4">
      {/* Heart Rate */}
      <GraphCard
        id="heart-rate-chart"
        color="#37C390"
        className="bg-[#D5F6EC] dark:bg-cardBackground-dark"
        data={heartRateData}
        icon={
          <HeartIcon fill="#68BDC7" color="#68BDC7" width={20} height={20} />
        }
        title="Heart Rate"
        value={95}
        unit="bpm"
        highest={highestHeartRate}
        lowest={lowestHeartRate}
      />
      {/* Blood Pressure */}
      <GraphCard
        id="blood-pressure-chart"
        color="#F43F5E"
        className="bg-[#D5F6EC] dark:bg-cardBackground-dark"
        data={bloodPressureData}
        icon={
          <BloodIcon fill="#F43F5E" color="#F43F5E" width={20} height={20} />
        }
        title="Blood Pressure"
        value={121}
        unit="mmHg"
      />
      {/* Step Count */}
      <GraphCard
        id="step-count-chart"
        color="#A855F7"
        className="bg-[#EBEBFF] dark:bg-cardBackground-dark"
        data={stepCountData}
        icon={
          <WalkingIcon fill="#A855F7" color="#A855F7" width={20} height={20} />
        }
        title="Step Count"
        value={1475}
        unit="steps"
      />
      {/* Calories Burned */}
      <GraphCard
        id="calories-burned-chart"
        color="#F59E0B"
        className="bg-[#FFF6EC] dark:bg-cardBackground-dark"
        data={caloriesBurnedData}
        icon={
          <FireIcon fill="#F59E0B" color="#F59E0B" width={20} height={20} />
        }
        title="Calories Burned"
        value={400}
        unit="kcal"
      />
    </div>
  );
};

export default DashboardGraphs;
