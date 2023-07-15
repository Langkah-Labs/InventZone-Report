import { useState, useEffect } from "react";
// dependencies
// import axios from "axios";

export const useListofCustomer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
  };
};

export default useListofCustomer;
