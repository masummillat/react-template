import ThemeSwitcher from "@components/ThemeSwitcher";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default Dashboard;
