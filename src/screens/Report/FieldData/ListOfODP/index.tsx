import React from "react";
// dependencies
import { useListofODP } from "./hooks";
// components
import FieldData from "../../FieldData";
import Spinner from "../../../../components/Spinner";
import Table from "./Table";
// assets
import s from "./list_odp.module.scss";

export default function Index() {
  const { isLoading } = useListofODP();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <FieldData>
          <div className={`${s.list_odp} flex flex-col gap-6`}>
            <div className="w-full">
              <Table />
            </div>
          </div>
        </FieldData>
      )}
    </>
  );
}
