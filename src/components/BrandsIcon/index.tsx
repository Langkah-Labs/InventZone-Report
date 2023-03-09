import React from "react";
// assets
import s from "./brands_icon.module.scss";

export default function index() {
  return (
    <div className={`${s.brands} flex items-center gap-2`}>
      <div
        className="h-4 w-2 bg-primary
      rounded-tr-full rounded-br-full"
      ></div>
      <h2 className="text-[10px] text-tertiary tracking-wide">
        Invent<span className="text-secondary">Zone</span>
      </h2>
    </div>
  );
}
