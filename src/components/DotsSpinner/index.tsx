import React from "react";
// dependencies
import { ThreeDots } from "react-loader-spinner";

export default function index() {
  return (
    <div className="flex justify-center items-center h-full">
      <ThreeDots
        height="24"
        width="24"
        color="#ffffff"
        ariaLabel="three-dots-loading"
        radius="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
