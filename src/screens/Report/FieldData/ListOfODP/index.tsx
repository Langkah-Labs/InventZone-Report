import React from "react";
// dependencies
// import _ from "lodash";
import { DatePicker } from "antd";
import { useListofODP } from "./hooks";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
// components
import FieldData from "../../FieldData";
import Spinner from "../../../../components/Spinner";
import Table from "./Table";
// assets
import s from "./list_odp.module.scss";

export default function Index() {
  const {
    isLoading,
    searchValues,
    setSearchValues,
    // onChangeDate,
    filterHandler,
  } = useListofODP();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <FieldData>
          <div className={`${s.list_odp} flex flex-col gap-6`}>
            <div className={`${s.list_odp_filter_search} flex items-center justify-between gap-2`}>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="searchValues"
                  placeholder="Search by ODP-ID"
                  className="w-60 h-[2rem] px-3 py-4 text-[13px] rounded-md border border-[#d9d9d9] sm:w-2/5 xs:w-2/5 placeholder:text-[#6b7280]"
                  value={searchValues}
                  onChange={(e) => setSearchValues(e.target.value)}
                />
                <button
                  onClick={filterHandler}
                  className="flex justify-center items-center gap-2 rounded-md border h-[2.2rem] px-3 py-1 text-[14px] bg-[#113A5D] text-white"
                >
                  <MagnifyingGlassIcon className="h-4" />
                  Search Data
                </button>
              </div>
              {/* <DatePicker
                onChange={onChangeDate}
                className="w-52 h-[2.1rem] bg-[#113A5D] !text-white placeholder:!text-white active:!text-white"
                placeholder="Filter by Installed Date"
              /> */}
            </div>
            <div className="w-full">
              <Table />
            </div>
          </div>
        </FieldData>
      )}
    </>
  );
}
