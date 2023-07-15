import { useState, useEffect } from "react";
// dependencies
// import axios from "axios";

export const useListofODP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchValues, setSearchValues] = useState<any>("");

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    searchValues,
    setSearchValues,
  };
};

export default useListofODP;
