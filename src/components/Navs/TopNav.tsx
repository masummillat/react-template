import React from "react";
import Input from "../Input";
import ThemeSwitcher from "../ThemeSwitcher";
import { navlinks, navlinks2 } from "@src/router/navlinks";
import SearchIcon from "@assets/images/icons/Search.svg?react";
import { User } from "@auth0/auth0-spa-js";
import Breadcrumbs from "../Breadcrumbs";
import ProfileSubMenu from "../ProfileSubMenu";
import NotificationDropdown from "../NotificationDropdown";
import FontSizeDropdown from "../FontSizeDropdown";

import clsx from "clsx";
import { NavLink } from "react-router-dom";
import CloseIcon from "@assets/images/icons/Close.svg?react";
import Menu2Icon from "@assets/images/icons/Menu2.svg?react";
import ClineWhiteLogo from "@assets/images/logos/cline-white.svg?react";

interface TopNavProps {
  user: User;
}
const TopNav: React.FC<TopNavProps> = ({ user }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className=" relative border-b border-[#CCD0D0] px-6 py-[1.125rem] flex justify-between items-center  bg-cardBackground-light  dark:bg-cardBackground-dark sm:bg-transparent sm:dark:bg-transparent">
      <div className="hidden sm:block">
        <Breadcrumbs />
      </div>
      <div className="flex gap-4 items-center ">
        <div
          onClick={handleOpen}
          className="block sm:hidden cursor-pointer bg-white dark:bg-cardBackground-dark2 p-2 rounded-md"
        >
          <Menu2Icon width={20} height={20} />
        </div>
        <Input
          containerClassName="!mb-0"
          wrapperClassName="!border-none"
          className="search"
          hideError
          placeholder="Search anything..."
          prefixIcon={<SearchIcon />}
        />
        <div className="hidden sm:flex gap-4 items-center border-l border-r border-[#CCD0D0] px-4 comfort-experience">
          <FontSizeDropdown />
          <ThemeSwitcher />
        </div>

        {/* Notification dropdown */}
        <NotificationDropdown />

        {/* Profile sub menue */}
        <ProfileSubMenu user={user} />
      </div>
      <div
        className={clsx([
          isOpen ? "flex flex-col animate-fadeIn" : "hidden",
          "h-screen w-screen bg-cardBackground-light dark:bg-cardBackground-dark fixed top-0 left-0 z-10 p-4",
        ])}
      >
        <div className="py-4 pb-8 border-b border-border-light dark:border-border-dark flex justify-between items-center">
          {/* logo */}
          <div className="text-[#002B2B]  dark:text-white">
            <ClineWhiteLogo width={70} height={24} />
          </div>
          <div className="flex gap-8 items-center">
            <ThemeSwitcher />
            <div
              onClick={handleClose}
              className="cursor-pointer p-1 bg-white dark:bg-cardBackground-dark2 w-fit rounded-md"
            >
              <CloseIcon width={20} height={20} />
            </div>
          </div>
        </div>
        {/* Nav Links */}

        <nav className="w-full mt-8">
          <ul className="w-full list-none">
            {navlinks.map((link) => (
              <li key={link.label} className="h-10 mb-1">
                <NavLink
                  title={link.label}
                  to={link.to}
                  onClick={handleClose}
                  className={({ isActive, isPending }) =>
                    clsx(
                      isActive
                        ? "bg-[#00CD82] !text-[#1A202C]"
                        : isPending
                        ? ""
                        : "",
                      "p-2 w-full h-full grid grid-flow-col gap-1 items-left rounded-md hover:bg-[#00CD82] hover:text-[#1A202C] dark:hover:text-[#1A202C] text-[#4B5563] dark:text-white",
                      "justify-start !items-center"
                    )
                  }
                >
                  <link.icon
                    width={20}
                    height={20}
                    className=" dark:stroke-white"
                  />
                  <div> {link.label}</div>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="my-4 border border-dashed" />
          <ul>
            {navlinks2?.map((link) => (
              <li key={link.label} className="h-10 mb-1">
                <NavLink
                  title={link.label}
                  to={link.to}
                  onClick={handleClose}
                  className={({ isActive, isPending }) =>
                    clsx(
                      isActive
                        ? "bg-[#00CD82] !text-[#1A202C]"
                        : isPending
                        ? ""
                        : "",
                      "p-2 w-full h-full grid grid-flow-col gap-1 items-left rounded-md hover:bg-[#00CD82] hover:text-[#1A202C] dark:hover:text-[#1A202C] text-[#4B5563] dark:text-white",
                      "justify-start !items-center"
                    )
                  }
                >
                  <link.icon
                    width={20}
                    height={20}
                    className=" dark:stroke-white"
                  />
                  <div> {link.label}</div>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {/* Upgrade button */}
        <NavLink
          to="/upgrade"
          onClick={handleClose}
          className="mt-auto p-4 px-5 rounded-lg font-medium text-center bg-white text-text-primary  border border-border-light dark:border-border-dark "
        >
          Upgrade
        </NavLink>
      </div>
    </div>
  );
};
export default TopNav;
