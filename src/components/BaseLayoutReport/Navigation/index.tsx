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
      <div className="pr-8 pl-6">
        <button
          onClick={logoutHandler}
          className="flex items-center gap-1 rounded-md hover:opacity-75 transition body-large-medium text-red-400"
        >
          <IoIosLogOut />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Index;
