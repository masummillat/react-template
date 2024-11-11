import React from "react";
import { useSearchParams } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";
import MonthlyTab from "./MonthlyTab";
import AnnuallyTab from "./AnuallyTab";

interface UpgradeMainContentProps {
  checkoutUrl?: string;
}
const UpgradeMainContent: React.FC<UpgradeMainContentProps> = ({
  checkoutUrl = "/upgrade/checkout",
}) => {
  const tabs: {
    label: string;
    value: string;
    content: React.ReactNode;
  }[] = [
    {
      label: "Monthly",
      value: "monthly",
      content: <MonthlyTab checkoutUrl={checkoutUrl} />,
    },
    {
      label: "Annually",
      value: "annually",
      content: <AnnuallyTab checkoutUrl={checkoutUrl} />,
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "monthly";
  const handleSelect = (value: string) => {
    setSearchParams(value ? { tab: value } : {});
  };

  return (
    <>
      <div className="grid gap-4 w-full sm:w-11/12 md:w-4/5 lg:w-3/4 mx-auto animate-fadeIn">
        <div className="grid  gap-1 text-center mb-4">
          <h2 className="text-2xl font-semibold ">
            Get ready to start aging on your terms
          </h2>
          <p className="text-lg text-text-subbed dark:text-text-darkSubbed">
            Easy pricing with no hidden fees
          </p>
        </div>

        <Tabs.Root
          orientation="horizontal"
          className="grid  gap-4"
          value={currentTab}
        >
          <Tabs.List
            className="hidden w-fit mx-auto sm:flex  gap-2 h-fit justify-start  p-1  bg-[#F9FAFB] rounded-lg dark:bg-[#0E1218]"
            aria-label="Manage your account"
          >
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab.value}
                className="flex gap-2 items-center p-2 px-[14px] rounded-[0.625rem] text-left data-[state=active]:bg-[#E0E9E5] data-[state=active]:dark:bg-[#050505] text-sm font-medium text-[#4B5563] dark:text-[#6B7280] data-[state=active]:dark:!text-[#ffffff] data-[state=active]:text-[#1A202C]"
                value={tab.value}
                onClick={() => handleSelect(tab.value)}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Content
              key={tab.value}
              className="TabsContent"
              value={tab.value}
            >
              {tab.content}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </>
  );
};

export default UpgradeMainContent;
