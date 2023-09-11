import { useState, useEffect } from "react";
// dependencies
// import axios from "axios";
import { mock_data } from "../../../../utils/constants";
import { graphqlRequest } from "../../../../utils/graphql";

const countAllProductsQuery = `
  query CountProductSerials {
    product_serials_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const useInstalledODP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalProduct, setTotalProduct] = useState<number>(0);
  const [totalInstalled, setTotalInstalled] = useState<number>(0);
  const [avgInstalled, setAvgInstalled] = useState<number>(0);
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
    const fetch = async () => {
      setIsLoading(true);
      const res = await graphqlRequest.request<any>(countAllProductsQuery, {});
      if (res) {
        setTotalProduct(res.product_serials_aggregate.aggregate.count);

        setIsLoading(false);
      }
    };
    fetch();
    setMapData(mock_data);
  }, []);

  return {
    totalProduct,
    totalInstalled,
    avgInstalled,
    isLoading,
    mapData,
  };
};

export default useInstalledODP;
