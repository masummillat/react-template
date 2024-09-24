import React from "react";
import Input from "../Input";
import ThemeSwitcher from "../ThemeSwitcher";
import Avater from "../Avater";
import FontIcon from "@assets/images/icons/Font.svg?react";
import NotificationIcon from "@assets/images/icons/Notification.svg?react";
import SearchIcon from "@assets/images/icons/Search.svg?react";
import clsx from "clsx";
import { User } from "@auth0/auth0-spa-js";
import { NavLink } from "react-router-dom";

interface TopNavProps {
  user: User;
}
const TopNav: React.FC<TopNavProps> = ({ user }) => {
  return (
    <div className="border-b border-[#CCD0D0] px-6 py-[1.125rem] flex justify-between items-center">
      <div>Dashboard</div>
      <div className="flex gap-4 items-center">
        <Input
          wrapperClassName="!border-none"
          hideError
          placeholder="Search anything..."
          prefixIcon={<SearchIcon />}
        />
        <div className="flex gap-4 items-center border-l border-[#CCD0D0] px-4">
          <FontIcon width={32} height={32} />
          <ThemeSwitcher />
        </div>
        |
        <NotificationIcon
          width={36}
          height={36}
          className={clsx(["relative cursor-pointer"])}
        />
        <div className="relative rounded-full overflow-hidden">
          <div>
            <Avater src={user?.picture || ""} alt={user?.given_name} />
          </div>
          <div className="absolute p-4  z-10  grid right-0 bg-red-400 dark:bg-cardBackground-dark drop-shadow-lg">
            <div>
              <h5>{user?.given_name + " " + user?.family_name}</h5>
              <p className=" text-xs">{user?.email}</p>
            </div>
            <hr />
            <ul className="list-none">
              <li className="py-2">
                <NavLink to="/profile">Profile Settings</NavLink>
              </li>
              <li className="pb-2">
                <p>Product Tour</p>
              </li>
              <li>
                <p>Log Out</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopNav;
