import React from "react";
// dependencies
import { useInstalledODP } from "./hooks";
// components
import General from "../../General";
import Spinner from "../../../../components/Spinner";
import PieChart from "./PieChart";
import MapChart from "./MapChart";
import SummaryCard from "./SummaryCard";

export default function Index() {
  const { isLoading } = useInstalledODP();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <General>
          <div>
            <div className="flex justify-center items-center gap-4">
              <SummaryCard
                title="Total ODP"
                description="Number of All ODP"
                total={8}
              />
              <SummaryCard
                title="Total Installed"
                description="Number of installed ODP"
                total={5}
              />
              <SummaryCard
                title="Avg. Installed per day"
                description="Average of installed ODP per day"
                total={2}
              />
            </div>
            <div className="mt-12 flex flex-col gap-12 rounded-md shadow-md border border-softwhite p-12">
              <div>
                <h2 className="text-[28px] underline underline-offset-4">
                  <b>ODP Classification</b>
                </h2>
                <h5>
                  ODP has been classified based on the amount of&nbsp;
                  <b>port usage</b> that has been used
                </h5>
              </div>
              <div className="flex justify-center items-start gap-2">
                <div className="w-6/12">
                  <PieChart />
                </div>
                <div className="flex flex-col gap-2 w-4/12 border border-softwhite rounded-md p-4 text-[12px]">
                  <h2 className="underline underline-offset-4">Notes:</h2>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-2 font-bold">
                      <li>High Port: </li>
                      <li>Medium Port: </li>
                      <li>Low Port: </li>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span>Port Capacity &gt;= 8</span>
                      <span>Port Capacity &lt; 8 and &gt;= 4 </span>
                      <span>Port Capacity &lt; 4</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h5>
                    ODP Classification has been&nbsp;
                    <b>mapped and visualized by using the icon</b> to get more
                    visualization information.
                  </h5>
                </div>
                <div className="w-full h-[600px] rounded-md shadow-md border-softwhite">
                  <MapChart />
                </div>
              </div>
            </div>
          </div>
        </General>
      )}
    </>
  );
}
