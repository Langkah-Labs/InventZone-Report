import React from "react";
// dependencies
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  const logout = async () => {
    navigate("/login");
  };

  return (
    <div className="text-error text-[12px]">
      <button onClick={() => logout()} className="hover:opacity-75 transition">
        Logout
      </button>
    </div>
  );
}
