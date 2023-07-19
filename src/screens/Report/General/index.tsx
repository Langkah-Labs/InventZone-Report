import React from "react";
// components
import BaseLayout from "../../../components/BaseLayoutReport";

export default function Index(props: any) {
  return (
    <>
      <BaseLayout>
        <div className="mb-2">
          <h1 className="text-[32px] text-primary">
            <b>General Report</b>
          </h1>
        </div>
        <hr />
        <div className="py-12">{props.children}</div>
      </BaseLayout>
    </>
  );
}
