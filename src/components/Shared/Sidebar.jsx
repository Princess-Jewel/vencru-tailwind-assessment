import React from "react";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const linkClass =
  "flex items-center gap-2 font-bold px-3 py-2 hover:bg-dashboard-link-bg hover:no-underline active:bg-dashboard-link-bg font-display";

export default function Sidebar() {
  return (
    <div className="bg-sidebar-bg w-72 px-[24px] py-[32px] flex flex-col text-black">
      {/* LOGO SECTION */}
      <div className="w-[143px] h-[32px] ">
        <img
          src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672742885/Logo_gw6ulu.svg"
          alt="logo"
        />
      </div>
      {/* SEARCH SECTION */}
      <div className="py-[10px] my-[24px] flex items-start rounded-lg px-[16px] duration-300 cursor-pointer bg-white text-search-text border border-search-border">
        {/* <i className="bi bi-search text-sm"></i> */}
        <input
          type="text"
          className="text-[16px] w-full bg-transparent focus:outline-none font-display "
          placeholder="Search"
        />
      </div>

      <div className="flex-1">
        {/* NAVIGATION SECTION */}
        <div className="mb-0">
          {DASHBOARD_SIDEBAR_LINKS.map(link => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>

        {/* ASIDE NAVIGATION SECTION */}
        <div className="my-6">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(link => (
            <SidebarLink key={link.key} link={link} />
          ))}
        </div>

        {/* CARD SECTION */}
        <div className="px-[16px] py-[20px] bg-dashboard-link-bg rounded-lg">
          <div className="flex justify-start items-start flex-col">
            <p className="text-aside-text text-sm font-medium">
              New features available!
            </p>
            <p className="text-search-text font-normal text-sm">
              Check out the new dashboard view. Pages now load faster.
            </p>
          </div>
          <div className="py-4">
            <img
              src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672755896/Image_wrap_e3azev.svg"
              alt="img wrap"
              className="w-[215px] h-[136px]"
            />
          </div>
          <div className="flex gap-3 font-medium text-sm">
            <p className="text-search-text">Dismiss</p>
            <p className="text-aside-aside">What’s new?</p>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="font-display border-t border-divider flex justify-between gap-2 content-center mt-6 pt-2 pb-6">
        <div className="w-[40px] h-[40px]">
          <img
            src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672757146/Avatar_zp5kbl.svg"
            alt="profile img"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col ">
          <p className="text-sm font-medium text-aside-text">Olivia Rhye</p>
          <p className="text-sm font-normal text-search-text">
            olivia@untitledui.com
          </p>
        </div>
        <div className="w-[20px] h-[20px]">
          <img
            src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672757144/Icon_ihoppl.svg"
            alt="icon"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-dashboard-link-bg text-black"
          : "text-dashboard-link-text",
        linkClass
      )}
    >
      <img src={link.icon} alt={link.label} />
      {link.label}
    </Link>
  );
}
