import React from "react";
// dependencies
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  no: number;
  name: string;
  customerId: string;
  address: string;
  installationDate: string;
  service: string;
}
export default function Index() {
  const columns: ColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
    },
    {
      title: "Customer ID",
      dataIndex: "customerId",
      key: "customerId",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
      dataIndex: "installationDate",
      key: "installationDate",
      align: "center",
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      align: "center",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      no: 1,
      customerId: "CUST-1",
      name: "Bryan",
      address: "Perumahan BRI",
      installationDate: "04 July 2023",
      service: "Gold",
    },
    {
      key: "2",
      no: 2,
      customerId: "CUST-2",
      name: "Greg",
      address: "Cilandak",
      installationDate: "05 July 2023",
      service: "Silver",
    },
    {
      key: "3",
      no: 3,
      customerId: "CUST-3",
      name: "Dyana",
      address: "Kalibata City",
      installationDate: "05 July 2023",
      service: "Gold",
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 16 }}
      />
    </div>
  );
}
