import React, { useState, useEffect } from "react";
// components
import General from "../../General";
import Spinner from "../../../../components/Spinner";

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
            <div className="flex justify-center items-center gap-4 mt-12">
              <div className="p-2 flex flex-col gap-2">
                <h4 className="text-[12px]">ODP Mapping</h4>
                <div>MAP bisa pake leaflet </div>
              </div>
              <div className="p-2 flex flex-col gap-2">
                <h4 className="text-[12px]">ODP Classification</h4>
                <div>Pie Chart paling lengkap bisa pake echart</div>
              </div>
            </div>
          </div>
        </General>
      )}
    </>
  );
}
