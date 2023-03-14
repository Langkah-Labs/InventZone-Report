import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
// components
import Brands from "../../components/BrandsIcon";
import Logout from "../../components/Buttons/Logout";
// assets
import s from "./main.module.scss";

export default function Index() {
  return (
    <div className={`${s.main}`}>
      <div className="p-12">
        <div className="flex justify-between items-center">
          <Brands />
          <Logout />
        </div>
        <div className="h-full flex justify-center items-center mt-12">
          <div className="flex flex-col itemx-center">
            <div className="flex flex-col items-center">
              <h2 className="text-[48px] text-primary uppercase tracking-wide">
                Field Operation Report
              </h2>
              <h5 className="text-[12px] text-softwhite">
                Reporting all information about ODP installed for better
                decision making.
              </h5>
            </div>
            <div className="flex items-center justify-center mt-12 gap-4">
              <NavLink
                to="/report/general/installed-odp"
                className="flex items-center justify-center w-36 h-10 border border-primary rounded-md text-primary transition hover:bg-primary hover:text-white"
              >
                General Report
              </NavLink>
              <NavLink
                to="/report/general/list-odp"
                className="flex items-center justify-center w-36 h-10 border border-primary rounded-md text-primary transition hover:bg-primary hover:text-white"
              >
                Field Data
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
