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
            <div className="flex flex-col items-center gap-8 mt-4">
              <div className="flex items-center justify-center gap-4">
                <NavLink
                  to="/report/general/installed-odp"
                  className="flex items-center justify-center w-36 h-10 border border-primary rounded-md text-primary transition hover:bg-primary hover:text-white"
                >
                  General Report
                </NavLink>
                <NavLink
                  to="/report/field-data/list-odp"
                  className="flex items-center justify-center w-36 h-10 border border-primary rounded-md text-primary transition hover:bg-primary hover:text-white"
                >
                  Field Data
                </NavLink>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h5 className="text-[12px] text-softwhite">
                  Create all your necessary data to support your operational
                </h5>
                <NavLink
                  to="/data-entry/field-data"
                  className="flex items-center justify-center w-40 h-10 border border-error rounded-md text-error transition hover:bg-error hover:text-white"
                >
                  Create New Data
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
