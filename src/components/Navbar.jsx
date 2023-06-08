import React from "react";
import {FaShopify} from "react-icons/fa"

const Navbar = ({ logOutHandler }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <nav className=" cus-bg flex justify-between items-center p-3 ">
        <div  className=" flex items-centertext-xl text-primary">
        <FaShopify className="text-xl gap-2 "/>
          <h1 className="font-semibold tracking-wider">MMS-SHOP </h1>
        </div>
        <div className="flex items-center gap-2">
          <p>{user.name}</p>
          <img
            src={user?.image}
            alt=""
            className="w-10 rounded-full p-1 border"
          />
          <button
            onClick={logOutHandler}
            className="bg-gray-700 text-white px-4 py-1 shadow-md"
          >
            logOut
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
