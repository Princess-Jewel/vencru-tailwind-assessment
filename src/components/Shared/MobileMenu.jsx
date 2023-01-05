import React from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";

export default function MobileMenu() {
  return (
   <div className="overflow-hidden bg-sidebar-bg w-80 p-[24px] flex flex-col text-black md:hidden ">
      {/* LOGO SECTION */}
      <div className="w-[143px] h-[32px] cursor-pointer ">
        <img
          src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672742885/Logo_gw6ulu.svg"
          alt="logo"
        />
      </div>
      {/* SEARCH SECTION */}
      <div className="py-[10px] my-[24px] relative flex items-start rounded-lg px-[16px] duration-300 cursor-pointer bg-white text-search-text border border-search-border">
       <img src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672877167/Icon_4_f5c9le.svg" className="absolute top-[12px] left-[16px]" alt="search icon" />
        <input
          type="text"
          className="text-[16px] w-full bg-transparent pl-[24px] focus:outline-none font-display "
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
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={link.path}
      className={
        pathname === link.path
          ? "bg-dashboard-link-bg text-black flex items-start gap-2 font-bold py-3 hover:bg-dashboard-link-bg hover:no-underline active:bg-dashboard-link-bg font-display"
          : "text-dashboard-link-text flex items-start gap-2 font-bold py-3 hover:bg-dashboard-link-bg hover:no-underline active:bg-dashboard-link-bg font-display"
      }
    >
      <img src={link.icon} alt={link.label} />
      {link.label}
      {link.notifications && (
        <p
          className="rounded-2xl bg-notification-bg px-2.5 py-0.5 text-sm font-medium text-dashboard-link-text font-display ml-auto
				flex-shrink-0"
        >
          {link.notifications}
        </p>
      )}
    </Link>
  );
}
