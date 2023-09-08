import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CgDetailsMore } from "react-icons/cg";
import { useListofODP } from "../hooks";
// components
import Spinner from "../../../../../components/Spinner";

interface DataType {
  key: string;
  no: number;
  serial_number: string;
  capacity: number;
  optical_power: string;
  installedDate: string;
  location: string;
}
export default function Index() {
  const { data, isLoading } = useListofODP();

  const columns: ColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
      render: (text, record, index) => index + 1,
    },
    {
      title: "ODP ID",
      dataIndex: "serial_number",
      key: "serial_number",
      align: "center",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
      align: "center",
      render: (_, { capacity }) => <>{capacity} port</>,
    },
    {
      title: "Optical Power",
      dataIndex: "optical_power",
      key: "optical_power",
      align: "center",
      render: (_, { optical_power }) => <>{optical_power} dBm</>,
    },
    {
      title: "Installed Data",
      dataIndex: "installedDate",
      key: "installedDate",
      align: "center",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      align: "center",
      render: (_, { location }) => (
        <>
          {location ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/maps?q=${location}`}
              className="text-error underline underline-offset-4"
            >
              View Location
            </a>
          ) : (
            <div>No Location</div>
          )}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          {record.capacity !== 0 ? (
            <NavLink
              to={`/report/field-data/list-customer`}
              className="rounded text-sky-600 px-4 flex justify-center items-center gap-1 hover:opacity-75 hover:transition-opacity text-error underline underline-offset-4"
            >
              <CgDetailsMore />
              Detail
            </NavLink>
          ) : (
            <div>No Detail Data</div>
          )}
        </Space>
      ),
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
            pagination={{ pageSize: 3 }}
            rowKey="id"
          />
        </div>
      )}
    </>
  );
}
