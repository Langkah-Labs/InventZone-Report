import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdDeleteForever, MdUpdate } from "react-icons/md";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useNFC } from "../hooks";
//components
import Spinner from "../../../../../components/Spinner";

interface DataType {
  $id: string;
  id: string;
  type: string;
  status: string;
  description: string;
}

export default function Index() {
  const { isLoading, listValues, deleteHandler } = useNFC();

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      align: "center",
    },
    {
      title: "Tags",
      key: "status",
      dataIndex: "status",
      render: (_, { status }: any) => {
        let color = "geekblue";
        let text = "Utilizied";
        if (status === false) {
          color = "volcano";
          text = "Not Utilizied";
          return <Tag color={color}>{text.toUpperCase()}</Tag>;
        }
        return <Tag color={color}>{text.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <NavLink
            to={`/data-entry/field-data/nfc/update/${record.$id}`}
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
