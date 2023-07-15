import React from "react";
// dependencies
// import _ from "lodash";
import { NavLink } from "react-router-dom";
import { ImBackward2 } from "react-icons/im";
import { useListofCustomer } from "./hooks";
// components
import FieldData from "../../FieldData";
import Spinner from "../../../../components/Spinner";
import Table from "./Table";

export default function Index() {
  const { isLoading } = useListofCustomer();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <FieldData>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-2">
              <NavLink
                to={"/report/field-data/list-odp"}
                className="text-error underline underline-offset-2 flex items-center gap-1"
              >
                <ImBackward2 />
                Back
              </NavLink>
              <h2 className="underline underline-offset-2">
                <b>ODP Info</b>
              </h2>
              <li>
                ODP ID: <b>2376GHFHWD12</b>
              </li>
              <li>
                Capacity: <b>8 port</b>
              </li>
              <li>
                Location: <b>Pamulang, South Tangerang</b>
              </li>
            </div>
            <Table />
          </div>
        </FieldData>
      )}
    </>
  );
}
