import React, { useState } from "react";
import GreenLogo from "@assets/images/logos/green-logo.svg?react";
import IconLogo from "@assets/images/logos/icon-logo.svg?react";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { isMobile } from "react-device-detect";

import ExpandIcon from "@assets/images/icons/Expand.svg?react";
import CollapsIcon from "@assets/images/icons/Collaps.svg?react";
import { navlinks, navlinks2 } from "@src/router/navlinks";
import SparklesIcon from "@assets/images/icons/Sparkles.svg?react";
import Tooltip from "../Tooltip";

const LeftNav: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(isMobile);

  return (
    <div className="bg-cardBackground-light dark:bg-cardBackground-dark">
      <div
        className={clsx([
          "hidden  h-full overflow-y-auto sm:flex flex-col py-[1.5rem] px-6 transition-all duration-300 ease-in-out",
          collapsed ? "w-24" : "w-64",
        ])}
      >
        <div className="left-nav">
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
              <Tooltip content="Collapse" triggerClass="!w-fit">
                <CollapsIcon
                  width={28}
                  height={28}
                  className="cursor-pointer collapsible-menu"
                  onClick={() => setCollapsed(!collapsed)}
                />
              </Tooltip>
            )}
          </div>
          <div className="flex-1 flex flex-col items-center ">
            {collapsed && (
              <Tooltip content="Expand" triggerClass="!w-fit">
                <ExpandIcon
                  onClick={() => setCollapsed(!collapsed)}
                  width={28}
                  height={28}
                  className="cursor-pointer mb-4"
                />
              </Tooltip>
            )}
            <nav className="w-full">
              <ul className="w-full list-none">
                {navlinks.map((link) => (
                  <li key={link.label} className="h-10 mb-1">
                    <Tooltip content={link.label}>
                      <NavLink
                        to={link.to}
                        className={({ isActive, isPending }) =>
                          clsx(
                            isActive
                              ? "bg-[#00CD82] !text-[#1A202C]"
                              : isPending
                              ? ""
                              : "",
                            "p-2 w-full h-full grid grid-flow-col gap-1 items-left rounded-md hover:bg-[#00CD82] hover:text-[#1A202C] dark:hover:text-[#1A202C] text-[#4B5563] dark:text-white",
                            collapsed
                              ? "justify-center"
                              : "justify-start !items-center"
                          )
                        }
                      >
                        <link.icon
                          width={20}
                          height={20}
                          className=" dark:stroke-white"
                        />
                        <div> {collapsed ? "" : link.label}</div>
                      </NavLink>
                    </Tooltip>
                  </li>
                ))}
              </ul>
              <hr className="my-4" />
              <ul>
                {navlinks2?.map((link) => (
                  <li key={link.label} className="h-10 mb-1">
                    <Tooltip content={link.label}>
                      <NavLink
                        to={link.to}
                        className={({ isActive, isPending }) =>
                          clsx(
                            isActive
                              ? "bg-[#00CD82] !text-[#1A202C]"
                              : isPending
                              ? ""
                              : "",
                            "p-2 w-full h-full grid grid-flow-col gap-1 items-left rounded-md hover:bg-[#00CD82] hover:text-[#1A202C] dark:hover:text-[#1A202C] text-[#4B5563] dark:text-white",
                            collapsed
                              ? "justify-center"
                              : "justify-start !items-center"
                          )
                        }
                      >
                        <link.icon
                          width={20}
                          height={20}
                          className=" dark:stroke-white"
                        />
                        <div> {collapsed ? "" : link.label}</div>
                      </NavLink>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div
          className={clsx([
            "upgrade w-full mt-auto   relative rounded-[0.625rem] pt-10 text-center",
            !collapsed && "bg-[#E0E9E5] dark:bg-[#1D2025]  p-4 ",
          ])}
        >
          <Tooltip
            contentClass="!p-0"
            content={
              collapsed ? (
                <div className="bg-[#E0E9E5] dark:bg-[#111827] rounded-md text-center  p-4 w-52">
                  <h3 className="text-sm font-medium">Upgrade to Protect</h3>
                  <p className="text-sm text-pretty my-2">
                    Upgrade to Protect for 24/7 fall detection and emergency
                    monitoring. Get 360-degree protection with Cline.
                  </p>
                  <Link
                    to="/upgrade"
                    className="text-[#1A202C]  text-sm bg-white px-4 py-2 block rounded-md w-full "
                  >
                    Upgrade
                  </Link>
                </div>
              ) : null
            }
            triggerClass={clsx([
              " bg-[#002B2B] mx-auto w-12 h-12  rounded-full flex justify-center items-center",
              !collapsed && "-top-6 right-[38%] absolute !w-12",
            ])}
          >
            <SparklesIcon
              fill="#00CD82"
              color="#00CD82"
              width={28}
              height={28}
            />
          </Tooltip>

          {!collapsed && (
            <>
              <h3 className="text-sm font-medium">Upgrade to Protect</h3>
              <p className="text-sm text-pretty my-2">
                Upgrade to Protect for 24/7 fall detection and emergency
                monitoring. Get 360-degree protection with Cline.
              </p>
              <Link
                to="/upgrade"
                className="text-[#1A202C] text-sm bg-white px-4 py-2 block rounded-md w-full "
              >
                Upgrade
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
