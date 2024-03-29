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
  const {
    isLoading,
    totalProduct,
    totalInstalled,
    avgInstalled,
    classificationData,
  } = useInstalledODP();

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
              <SummaryCard
                title="Total ODP"
                description="Number of All ODP"
                total={totalProduct}
              />
              <SummaryCard
                title="Total Installed"
                description="Number of installed ODP"
                total={totalInstalled}
              />
              <SummaryCard
                title="Avg. Installed per day"
                description="Average of installed ODP per day"
                total={avgInstalled}
              />
            </div>
            <div className="mt-12 flex flex-col gap-12 rounded-md shadow-md border border-softwhite p-12">
              <div>
                <h2 className="text-[28px] text-[#113A5D] underline underline-offset-4 sm:text-[20px] xs:text-[20px]">
                  <b>ODP Classification</b>
                </h2>
                <h5 className="sm:text-[10px] xs:text-[10px] text-gray-600">
                  ODP has been classified based on the amount of&nbsp;
                  <b>port usage</b> that has been used
                </h5>
              </div>
              <div className="flex justify-center items-start gap-2 sm:flex-col xs:flex-col">
                <div className="w-6/12 sm:w-full xs:w-full">
                  <PieChart dataSource={classificationData} />
                </div>
                <div className="flex flex-col gap-2 w-4/12 border border-softwhite rounded-md p-4 text-[12px] sm:w-full xs:w-full">
                  <h2 className="underline underline-offset-4">Notes:</h2>
                  <div className="flex items-center gap-4 sm:text-[6px] xs:text-[6px]">
                    <div className="flex flex-col gap-2 font-bold text-gray-600">
                      <li>High Port: </li>
                      <li>Medium Port: </li>
                      <li>Low Port: </li>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-400">
                      <span>Port Capacity &gt;= 8</span>
                      <span>Port Capacity &lt; 8 and &gt;= 4 </span>
                      <span>Port Capacity &lt; 4</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h5 className="sm:text-[10px] xs:text-[10px] text-gray-600">
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
