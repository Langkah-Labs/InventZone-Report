import React from "react";
// components
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function index(props: any) {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <div className="fixed left-0 h-full">
            <Sidebar />
          </div>
          <div className="p-8 w-5/6 h-full relative left-60">
            {props.children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
