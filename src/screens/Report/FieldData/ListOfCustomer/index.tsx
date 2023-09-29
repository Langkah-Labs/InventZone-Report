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
  const { isLoading, info } = useListofCustomer();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <FieldData>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-2">
              <NavLink
                to={"/report/field-data/list-odp"}
                className="text-error underline underline-offset-2 flex items-center gap-1 text-red-400"
              >
                <ImBackward2 />
                Back
              </NavLink>
              <h2 className="underline underline-offset-2">
                <b>ODP Info</b>
              </h2>
              <li>ODP ID:&nbsp;{info[0].serial_number}</li>
              <li>Capacity:&nbsp;{info[0].capacity} port</li>
              <li>
                Location:&nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps?q=${info[0].latitude}, ${info[0].longitude}`}
                  className="underline underline-offset-4 text-cyan-500"
                >
                  View Location
                </a>
              </li>
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
