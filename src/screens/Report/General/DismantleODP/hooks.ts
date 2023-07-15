import { useState, useEffect } from "react";
// dependencies
// import axios from "axios";

export const useDismantleODP = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
  };
};

export default useDismantleODP;
