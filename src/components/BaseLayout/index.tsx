import React from "react";
// components
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function index(props: any) {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}
