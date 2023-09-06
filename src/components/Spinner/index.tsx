import React from "react";
// dependencies
import { Grid } from "react-loader-spinner";

export default function index() {
  return (
    <div className="flex justify-center items-center h-full mt-4">
      <Grid
        height="120"
        width="120"
        color="#113A5D"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
