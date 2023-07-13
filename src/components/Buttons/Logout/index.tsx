import React from "react";
// dependencies
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

export default function Index() {
  const navigate = useNavigate();

  const logout = async () => {
    navigate("/login");
  };

  return (
    <div className="text-error text-[12px]">
      <button
        onClick={() => logout()}
        className="flex items-center gap-1  rounded-md hover:opacity-75 transition"
      >
        <IoIosLogOut />
        Logout
      </button>
      <hr />
    </div>
  );
}
