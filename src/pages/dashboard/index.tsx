import DashboardGraphs from "./Graphs";
import MiddleContent from "./MiddleContent";
import RightContent from "./RightContent";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <main className="animate-fadeIn grid gap-6">
      <Helmet>
        <title>Dashboard - Cline</title>
      </Helmet>
      <div>
        <h3 className="text-2xl font-semibold text-[#002B2B] dark:text-white mb-1">
          Good Morning, Adrian
        </h3>
        <p className="text-[#4B5563] dark:text-white">
          Monday, 2 September, 2024
        </p>
      </div>
      <div className="grid grid-cols-24 gap-4">
        <div className="col-span-24 sm:col-span-5 ">
          <DashboardGraphs />
        </div>
        <div className="col-span-24 sm:col-span-13 ">
          <MiddleContent />
        </div>
        <div className="col-span-24 sm:col-span-6">
          <RightContent />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
