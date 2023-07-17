import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useODP } from "../hooks";
// components
import General from "../../../General";
import Spinner from "../../../../../components/Spinner";

export default function Index() {
  const { isLoading, values, setValues, submitHandler } = useODP();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General title="NFC Data">
          <div>
            <form onSubmit={submitHandler}>
              <div className="flex flex-col gap-4 mb-16">
                <input
                  type="text"
                  name="odpName"
                  placeholder="ODP Name"
                  className="w-4/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.odpName}
                  onChange={(e) =>
                    setValues({ ...values, odpName: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="odpCapacity"
                  placeholder="Capacity"
                  className="w-4/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.odpCapacity}
                  onChange={(e) =>
                    setValues({ ...values, odpCapacity: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="odpOpticalPower"
                  placeholder="Optical Power"
                  className="w-4/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.odpOpticalPower}
                  onChange={(e) =>
                    setValues({ ...values, odpOpticalPower: e.target.value })
                  }
                />
                <textarea
                  name="odpDesc"
                  placeholder="ODP Description"
                  className="w-4/5 h-[80px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.odpDesc}
                  onChange={(e) =>
                    setValues({ ...values, odpDesc: e.target.value })
                  }
                />
              </div>
              <hr />
              <div className="flex justify-start items-center gap-1">
                <NavLink
                  to="/data-entry/field-data/odp"
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
