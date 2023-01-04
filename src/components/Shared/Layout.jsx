import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import Header from "./Header";

const Layout = () => {
  return (
    <div className="md:flex md:flex-row flex-none bg-neutral-100 h-screen w-screen md:overflow-hidden overflow-y-auto overflow-x-hidden">
      {/* <Sidebar /> */}

      {/* <div className=" flex-1 "> */}
				<div className="md:flex md:flex-col flex-none md:flex-1 p-4 min-h-0 overflow-y-auto overflow-x-hidden md:p-8 bg-dashboard-link-bg">
					<Outlet />
				</div>
			{/* </div> */}
    </div>
  );
};

export default Layout;

