import React from "react";
// components
import BaseLayout from "../../../components/BaseLayoutDataEntry";

interface props {
  title: string;
  children: string | JSX.Element | JSX.Element[];
}

export default function Index({title, children}: props) {
  return (
    <>
      <BaseLayout>
        <div className="mb-2">
          <h1 className="text-[32px] text-primary">{title}</h1>
        </div>
        <hr />
        <div className="py-12">{children}</div>
      </BaseLayout>
    </>
  );
}
