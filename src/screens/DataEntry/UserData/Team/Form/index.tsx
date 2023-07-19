import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useTeam } from "../hooks";
// components
import General from "../../../General";
import Spinner from "../../../../../components/Spinner";

export default function Index() {
  const { isLoading, values, setValues, submitHandler } = useTeam();
  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General title="Team Data">
          <div>
            <form onSubmit={submitHandler}>
              <div className="flex flex-col gap-4 mb-16">
                <input
                  type="text"
                  name="teamName"
                  placeholder="Team Name"
                  className="w-4/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.teamName}
                  onChange={(e) =>
                    setValues({ ...values, teamName: e.target.value })
                  }
                />
              </div>
              <hr />
              <div className="flex justify-start items-center gap-1">
                <NavLink
                  to="/data-entry/user-data/team"
                  className="bg-error px-4 py-1 rounded text-white flex justify-center items-center gap-2 mt-4 hover:opacity-75 hover:transition-opacity"
                >
                  Cancel
                  <MdCancel />
                </NavLink>
                <button
                  type="submit"
                  className="bg-primary px-4 py-1 rounded text-white flex justify-center items-center gap-2 mt-4 hover:opacity-75 hover:transition-opacity"
                >
                  Submit
                  <BsBoxArrowInRight />
                </button>
              </div>
            </form>
          </div>
        </General>
      )}
    </>
  );
}
