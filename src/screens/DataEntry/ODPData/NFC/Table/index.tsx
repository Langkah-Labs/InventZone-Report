import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdDeleteForever, MdUpdate } from "react-icons/md";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useNFC } from "../hooks";
//components
import Spinner from "../../../../../components/Spinner";

interface DataType {
  $id: string;
  nfcId: string;
}

export default function Index() {
  const { isLoading, listValues, deleteHandler } = useNFC();
  console.log(listValues);

  const columns: ColumnsType<DataType> = [
    {
      title: "NFC ID",
      dataIndex: "nfcId",
      key: "nfcId",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <NavLink
            to={`/data-entry/field-data/nfc/update/${record}`}
            className="rounded bg-green-500 px-4 flex justify-center items-center gap-1 hover:opacity-75 hover:transition-opacity"
          >
            <MdUpdate />
            Update
          </NavLink>
          <button
            className="rounded text-red-500 px-4 flex items-center justify-center gap-1 hover:opacity-75 hover:transition-opacity"
            onClick={() => {
              deleteHandler("347GSFEFO7888BNBNB");
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
