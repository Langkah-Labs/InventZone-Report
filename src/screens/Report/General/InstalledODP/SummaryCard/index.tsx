import React from "react";

interface Props {
  title: string;
  description: string;
  total: number;
}

export default function Index({ title, description, total }: Props) {
  return (
    <div className="flex flex-col border border-primary rounded-md p-4 w-60 gap-4">
      <div>
        <h2 className="text-[16px] text-primary">
          <b>{title}</b>
        </h2>
        <h5 className="text-[10px]">{description}</h5>
      </div>
      <span className="text-[28px] text-primary">{total}</span>
    </div>
  );
}
