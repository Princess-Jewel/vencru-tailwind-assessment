import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";
// import Header from "./Header";

const Layout = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    // md:flex md:flex-row flex-none
    <>
      {showSideBar ? (
        ""
      ) : (
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      )}
      <div className="flex bg-[gray] h-screen w-screen overflow-hidden overflow-y-auto overflow-x-hidden">
        {showSideBar ? <MobileMenu /> : <Sidebar />}

        {/* <div className=" flex-1 "> */}
        {/* md:flex md:flex-col flex-none md:flex-1 */}
        {showSideBar ? (
          <p
            onClick={() => setShowSideBar(false)}
            className="absolute top-[20px] right-[20px] text-3xl block md:hidden text-white font-display"
          >
            x
          </p>
        ) : (
          <div className="w-full pl-4 pb-4 pr-4 pt-[32px] min-h-0 overflow-y-auto  overflow-x-hidden md:p-8 bg-dashboard-link-bg">
            <Outlet />
          </div>
        )}
        {/* </div> */}
      </div>
    </>
  );
};

export default Layout;
