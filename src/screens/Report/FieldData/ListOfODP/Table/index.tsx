import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CgDetailsMore } from "react-icons/cg";
import { useListofODP } from "../hooks";
import dayjs from "dayjs";
import _ from "lodash";
// components
import Spinner from "../../../../../components/Spinner";

interface sourceHardware {
  id: string;
}

interface DataType {
  key: string;
  no: number;
  serial_number: string;
  capacity: number;
  optical_power: string;
  installed_at: string;
  latitude: string;
  longitude: string;
  hardware_installation: sourceHardware;
}
export default function Index() {
  const { data, isLoading, dataSearch, searchValues } = useListofODP();

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
      sorter: (a, b) => a.serial_number.length - b.serial_number.length,
      render: (serial_number) => serial_number,
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
      align: "center",
      render: (_, { capacity }) => <>{capacity} port</>,
      filters: [
        {
          text: "8 port",
          value: "8",
        },
        {
          text: "16 port",
          value: "16",
        },
      ],
      onFilter: (value: string, record) =>
        record.capacity.toString().indexOf(value) === 0,
    },
    {
      title: "Optical Power",
      dataIndex: "optical_power",
      key: "optical_power",
      align: "center",
      render: (_, { optical_power }) => <>{optical_power} dBm</>,
      filters: [
        {
          text: "-10 dBm",
          value: "-10",
        },
        {
          text: "-12 dBm",
          value: "-12",
        },
        {
          text: "-19 dBm",
          value: "-19",
        },
        {
          text: "-22 dBm",
          value: "-22",
        },
        {
          text: "-24 dBm",
          value: "-24",
        },
      ],
      onFilter: (value: string, record) =>
        record.optical_power.toString().indexOf(value) === 0,
    },
    {
      title: "Installed Date",
      dataIndex: "installed_at",
      key: "installed_at",
      align: "center",
      render: (_, { installed_at }) => (
        <>
          {installed_at ? (
            <>{dayjs(installed_at).format("DD-MM-YYYY")}</>
          ) : (
            <div>-</div>
          )}
        </>
      ),
      sorter: (a, b) =>
        new Date(a.installed_at).valueOf() - new Date(b.installed_at).valueOf(),
    },
    {
      title: "Location",
      dataIndex: "latitude",
      key: "latitude",
      align: "center",
      render: (_, { latitude, longitude }) => (
        <>
          {latitude || longitude ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/maps?q=${latitude}, ${longitude}`}
              className="underline underline-offset-4 text-cyan-500"
            >
              View Location
            </a>
          ) : (
            <div>-</div>
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
              to={`/report/field-data/list-customer?port=${record.hardware_installation?.id}`}
              className="rounded text-sky-600 px-4 flex justify-center items-center gap-1 hover:opacity-75 hover:transition-opacity text-error underline underline-offset-4"
            >
              <CgDetailsMore />
              Detail
            </NavLink>
          ) : (
            <div>-</div>
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
            dataSource={[...data]}
            // onChange={(pagination, filters, sorter, currentPageData) => /* save currentPageData to store */ currentPageData = dataSearch}
            pagination={{ pageSize: 3 }}
            rowKey="id"
          />
        </div>
      )}
    </>
  );
}
