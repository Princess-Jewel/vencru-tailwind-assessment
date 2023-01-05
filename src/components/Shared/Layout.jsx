import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      {showSideBar ? (
        ""
      ) : (
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      )}
      <div className="flex bg-[#858c98] h-screen w-screen overflow-hidden overflow-y-auto overflow-x-hidden">
        {showSideBar ? <MobileMenu /> : <Sidebar />}
        {showSideBar ? (
          <div
            className="absolute top-[18px] right-[10px] cursor-pointer rounded-lg block md:hidden  bg-hamburger px-[15px]"
            onClick={() => setShowSideBar(false)}
          >
            <p className=" text-3xl text-center text-white font-display mb-[5px]">
              x
            </p>
          </div>
        ) : (
          <div className="w-full pl-4 pb-4 pr-4 pt-[32px] min-h-0 overflow-y-auto  overflow-x-hidden md:p-8 bg-dashboard-link-bg">
            <Outlet />
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
