import React from "react";
// components
import BaseLayout from "../../../components/BaseLayoutReport";

export default function Index(props: any) {
  return (
    <>
      <BaseLayout>
        <div className="mb-2">
          <h1 className="text-[32px] text-[#113A5D]">
            <b>Field Data</b>
          </h1>
        </div>
        <hr />
        <div className="py-12">{props.children}</div>
      </BaseLayout>
    </>
  );
}
