import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0, User } from "@auth0/auth0-react";
import useOnClickOutside from "@src/hooks/useOnClickOutside";
import { httpAuth0ClientLogout } from "@src/libs/http-auth0-client";
import RocketIcon from "@assets/images/icons/Rocket.svg?react";
import UserIcon from "@assets/images/icons/User.svg?react";
import LogoutIcon from "@assets/images/icons/Logout.svg?react";

import Avater from "../Avater";
import { useTour } from "@reactour/tour";

interface ProfileSubMenuProps {
  user: User;
}
const ProfileSubMenu: React.FC<ProfileSubMenuProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setIsOpen: openProductTour } = useTour();
  const handleClose = () => {
    setIsOpen(false);
  };
  const [ref] = useOnClickOutside(handleClose);
  const { logout } = useAuth0();
  const handleLogout = async () => {
    await logout({
      openUrl: false,
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
    await httpAuth0ClientLogout();
    window.localStorage.clear();
  };

  return (
    <div className="relative rounded-full">
      <div
        style={{ minWidth: "32px" }}
        className="cursor-pointer profile w-8 h-8"
        onClick={() => setIsOpen(true)}
      >
        <Avater src={user?.picture || ""} alt={user?.given_name} />
      </div>
      {isOpen && (
        <div
          style={{ boxShadow: "8px 16px 32px 0px #71809614" }}
          ref={ref}
          className="absolute px-4 pt-3 pb-2 rounded-xl border border-[#E9EAEC] dark:border-[#242427]   z-10  grid  top-12 right-0 drop-shadow-md bg-white dark:bg-cardBackground-dark w-[14.5rem]"
        >
          <div className="">
            <h5 className="text-base font-semibold">
              {user?.given_name + " " + user?.family_name}
            </h5>
            <p className="text-xs font-medium">{user?.email}</p>
          </div>
          <hr className="my-4 dark:border-[#242427]" />
          <ul className="list-none">
            <li className="">
              <NavLink
                to="/profile"
                className="w-full flex justify-start items-center gap-2 text-nowrap"
                onClick={handleClose}
              >
                <UserIcon height={24} width={24} /> Profile Settings
              </NavLink>
            </li>
            <li className="py-4">
              <button
                onClick={() => openProductTour(true)}
                className="flex justify-start items-center w-full text-left gap-2"
              >
                <RocketIcon height={24} width={24} /> Product Tour
              </button>
            </li>
            <li className="">
              <button
                className="flex justify-start items-center w-full text-left gap-2"
                onClick={handleLogout}
              >
                <LogoutIcon height={24} width={24} />
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileSubMenu;
