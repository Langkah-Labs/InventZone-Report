import { useState, useEffect } from "react";
// dependencies
import { useSearchParams } from "react-router-dom";
import { graphqlRequest } from "../../../../utils/graphql";

const findAllCustomersbyIdQuery = `
  query GetHardwareInstallationsById($hardware_installation_id: String!) {
    product_serials(where: {hardware_installation: {hardware_installation_id: {_eq: $hardware_installation_id}}}) {
      serial_number
      capacity
      latitude
      longitude
    }
    customers(where: {hardware_installation_id: {_eq: $hardware_installation_id}}) {
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
        hardware_installation_id: portId,
      });
      if (res) {
        setData(res.customers);
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
