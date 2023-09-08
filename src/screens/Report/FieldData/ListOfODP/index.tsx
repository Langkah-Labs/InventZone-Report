import React from "react";
// dependencies
// import _ from "lodash";
import { useListofODP } from "./hooks";
// components
import FieldData from "../../FieldData";
import Spinner from "../../../../components/Spinner";
import Table from "./Table";
// assets
// import s from "./list_odp.module.scss";

export default function Index() {
  const { isLoading, searchValues, setSearchValues } = useListofODP();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <FieldData>
          <div className="flex flex-col gap-6">
            {/* <div className="flex items-start">
              <input
                type="text"
                name="searchValues"
                placeholder="Search.."
                className="w-1/5 h-[44px] px-3 py-4 text-[14px] rounded-md border sm:w-2/5 xs:w-2/5"
                value={searchValues}
                onChange={(e) => setSearchValues(e.target.value)}
              />
            </div> */}
            <div className="w-full">
              <Table />
            </div>
          </div>
        </FieldData>
      )}
    </>
  );
}
