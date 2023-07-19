import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdDeleteForever, MdUpdate } from "react-icons/md";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useUser } from "../hooks";
// components
import Spinner from "../../../../../components/Spinner";

interface DataType {
  $id: string;
  name: string;
  email: string;
  roleName: string;
}

export default function Index() {
  const { isLoading, listValues, deleteHandler } = useUser();
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Role Name",
      dataIndex: "roleName",
      key: "roleName",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <NavLink
            to={`/data-entry/user-data/user/update/${record.$id}`}
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
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
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
