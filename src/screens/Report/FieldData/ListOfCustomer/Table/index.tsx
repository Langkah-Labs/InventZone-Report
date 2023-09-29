import React from "react";
// dependencies
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useListofCustomer } from "../hooks";
import dayjs from "dayjs";
// components
import Spinner from "../../../../../components/Spinner";

interface DataType {
  key: string;
  no: number;
  customer_id: string;
  address: string;
  created_at: string;
  service: string;
}
export default function Index() {
  const { data, isLoading } = useListofCustomer();

  const columns: ColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Customer ID",
      dataIndex: "customer_id",
      key: "customer_id",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "Installation Date",
      dataIndex: "created_at",
      key: "created_at",
      align: "center",
      render: (_, { created_at }) => (
        <>
          {created_at ? (
            <>{dayjs(created_at).format("DD-MM-YYYY")}</>
          ) : (
            <div>-</div>
          )}
        </>
      ),
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      align: "center",
    },
  ];

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="overflow-scroll">
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 4 }}
            rowKey="id"
          />
        </div>
      )}
    </>
  );
}
