import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useUser } from "../hooks";
// components
import General from "../../../General";
import Spinner from "../../../../../components/Spinner";

export default function Index() {
  const {
    isLoading,
    values,
    listRolesValues,
    listTeamValues,
    setValues,
    submitHandler,
  } = useUser();
  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General title="User Data">
          <div>
            <form onSubmit={submitHandler}>
              <div className="flex flex-col gap-4 mb-16">
                <input
                  type="text"
                  name="userName"
                  placeholder="Name"
                  className="w-4/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.userName}
                  onChange={(e) =>
                    setValues({ ...values, userName: e.target.value })
                  }
                />
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Email"
                  className="w-4/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.userEmail}
                  onChange={(e) =>
                    setValues({ ...values, userEmail: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="userPhone"
                  placeholder="Phone Number"
                  className="w-4/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.userPhone}
                  onChange={(e) =>
                    setValues({ ...values, userPhone: e.target.value })
                  }
                />
                <select
                  name="userTeam"
                  className="w-4/5 h-[44px] px-3 text-[14px] rounded-md border"
                  onChange={(e) =>
                    setValues({ ...values, userTeam: e.target.value })
                  }
                  value={values.userTeam}
                >
                  <option value="" disabled>
                    Select your Team
                  </option>
                  {listTeamValues.map((item: any, i: number) => (
                    <option value={item.$id} key={i}>{item.name}</option>
                  ))}
                </select>
                <select
                  name="userRole"
                  className="w-4/5 h-[44px] px-3 text-[14px] rounded-md border"
                  onChange={(e) =>
                    setValues({ ...values, userRole: e.target.value })
                  }
                  value={values.userRole}
                >
                  <option value="" disabled>
                    Select your Role
                  </option>
                  {listRolesValues.map((item: any, i: number) => (
                    <option value={item.name} key={i}>{item.name}</option>
                  ))}
                </select>
              </div>
              <hr />
              <div className="flex justify-start items-center gap-1">
                <NavLink
                  to="/data-entry/user-data/user"
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
