import React from "react";
// components
import Navigation from './Navigation'
import Footer from "./Footer";

export default function index(props: any) {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <div className="flex flex-col">
            <Navigation />
            <div className="p-8">{props.children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
