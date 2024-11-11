import { User } from "@auth0/auth0-spa-js";
import React, { useState } from "react";

import LeftNav from "../Navs/LeftNav";
import TopNav from "../Navs/TopNav";
import useNetworkStatus from "@src/hooks/useNetworkStatus";
import OfflineMessage from "../OfflineMessage";
import Breadcrumbs from "../Breadcrumbs";

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: User;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  user,
}) => {
  const isOnline = useNetworkStatus();
  const [retry, setRetry] = useState(false);
  const handleRetry = () => {
    // Logic to recheck connection or reload the page
    setRetry(!retry); // Toggle to force component re-render if needed
  };

  return (
    <div className="h-dvh flex  animate-fadeIn">
      <LeftNav />
      <div className="flex-1 h-full flex flex-col">
        <TopNav user={user} />
        <div className="sm:hidden p-4 px-6 border-b border-border-light dark:border-border-dark">
          <Breadcrumbs />
        </div>
        {isOnline ? (
          <div className="flex-1 px-6 py-4 overflow-y-auto h-full">
            {children}
          </div>
        ) : (
          <OfflineMessage onRetry={handleRetry} />
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
