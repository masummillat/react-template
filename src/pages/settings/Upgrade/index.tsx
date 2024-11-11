import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Upgrade: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="grid gap-4">
      <button className="w-fit" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <Outlet />
    </div>
  );
};

export default Upgrade;
