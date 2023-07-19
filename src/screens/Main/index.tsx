import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useMain } from "./hooks";
// components
import Spinner from "../../components/Spinner";
// assets
import s from "./main.module.scss";
import { icon_img } from "../../utils/constants";

export default function Index() {
  const { isLoading, logoutHandler } = useMain();
  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className={`${s.main}`}>
          <div className="py-4 px-8 ">
            <div className="flex justify-between items-center">
              <div className="p-0 w-1/5">
                <img src={icon_img} alt="invent-zone-icon" className="w-3/6" />
              </div>
              <div className="text-error text-[12px]">
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
            <div className="h-full flex justify-center items-center mt-4">
              <div className="flex flex-col itemx-center">
                <div className="flex flex-col items-center">
                  <h2 className="text-[48px] text-primary uppercase tracking-wide sm:text-[32px] xs:text-[32px]">
                    Field Operation Report
                  </h2>
                </div>
                <div className="flex flex-col items-center gap-8 mt-4 sm:gap-4 xs:gap-4 sm:mt-6 xs:mt-6">
                  <div className="flex flex-col gap-2 items-center text-center">
                    <h5 className="text-[12px] text-softwhite sm:text-[10px] xs:text-[10px]">
                      Reporting all information about ODP installed for better
                      decision making.
                    </h5>
                    <div className="flex items-center justify-center gap-4">
                      <NavLink
                        to="/report/general/installed-odp"
                        className="flex items-center justify-center w-36 h-10 border border-primary rounded-md text-primary transition sm:text-[13px] xs:text-[13px] sm:w-32 xs:w-32 hover:bg-primary hover:text-white"
                      >
                        General Report
                      </NavLink>
                      <NavLink
                        to="/report/field-data/list-odp"
                        className="flex items-center justify-center w-36 h-10 border border-primary rounded-md text-primary transition sm:text-[13px] xs:text-[13px] sm:w-32 xs:w-32 hover:bg-primary hover:text-white"
                      >
                        Field Data
                      </NavLink>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-center text-center">
                    <h5 className="text-[12px] text-softwhite  sm:text-[10px] xs:text-[10px]">
                      Create all your necessary data to support your operational
                    </h5>
                    <NavLink
                      to="/data-entry/field-data"
                      className="flex items-center justify-center w-40 h-10 border border-error rounded-md text-error transition sm:text-[13px] xs:text-[13px] sm:w-32 xs:w-32 hover:bg-error hover:text-white"
                    >
                      Create New Data
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
