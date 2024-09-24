import React, { useState } from "react";
import GreenLogo from "@assets/images/logos/green-logo.svg?react";
import IconLogo from "@assets/images/logos/icon-logo.svg?react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

import ExpandIcon from "@assets/images/icons/Expand.svg?react";
import CollapsIcon from "@assets/images/icons/Collaps.svg?react";
import { navlinks } from "@src/router/navlinks";

const LeftNav: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div
      className={clsx([
        "bg-cardBackground-light dark:bg-cardBackground-dark h-full overflow-y-auto flex flex-col py-[1.5rem] px-6 transition-all duration-500 ease-in-out",
        collapsed ? "w-24" : "w-64",
      ])}
    >
      <div className=" flex justify-between items-center pb-[1.5rem]">
        {collapsed ? (
          <div className="text-[#002B2B]  dark:text-white">
            <IconLogo className="w-11 h-11" />
          </div>
        ) : (
          <div className="text-[#002B2B]  dark:text-white">
            <GreenLogo className="w-[4.4rem] h-6 " />
          </div>
        )}
        {!collapsed && (
          <CollapsIcon
            width={28}
            height={28}
            className="cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          />
        )}
      </div>
      <div className="flex-1 flex flex-col items-center">
        {collapsed && (
          <ExpandIcon
            onClick={() => setCollapsed(!collapsed)}
            width={28}
            height={28}
            className="cursor-pointer"
          />
        )}
        <nav className="w-full">
          <ul className="w-full list-none">
            {navlinks.map((link) => (
              <li className="h-10">
                <NavLink
                  to={link.to}
                  className={({ isActive, isPending }) =>
                    clsx(
                      isActive
                        ? "bg-[#00CD82] text-white"
                        : isPending
                        ? ""
                        : "",
                      "p-2 w-full h-full flex gap-2 items-center rounded-md",
                      collapsed ? "justify-center" : ""
                    )
                  }
                >
                  <link.icon
                    width={28}
                    height={28}
                    className=" dark:stroke-white"
                  />
                  {collapsed ? "" : link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeftNav;
