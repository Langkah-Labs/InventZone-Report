import { useState, useEffect } from "react";
// dependencies
// import axios from "axios";
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

export const useDismantleODP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalProduct, setTotalProduct] = useState<number>(0);
  const [totalDismantle, setTotalDismantle] = useState<number>(0);
  const [avgDismantle, setAvgInstalled] = useState<number>(0);

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
  }, []);

  return {
    isLoading,
    totalProduct,
    totalDismantle,
    avgDismantle,
  };
};

export default useDismantleODP;
