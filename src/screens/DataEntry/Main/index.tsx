import React, { useState, useEffect } from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { AiOutlineUsergroupDelete, AiOutlineBoxPlot } from "react-icons/ai";
// components
import General from "../General";
import Spinner from "../../../components/Spinner";

export default function Index(props: any) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <General title="Operation Data">
          <div>
            <div className="flex justify-center items-center gap-6">
              <NavLink
                to="/data-entry/field-data/nfc"
                className="flex flex-col border border-primary rounded-md p-4 w-40 h-32 justify-center text-[16px] text-primary hover:bg-primary hover:text-white"
              >
                <h2 className="flex flex-col gap-2 items-center">
                  <AiOutlineBoxPlot />
                  ODP Data
                </h2>
              </NavLink>
              <NavLink
                to="/"
                className="flex flex-col border border-primary rounded-md p-4 w-40 h-32 justify-center text-[16px] text-primary hover:bg-primary hover:text-white"
              >
                <h2 className="flex flex-col gap-2 items-center">
                  <AiOutlineUsergroupDelete />
                  User Data
                </h2>
              </NavLink>
            </div>
          </div>
        </General>
      )}
    </>
  );
}
