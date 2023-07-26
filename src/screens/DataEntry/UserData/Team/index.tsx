import React from "react";
// dependencies
// import _ from "lodash";
import { NavLink } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { useTeam } from "./hooks";
// components
import General from "../../General";
import Spinner from "../../../../components/Spinner";
import Table from "./Table";

export default function Index() {
  const { isLoading } = useTeam();
  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General title="Team Data">
          <div className="flex flex-col gap-6">
            <div className="flex justify-end">
              <NavLink to="/data-entry/user-data/team/add">
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
