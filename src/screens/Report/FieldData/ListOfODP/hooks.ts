import { useState, useEffect } from "react";
// dependencies
import { graphqlRequest } from "../../../../utils/graphql";

const findAllProductsQuery = `
  query GetProductSerials {
    product_serials {
      capacity
      capacity_remaining
      id
      port_id
      product_id
      attachment
      latitude
      longitude
      optical_power
      serial_number
      description
      created_at
      installed_at
      updated_at
      hardware_installation {
        id
      }
    }
  }
`;
interface DataType {
  key: string;
  no: number;
  serial_number: string;
  capacity: number;
  optical_power: string;
  installed_at: string;
  latitude: string;
  longitude: string;
}

export const useListofODP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchValues, setSearchValues] = useState<any>("");
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    setIsLoading(false);
    const fetch = async () => {
      setIsLoading(true);
      const res = await graphqlRequest.request<any>(findAllProductsQuery, {});
      if (res) {
        setData(res.product_serials);
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return {
    data,
    isLoading,
    searchValues,
    setSearchValues,
  };
};

export default useListofODP;
