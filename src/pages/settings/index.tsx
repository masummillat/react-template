import React from "react";
import { Outlet } from "react-router-dom";

const SettingsRootPage: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SettingsRootPage;
