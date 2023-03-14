import React from "react";
// components
import BaseLayout from "../../../components/BaseLayout";

export default function Index(props: any) {
  return (
    <>
      <BaseLayout>
        <div className="mb-2">
          <h1 className="text-[32px]">Field Data</h1>
        </div>
        <hr />
        <div className="py-12">{props.children}</div>
      </BaseLayout>
    </>
  );
}
