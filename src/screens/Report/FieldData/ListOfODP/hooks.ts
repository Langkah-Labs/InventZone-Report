import { useState, useEffect } from "react";
// dependencies
import { graphqlRequest } from "../../../../utils/graphql";
import type { DatePickerProps } from "antd";

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

const findProductByIdQuery = `
  query GetProductSerialsById($serial_number: String!) {
    product_serials(where: {serial_number: {_iregex: $serial_number}}) {
      capacity
      capacity_remaining
      id
      port_id
      product_id
      attachment
      central_office
      latitude
      longitude
      optical_power
      serial_number
      description
      created_at
      installed_at
      updated_at
    }
  }
`;

const findProductByDateQuery = `
query GetProductSerialsById($installed_at: timestamptz!) {
  product_serials(where: {installed_at: {_eq: $installed_at}}) {
    capacity
    capacity_remaining
    id
    port_id
    product_id
    attachment
    central_office
    latitude
    longitude
    optical_power
    serial_number
    description
    created_at
    installed_at
    updated_at
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
  const [dataSearch, setDataSearch] = useState<DataType[]>([]);

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

  // useEffect(() => {
  //   setIsLoading(true);
  //   const res = data.filter((item) =>
  //     item.serial_number.toLowerCase().includes(searchValues.toLowerCase())
  //   );
  //   console.log(res);

  //   setDataSearch(res);
  //   setIsLoading(false);
  // }, [searchValues, data]);

  const filterHandler = async () => {
    setIsLoading(true);
    const res = await graphqlRequest.request<any>(findProductByIdQuery, {
      serial_number: searchValues,
    });
    if (res) {
      setData(res.product_serials);
      setDataSearch(res.product_serials);
      setIsLoading(false);
    }
  };

  // const onChangeDate: DatePickerProps["onChange"] = async (
  //   date,
  //   dateString
  // ) => {
  //   console.log(dateString);

  //   const res = await graphqlRequest.request<any>(findProductByDateQuery, {
  //     installed_at: dateString,
  //   });
  //   if (res) {
  //     console.log(res);

  //     setData(res.product_serials);
  //     setDataSearch(res.product_serials);
  //     setIsLoading(false);
  //   }
  // };

  return {
    data,
    isLoading,
    searchValues,
    dataSearch,
    setSearchValues,
    // onChangeDate,
    filterHandler,
  };
};

export default useListofODP;
