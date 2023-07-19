import React from "react";
// components
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function index(props: any) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Sidebar />
          <div className="p-8 w-screen">{props.children}</div>
        </div>
        <Footer />
        <Footer />
      </div>
    </div>
  );
}
