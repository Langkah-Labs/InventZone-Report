import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdDeleteForever, MdUpdate } from "react-icons/md";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useODPAttached } from "../hooks";
import dayjs from "dayjs";
// components
import Spinner from "../../../../../components/Spinner";

interface DataType {
  $id: string;
  nfcId: string;
  name: string;
  capacity: string;
  attachedDate: string;
  $createdAt: string;
}

export default function Index() {
  const { listValues, isLoading, deleteHandler } = useODPAttached();

  const columns: ColumnsType<DataType> = [
    {
      title: "NFC ID",
      dataIndex: "nfcId",
      key: "nfcId",
      align: "center",
    },
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
      title: "Attached Date",
      dataIndex: "attachedDate",
      key: "attachedDate",
      align: "center",
      render: (_, record) => (
        <>{dayjs(record.$createdAt).format("DD-MM-YYYY")}</>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <NavLink
            to={`/data-entry/field-data/odp-attached/update/${record.$id}`}
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
