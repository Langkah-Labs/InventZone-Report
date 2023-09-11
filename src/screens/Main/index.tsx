import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { FaGlobe, FaRegListAlt } from "react-icons/fa";
import { useMain } from "./hooks";
// components
import Spinner from "../../components/Spinner";
// assets
import { icon_img, pattern_img } from "../../utils/constants";

export default function Index() {
  const { isLoading, logoutHandler } = useMain();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="h-screen">
          <div className="flex justify-between items-start w-full">
            <div className="py-4 px-8 w-8/12 drop-shadow-md">
              <div className="flex justify-start items-center">
                <div className="w-1/5">
                  <img
                    src={icon_img}
                    alt="invent-zone-icon"
                    className="w-3/6 sm:w-5/6 xs:w-5/6"
                  />
                </div>
              </div>
              <div className="h-full flex justify-start items-start mt-36">
                <div className="flex flex-col itemx-start">
                  <div className="flex flex-col items-start">
                    <h2 className="body-4large-bold text-[#113A5D] uppercase text-left sm:text-[24px] xs:text-[24px]">
                      Data to enrich your <br /> business
                    </h2>
                  </div>
                  <div className="flex flex-col items-start gap-8 mt-2">
                    <div className="flex flex-col gap-8 items-start">
                      <h5 className="body-base-medium text-gray-400 sm:text-[10px] xs:text-[10px]">
                        Unlocking the Power of Data: A Comprehensive Approach to
                        Business Enhancement through In-Depth <br /> Data
                        Enrichment and Strategic Analysis
                      </h5>
                      <div className="flex items-center justify-center gap-4">
                        <NavLink
                          to="/report/general/installed-odp"
                          className="flex items-center gap-2 justify-center w-44 h-10 border bg-[#113A5D] text-white rounded-md transition hover:bg-transparent hover:text-[#113A5D] sm:w-32 xs:w-32 sm:text-[10px] xs:text-[10px]"
                        >
                          <FaGlobe />
                          General Report
                        </NavLink>
                        <NavLink
                          to="/report/field-data/list-odp"
                          className="flex items-center gap-2 justify-center w-44 h-10 border border-[#113A5D] rounded-md text-[#113A5D] transition hover:bg-[#113A5D] hover:text-white sm:w-32 xs:w-32 sm:text-[10px] xs:text-[10px]"
                        >
                          <FaRegListAlt />
                          Field Data
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="text-error text-[12px] mt-60">
                    <button
                      onClick={logoutHandler}
                      className="flex items-center gap-1 rounded-md hover:opacity-75 transition body-large-medium text-red-400"
                    >
                      <IoIosLogOut />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/12 sm:hidden xs:hidden">
              <div className="h-full">
                <img
                  src={pattern_img}
                  alt="invent-zone-icon"
                  className="h-screen w-full object-cover opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
