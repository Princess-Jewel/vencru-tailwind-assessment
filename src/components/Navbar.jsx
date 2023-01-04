import React from "react";

const Navbar = ({ showSideBar, setShowSideBar }) => {
  return (
    <nav className="p-4 bg-white h-[63px] border border-b border-divider block md:hidden flex justify-between items-center ">
      <div className="w-[143px] h-[32px] cursor-pointer ">
        <img
          src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672742885/Logo_gw6ulu.svg"
          alt="logo"
        />
      </div>

      {showSideBar ? (
        <p onClick={() => setShowSideBar(false)}>prin</p>
      ) : (
        <div
          className="w-[24px] h-[24px] cursor-pointer"
          onClick={() => setShowSideBar(true)}
        >
          <img
            src="https://res.cloudinary.com/dpqxraalv/image/upload/v1672872013/menu-2_kvyw9b.svg"
            alt="hamburger"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
