import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useNFCForm } from "./hooks";
// components
import General from "../../../General";
import Spinner from "../../../../../components/Spinner";

export default function Index() {
  const { isLoading, values, setValues, submitHandler } = useNFCForm();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <General title="NFC Data">
          <div>
            <div className="text-[12px]">
              <h2>
                <b>How to get your NFC ID</b>
              </h2>
              <li>Prepare your NFC</li>
              <li>Scan your NFC using your NFC reader</li>
              <li>Get the NFC Serial Number</li>
              <li>Write the NFC Serial Number</li>
            </div>
            <form onSubmit={submitHandler}>
              <div className="flex flex-col gap-4 mb-16 mt-8">
                <input
                  type="text"
                  name="nfcId"
                  placeholder="NFC ID"
                  className="w-4/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.nfcId}
                  onChange={(e) =>
                    setValues({ ...values, nfcId: e.target.value })
                  }
                />
                <textarea
                  name="nfcDesc"
                  placeholder="NFC Description"
                  className="w-4/5 h-[80px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.nfcDesc}
                  onChange={(e) =>
                    setValues({ ...values, nfcDesc: e.target.value })
                  }
                />
              </div>
              <hr />
              <div className="flex justify-start items-center gap-1">
                <NavLink
                  to="/data-entry/field-data/nfc"
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
