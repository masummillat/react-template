import { User } from "@auth0/auth0-spa-js";
import React from "react";

import LeftNav from "../Navs/LeftNav";
import TopNav from "../Navs/TopNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: User;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  user,
}) => {
  return (
    <div className="h-dvh flex">
      <LeftNav />
      <div className="flex-1 h-full">
        <TopNav user={user} />
        <div className="flex-1 px-6 py-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
