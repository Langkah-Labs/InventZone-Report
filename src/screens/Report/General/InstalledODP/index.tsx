import React, { useState, useEffect } from "react";
// components
import General from "../../General";
import Spinner from "../../../../components/Spinner";
import PieChart from "./PieChart";
import MapChart from "./MapChart";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <General>
          <div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex flex-col border border-primary rounded-md p-4 w-52">
                <h2 className="text-[16px] text-primary">Total ODP</h2>
                <span className="text-[28px] text-primary">8</span>
              </div>
              <div className="flex flex-col border border-primary rounded-md p-4 w-52">
                <h2 className="text-[16px] text-primary">Total Installed</h2>
                <span className="text-[28px] text-primary">4</span>
              </div>
              <div className="flex flex-col border border-primary rounded-md p-4 w-52">
                <h2 className="text-[16px] text-primary">
                  Avg. Installed per day
                </h2>
                <span className="text-[28px] text-primary">4</span>
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-12 rounded-md shadow-md border border-softwhite p-12">
              <div>
                <h2 className="text-[28px] underline underline-offset-4">
                  <b>ODP Classification</b>
                </h2>
                <h5>
                  ODP has been classified to level of <b>utilizied</b> by user
                </h5>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="flex flex-col gap-2 w-6/12">
                  <PieChart />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full h-[600px] border rounded-md shadow-md border-softwhite">
                <MapChart />
              </div>
            </div>
          </div>
        </General>
      )}
    </>
  );
}
