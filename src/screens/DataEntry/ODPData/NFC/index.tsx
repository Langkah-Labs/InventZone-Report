import React from "react";
// dependencies
// import _ from "lodash";
import { NavLink } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { useNFC } from "./hooks";
// components
import General from "../../General";
import Spinner from "../../../../components/Spinner";
import Table from "./Table";

export default function Index() {
  const { isLoading } = useNFC();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General title="Tags Data">
          <div className="flex flex-col gap-6">
            <div className="flex justify-end">
              {/* <input
                type="text"
                name="searchValues"
                placeholder="Search.."
                className="w-1/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                value={searchValues}
                onChange={(e) => setSearchValues(e.target.value)}
              /> */}
              <NavLink to="/data-entry/field-data/nfc/add">
                <div className="border border-primary text-primary rounded-md flex gap-2 justify-center items-center py-1 px-2 hover:bg-primary hover:text-white">
                  <IoIosAddCircle />
                  Tambah Data
                </div>
              </NavLink>
            </div>
            <Table />
          </div>
        </General>
      )}
    </>
  );
}
