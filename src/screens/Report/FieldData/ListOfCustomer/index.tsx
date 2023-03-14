import React, { useState, useEffect } from "react";
// components
import FieldData from "../../FieldData";
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
        <FieldData>
          <div>
            <h2>List Customer</h2>
          </div>
        </FieldData>
      )}
    </>
  );
}
