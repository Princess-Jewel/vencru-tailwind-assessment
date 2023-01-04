import React from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const linkClass =
  "flex items-start gap-2 font-bold py-3 hover:bg-dashboard-link-bg hover:no-underline active:bg-dashboard-link-bg font-display";

export default function MobileMenu() {
  return (
    <div className="overflow-hidden bg-sidebar-bg w-5/6 p-[24px] flex flex-col text-black">
      {/* LOGO SECTION */}
      <div className="w-[143px] h-[32px] cursor-pointer ">
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
      {link.notifications && (
        <p className="rounded-2xl bg-notification-bg px-2.5 py-0.5 text-sm font-medium ml-20 text-dashboard-link-text font-display">
          {link.notifications}
        </p>
      )}
    </Link>
  );
}
