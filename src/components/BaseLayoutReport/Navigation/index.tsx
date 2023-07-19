import React from "react";
// dependencies
import { IoIosLogOut } from "react-icons/io";
import { useNavigation } from "./hooks";
// components
import Menu from "./Menu";

const Index = () => {
  const { logoutHandler } = useNavigation();

  return (
    <div className="flex justify-between items-center shadow-md">
      <Menu />

      <div className="text-error text-[12px] pr-8 pl-6">
        <button
          onClick={logoutHandler}
          className="flex items-center gap-1  rounded-md hover:opacity-75 transition"
        >
          <IoIosLogOut />
          Logout
        </button>
        <hr />
      </div>
    </div>
  );
};

export default Index;
