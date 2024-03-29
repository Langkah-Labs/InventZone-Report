import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdDeleteForever, MdUpdate } from "react-icons/md";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useODP } from "../hooks";
//components
import Spinner from "../../../../../components/Spinner";

interface DataType {
  $id: string;
  name: string;
  capacity: string;
  opticalPower: string;
}
export default function Index() {
  const { isLoading, listValues, deleteHandler } = useODP();

  const columns: ColumnsType<DataType> = [
    {
      title: "ODP Name",
      dataIndex: "name",
      key: "name",
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
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <NavLink
            to={`/data-entry/field-data/odp/update/${record.$id}`}
            className="rounded bg-green-500 px-4 flex justify-center items-center gap-1 hover:opacity-75 hover:transition-opacity"
          >
            <MdUpdate />
            Update
          </NavLink>
          <button
            className="rounded text-red-500 px-4 flex items-center justify-center gap-1 hover:opacity-75 hover:transition-opacity"
            onClick={() => {
              deleteHandler(`${record.$id}`);
            }}
          >
            <MdDeleteForever />
            <b>Delete</b>
          </button>
        </Space>
      ),
    },
  ];
  
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Table
            columns={columns}
            dataSource={listValues}
            pagination={{ pageSize: 2 }}
          />
        </div>
      )}
    </>
  );
}
