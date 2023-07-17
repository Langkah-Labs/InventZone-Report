import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useODPAttached } from "../hooks";
// components
import General from "../../../General";
import Spinner from "../../../../../components/Spinner";

export default function Index() {
  const {
    isLoading,
    values,
    listNFCValues,
    listODPValues,
    isDisabled,
    setValues,
    submitHandler,
  } = useODPAttached();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General title="ODP - Attached Data">
          <div>
            <form onSubmit={submitHandler}>
              <div className="flex flex-col gap-4 mb-16">
                <select
                  name="odpAttachedNFCId"
                  className="w-4/5 h-[44px] px-3 text-[14px] rounded-md border disabled:bg-softwhite disabled:border-softwhite"
                  onChange={(e) =>
                    setValues({ ...values, odpAttachedNFCId: e.target.value })
                  }
                  disabled={isDisabled}
                >
                  <option value="" disabled selected>
                    Select your NFC ID
                  </option>
                  {listNFCValues.map((item: any, i: number) => (
                    <option value={item.nfcId} key={i}>
                      {item.nfcId}
                    </option>
                  ))}
                </select>
                <select
                  name="odpAttachedODPName"
                  className="w-4/5 h-[44px] px-3 text-[14px] rounded-md border disabled:bg-softwhite disabled:border-softwhite"
                  onChange={(e) =>
                    setValues({ ...values, odpAttachedODPName: e.target.value })
                  }
                  disabled={isDisabled}
                >
                  <option value="" disabled selected>
                    Select your ODP Name
                  </option>
                  {listODPValues.map((item: any, i: number) => (
                    <option value={item.$id}>{item.name}</option>
                  ))}
                </select>
                <textarea
                  name="odpAttachedDesc"
                  placeholder="ODP - Attached Description"
                  className="w-4/5 h-[80px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.odpAttachedDesc}
                  onChange={(e) =>
                    setValues({ ...values, odpAttachedDesc: e.target.value })
                  }
                />
              </div>
              <hr />
              <div className="flex justify-start items-center gap-1">
                <NavLink
                  to="/data-entry/field-data/odp-attached"
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
