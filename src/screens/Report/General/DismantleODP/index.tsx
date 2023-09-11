import React from "react";
// dependencies
import { useDismantleODP } from "./hooks";
// components
import General from "../../General";
import Spinner from "../../../../components/Spinner";
import BarChart from "./BarChart";
import SumamaryCard from "./SummaryCard";

export default function Index() {
  const { isLoading, totalProduct, totalDismantle, avgDismantle } =
    useDismantleODP();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General>
          <div>
            <div className="flex justify-center items-center gap-4 sm:flex-col xs:flex-col">
              <SumamaryCard
                title="Total ODP"
                description="Number of ALL ODP"
                total={totalProduct}
              />
              <SumamaryCard
                title="Total Dismantle"
                description="Number of Dismantle ODP"
                total={totalDismantle}
              />
              <SumamaryCard
                title="Avg. Dismantle per day"
                description="Average of dismantle ODP per day"
                total={avgDismantle}
              />
            </div>
            <div className="mt-12 flex flex-col gap-12 rounded-md shadow-md border border-softwhite p-12">
              <div>
                <h2 className="text-[28px] text-[#113A5D] underline underline-offset-4 sm:text-[20px] xs:text-[20px]">
                  <b>ODP Moving Average</b>
                </h2>
                <h5 className="sm:text-[10px] xs:text-[10px] text-gray-600">
                  The movement of the <b>number of ODP</b> every time based on
                  the amount of demolition
                </h5>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="flex flex-col gap-2 w-full">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>
        </General>
      )}
    </>
  );
}
