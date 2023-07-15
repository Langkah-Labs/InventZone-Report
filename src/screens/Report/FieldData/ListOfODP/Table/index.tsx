import React from "react";
// dependencies
// import { mock_data } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CgDetailsMore } from "react-icons/cg";

interface DataType {
  key: string;
  no: number;
  odpId: string;
  capacity: string;
  opticalPower: string;
  installedDate: string;
  location: string;
}
export default function index() {
  const columns: ColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
    },
    {
      title: "ODP ID",
      dataIndex: "odpId",
      key: "odpId",
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
      dataIndex: "opticalPower",
      key: "opticalPower",
      align: "center",
      render: (_, { opticalPower }) => <>{opticalPower} dBm</>,
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
          <a
            href={location}
            className="text-error underline underline-offset-4"
          >
            View Location
          </a>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <NavLink
            to={`/report/field-data/list-customer`}
            className="rounded bg-green-500 px-4 flex justify-center items-center gap-1 hover:opacity-75 hover:transition-opacity text-error underline underline-offset-4"
          >
            <CgDetailsMore />
            Detail
          </NavLink>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      no: 1,
      odpId: "ODP - 1",
      capacity: "8",
      opticalPower: "-19",
      installedDate: "04 July 2023",
      location: "Senayan, West Jakarta",
    },
    {
      key: "2",
      no: 2,
      odpId: "ODP - 2",
      capacity: "8",
      opticalPower: "-21",
      installedDate: "04 July 2023",
      location: "Fatmawati, South Jakarta",
    },
    {
      key: "3",
      no: 3,
      odpId: "ODP - 3",
      capacity: "8",
      opticalPower: "-22",
      installedDate: "04 July 2023",
      location: "Kemang, South Jakarta",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />
    </div>
  );
}
