import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@assets/images/icons/Dashboard.svg?react";
import RadioIcon from "@assets/images/icons/Radio.svg?react";
import CalendarIcon from "@assets/images/icons/Calendar.svg?react";
import MessageIcon from "@assets/images/icons/Message.svg?react";
import ChartIcon from "@assets/images/icons/Chart.svg?react";
import IntegrationIcon from "@assets/images/icons/Integration.svg?react";
import SettingsIcon from "@assets/images/icons/Settings.svg?react";
import HeadphoneIcon from "@assets/images/icons/Headphone.svg?react";
import UserIcon from "@assets/images/icons/User.svg?react";

const breadcrumbNameMap: Record<
  string,
  {
    label: string;
    icon?: React.ReactNode;
  }
> = {
  "//": {
    label: "Dashboard",
    icon: <DashboardIcon width={20} height={20} />,
  },
  "/profile": {
    label: "Profile",
    icon: <UserIcon width={20} height={20} />,
  },
  "/upgrade": {
    label: "Upgrade",
  },
  "/settings": {
    label: "Settings",
    icon: <SettingsIcon width={20} height={20} />,
  },
  "/settings/upgrade": {
    label: "Upgrade",
  },
  "/settings/upgrade/checkout": {
    label: "Checkout",
  },
  "/settings/invoices": {
    label: "Invoices",
  },
  "/fall-detection": {
    label: "Fall Detection",
    icon: <RadioIcon width={20} height={20} />,
  },
  "/appointment": {
    label: "AI Companion",
    icon: <CalendarIcon width={20} height={20} />,
  },
  "/message": {
    label: "Message",
    icon: <MessageIcon width={20} height={20} />,
  },
  "/overview": {
    label: "Overview",
    icon: <ChartIcon width={20} height={20} />,
  },
  "/integration": {
    label: "Integration",
    icon: <IntegrationIcon width={20} height={20} />,
  },
  "/help-and-support": {
    label: "Help and Support",
    icon: <HeadphoneIcon width={20} height={20} />,
  },
};

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames =
    location.pathname === "/"
      ? ["/"]
      : location.pathname.split("/").filter((x) => x);

  return (
    <nav>
      <div className="flex items-center">
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          return (
            <div key={index}>
              {breadcrumbNameMap[to] ? (
                index > 0 ? (
                  index + 1 === pathnames.length ? (
                    <div
                      className={clsx([
                        "text-sm flex items-center h-full",
                        location.pathname === to
                          ? "text-text-primary dark:text-white"
                          : "text-[#A0AEC0]",
                      ])}
                    >
                      /{breadcrumbNameMap[to].label}
                    </div>
                  ) : (
                    <Link
                      className={clsx([
                        "text-sm ",
                        location.pathname === to
                          ? "text-text-primary dark:text-white"
                          : "text-[#A0AEC0]",
                      ])}
                      to={to}
                    >
                      /{breadcrumbNameMap[to].label}
                    </Link>
                  )
                ) : (
                  <div
                    className={clsx([
                      "text-sm flex items-center gap-1 ",
                      location.pathname === to
                        ? "text-text-primary dark:text-white"
                        : "text-[#A0AEC0]",
                    ])}
                  >
                    {breadcrumbNameMap[to]?.icon}
                    <Link to={to}>{breadcrumbNameMap[to].label}</Link>
                  </div>
                )
              ) : (
                value
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
