import { useState, useEffect } from "react";
// dependencies
import { useSearchParams } from "react-router-dom";
import { graphqlRequest } from "../../../../utils/graphql";

const findAllCustomersbyIdQuery = `
  query GetHardwareInstallationsById($id: bigint!) {
    product_serials(where: {hardware_installation: {id: {_eq: $id}}}) {
      hardware_installation {
        id
        customers {
          address
          created_at
          customer_id
          hardware_installation_id
          id
          modem_serial_number
          port
          power_signal
          service
          updated_at
        }
      }
      serial_number
      capacity
      latitude
      longitude
    }
  }    
`;
interface DataType {
  key: string;
  no: number;
  customer_id: string;
  address: string;
  created_at: string;
  service: string;
}

export const useListofCustomer = () => {
  const [searchParams] = useSearchParams();
  const portId = searchParams.get("port");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataType[]>([]);
  const [info, setInfo] = useState<any[]>([]);

  useEffect(() => {
    setIsLoading(false);
    const fetch = async () => {
      setIsLoading(true);
      const res = await graphqlRequest.request<any>(findAllCustomersbyIdQuery, {
        id: portId,
      });
      if (res) {
        setData(res.product_serials[0].hardware_installation.customers);
        setInfo(res.product_serials);
        setIsLoading(false);
      }
    };
    fetch();
  }, [portId]);

  return {
    isLoading,
    data,
    info,
  };
};

export default useListofCustomer;
