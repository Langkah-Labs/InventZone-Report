import { useState, useEffect } from "react";
// dependencies
// import axios from "axios";
import { mock_data } from "../../../../utils/constants";

export const useInstalledODP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mapData, setMapData] = useState([
    {
      odp_id: "",
      capacity: 0,
      capacity_after: 0,
      optical_power: 0,
      installation_date: "",
      location: "",
      lat: 0,
      long: 0,
    },
  ]);

  useEffect(() => {
    setIsLoading(false);
    setMapData(mock_data);
  }, []);

  return {
    isLoading,
    mapData,
  };
};

export default useInstalledODP;
