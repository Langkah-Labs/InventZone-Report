import React from "react";
// components
import BaseLayout from "../../../components/BaseLayout";

export default function Index(props: any) {
  return (
    <>
      <BaseLayout>
        {/* <div className="mb-2">
          <h1 className="text-[32px] text-primary">Field Data</h1>
        </div>
        <hr /> */}
        <div>{props.children}</div>
      </BaseLayout>
    </>
  );
}
