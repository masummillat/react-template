import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { useSearchParams } from "react-router-dom";
import NotificationIcon from "@assets/images/icons/Notification.svg?react";
import UsdCircleIcon from "@assets/images/icons/UsdCircle.svg?react";
import LockIcon from "@assets/images/icons/Lock.svg?react";
import FingerprintIcon from "@assets/images/icons/Fingerprint.svg?react";
import UserShareIcon from "@assets/images/icons/UserShare.svg?react";
import Trash2Icon from "@assets/images/icons/Trash2.svg?react";
import NotificationsTab from "./NotificatioinsTab";
import SubscriptionsAndBillingsTab from "./SubscriptionsAndBillingsTab";
import PasswordTab from "./PasswordTab";
import BiometricSettingsTab from "./BiometricSettingsTab";
import ReferralsTab from "./ReferralsTab";
import DeleteAccountTab from "./DeleteAccountTab";
import SelectWithIcon from "@src/components/Select";

const SettingsTabs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "notifications";
  const handleSelect = (value: string) => {
    setSearchParams(value ? { tab: value } : {});
  };

  const tabs: {
    label: string;
    value: string;
    icon: React.ReactNode;
    content: React.ReactNode;
  }[] = [
    {
      label: "Notifications",
      value: "notifications",
      icon: <NotificationIcon width={20} height={20} />,
      content: <NotificationsTab />,
    },
    {
      label: "Subscription & Billing",
      value: "subscription-billing",
      icon: <UsdCircleIcon width={20} height={20} />,
      content: <SubscriptionsAndBillingsTab />,
    },
    {
      label: "Password",
      value: "password",
      icon: <LockIcon width={20} height={20} />,
      content: <PasswordTab />,
    },
    {
      label: "Biometric settings",
      value: "biometric-settings",
      icon: <FingerprintIcon width={20} height={20} />,
      content: <BiometricSettingsTab />,
    },
    {
      label: "Referrals",
      value: "referrals",
      icon: <UserShareIcon width={20} height={20} />,
      content: <ReferralsTab />,
    },
    {
      label: "Delete account",
      value: "delete-account",
      icon: <Trash2Icon width={20} height={20} />,
      content: <DeleteAccountTab />,
    },
  ];

  return (
    <div className="animate-slideUp">
      <div className="mb-8 sm:hidden ">
        <SelectWithIcon
          options={tabs}
          value={currentTab}
          onChange={handleSelect}
        />
      </div>
      <Tabs.Root
        orientation="horizontal"
        className="grid grid-cols-12 gap-4"
        value={currentTab}
      >
        <Tabs.List
          className="hidden sm:flex sm:flex-col gap-2 h-fit justify-start col-span-3 p-4 border border-[#CCD0D0] dark:bg-cardBackground-dark dark:border-[#242427] rounded-2xl"
          aria-label="Manage your account"
        >
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              className="flex gap-2 items-center p-2 px-3 rounded-[0.625rem] text-left data-[state=active]:bg-[#F3F4F6] data-[state=active]:dark:bg-[#1D2025] text-sm font-medium text-[#4B5563] dark:text-[#6B7280] data-[state=active]:dark:!text-[#ffffff] data-[state=active]:text-[#1A202C]"
              value={tab.value}
              onClick={() => handleSelect(tab.value)}
            >
              {tab.icon} {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className="col-span-12 sm:col-span-9">
          {tabs.map((tab) => (
            <Tabs.Content
              key={tab.value}
              className="TabsContent"
              value={tab.value}
            >
              {tab.content}
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
};

export default SettingsTabs;
