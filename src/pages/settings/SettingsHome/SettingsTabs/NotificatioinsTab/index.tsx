import SwitchButton from "@src/components/SwitchButton";
import React, { useState } from "react";

const emailNotificationOptions = [
  {
    id: "update-and-features",
    value: false,
    title: "Updates & features",
    descriptions: "Notifications about new updates and their features.",
  },
  {
    id: "early-access",
    value: true,
    title: "Early access",
    descriptions:
      "Users are selected for beta testing of new update,notifications relating or participate in any of paid product promotion.",
  },
  {
    id: "email-shortcuts",
    value: false,
    title: "Email shortcuts",
    descriptions: "Shortcut notifications for email.",
  },

  {
    id: "new-mails",
    value: true,
    title: "New mails",
    descriptions: "Notifications related to new mails received.",
  },
  {
    id: "mail-chat-messages",
    value: true,
    title: "Mail chat messages",
    descriptions:
      "Any of new messages are received will be updated through notifications.",
  },
];

const pushNotificationsOptions = [
  {
    id: "new-mails",
    value: true,
    title: "New mails",
    descriptions: "Notifications related to new mails received.",
  },
  {
    id: "mail-chat-messages",
    value: false,
    title: "Mail chat messages",
    descriptions:
      "Any of new messages are received will be updated through notifications.",
  },
  {
    id: "mail-extensions",
    value: true,
    title: "Mail extensions",
    descriptions:
      "Notifications related to the extensions received by new emails and thier propertied also been displayed.",
  },
];
const NotificationsTab: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = useState(
    emailNotificationOptions
  );
  const [pushNotifications, setPutNotifications] = useState(
    pushNotificationsOptions
  );

  const onToggle = (value) => {};
  return (
    <div className="animate-slideUp border border-border-light dark:border-border-dark rounded-2xl dark:bg-cardBackground-dark">
      <div className="p-5 border-b border-border-light dark:border-border-dark">
        <h4 className="text-lg font-semibold text-text-primary dark:text-white mb-2">
          Email notifications
        </h4>
        <p className="text-text-subbed dark:text-text-darkSubbed text-sm">
          Email notifications are alerts you receive while offline, which you
          can enable or disable.
        </p>
      </div>

      <div className="px-4 mb-5">
        {emailNotifications?.map((setting) => (
          <div
            key={setting.title}
            className="flex justify-between items-center gap-4 py-4 border-b border-border-light dark:border-border-dark"
          >
            <div>
              <h5 className="text-sm font-medium mb-2">{setting.title}</h5>
              <p className="text-sm dark:text-text-darkSubbed ">
                {setting.descriptions}
              </p>
            </div>
            <div className="min-w-11">
              <SwitchButton onToggle={onToggle} value={setting.value} />
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 border-b border-border-light dark:border-border-dark">
        <h4 className="text-lg font-semibold text-text-primary dark:text-white mb-2">
          Push notifications
        </h4>
        <p className="text-text-subbed dark:text-text-darkSubbed text-sm">
          Push notifications are received online and can be enabled or disabled.
        </p>
      </div>

      <div className="px-4 mb-5">
        {pushNotifications?.map((setting) => (
          <div
            key={setting.title}
            className="flex justify-between items-center gap-4 py-4 border-b border-border-light dark:border-border-dark"
          >
            <div>
              <h5 className="text-sm font-medium mb-2">{setting.title}</h5>
              <p className="text-sm dark:text-text-darkSubbed ">
                {setting.descriptions}
              </p>
            </div>
            <div className="min-w-11">
              <SwitchButton onToggle={onToggle} value={setting.value} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-4 items-center p-4 font-medium">
        <button className="text-text-primary bg-primary-light p-2 px-4 rounded-lg border border-primary-light">
          Save changes
        </button>
        <button className="p-2 px-4 rounded-lg text-text-primary dark:text-white border border-border-light dark:border-border-dark">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NotificationsTab;
