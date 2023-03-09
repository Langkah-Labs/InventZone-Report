import React from "react";

export default function index() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex justify-center gap-4 border border-primary rounded-md">
        <div className="bg-primary w-4/12"></div>
        <div className="p-8 flex flex-col">
          <h2 className="text-primary">
            <i><b>Hello!</b></i>
          </h2>
          <h5 className="text-tertiary">Lets Introduce,</h5>
        </div>
      </div>
    </div>
  );
}
