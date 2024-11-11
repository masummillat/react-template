import React from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

const UpgradePage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Upgrade - cline</title>
      </Helmet>
      <Outlet />
    </div>
  );
};

export default UpgradePage;
