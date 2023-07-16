import React from "react";
// dependencies
import { useDismantleODP } from "./hooks";
// components
import General from "../../General";
import Spinner from "../../../../components/Spinner";
import BarChart from "./BarChart";
import SumamaryCard from "./SummaryCard";

export default function Index() {
  const { isLoading } = useDismantleODP();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General>
          <div>
            <div className="flex justify-center items-center gap-4">
              <SumamaryCard
                title="Total ODP"
                description="Number of ALL ODP"
                total={8}
              />
              <SumamaryCard
                title="Total Dismantle"
                description="Number of Dismantle ODP"
                total={4}
              />
              <SumamaryCard
                title="Avg. Dismantle per day"
                description="Average of dismantle ODP per day"
                total={1}
              />
            </div>
            <div className="mt-12 flex flex-col gap-12 rounded-md shadow-md border border-softwhite p-12">
              <div>
                <h2 className="text-[28px] underline underline-offset-4">
                  <b>ODP Moving Average</b>
                </h2>
                <h5>
                  The movement of the <b>number of ODP</b> every time based on
                  the amount of demolition
                </h5>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="flex flex-col gap-2 w-6/12">
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
