import Tag from "@src/components/Tag";
import React from "react";
import { Link } from "react-router-dom";

const Subscription: React.FC = () => {
  return (
    <div className="border border-border-light dark:border-border-dark rounded-2xl dark:bg-cardBackground-dark">
      <div className="border-b border-border-light dark:border-border-dark flex flex-col sm:flex-row gap-4 justify-between items-baseline sm:items-center p-5">
        <div>
          <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-1">
            Subscription
          </h3>
          <p className="text-text-subbed dark:text-text-darkSubbed text-sm">
            View and update your Cline subscription here.
          </p>
        </div>
        <Link
          to="/settings/upgrade"
          className="text-center border border-border-light dark:border-border-dark w-full sm:w-fit dark:bg-cardBackground-dark2 rounded-lg p-2  px-4"
        >
          Upgrade
        </Link>
      </div>

      <div className="p-5">
        <p className="mb-4 font-medium">Your active plan overview</p>
        <div className="border rounded-[0.625rem] border-border-light dark:border-border-dark dark:bg-cardBackground-dark2 flex  flex-col sm:flex-row gap-4 justify-between  items-baseline sm:items-center p-5">
          <div className="grid gap-2 w-full">
            <div className="flex items-center justify-between sm:justify-normal gap-2">
              <p>Cline AI Companion</p>{" "}
              <Tag
                backgroundColor="#F0F9FF"
                color="#0369A1"
                borderColor="#BAE6FD"
              >
                View Details
              </Tag>
            </div>
            <p className="text-text-subbed dark:text-text-darkSubbed text-sm">
              AI companion for managing your care
            </p>
          </div>
          <div>
            <p className="font-medium ">
              $20/
              <span className="font-normal text-sm text-text-subbed dark:text-text-darkSubbed">
                mo
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
