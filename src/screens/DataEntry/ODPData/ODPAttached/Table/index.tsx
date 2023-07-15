import React from "react";
// dependencies
import { NavLink } from "react-router-dom";
import { MdDeleteForever, MdUpdate } from "react-icons/md";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useODPAttached } from "../hooks";

interface DataType {
  key: string;
  no: number;
  nfcId: string;
  name: string;
  capacity: string;
  attachedDate: string;
  tags: string[];
}

export default function Index() {
  const { deleteHandler } = useODPAttached();

  const columns: ColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
    },
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
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      align: "center",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = "green";
            if (tag === "NOT USED") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
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
            to={`/data-entry/field-data/odp-attached/update/1`}
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

  const data: DataType[] = [
    {
      key: "1",
      no: 1,
      nfcId: "347GSFEFO7888BNBNB",
      name: "ODP - 1",
      capacity: "8",
      attachedDate: "4 July 2023",
      tags: ["Utilized"],
    },
    {
      key: "2",
      no: 2,
      nfcId: "GHTTWIW23402232390",
      name: "ODP - 2",
      capacity: "8",
      attachedDate: "4 July 2023",
      tags: ["NOT USED"],
    },
    {
      key: "3",
      no: 3,
      nfcId: "FGTTFF90340287HY90",
      name: "ODP - 3",
      capacity: "8",
      attachedDate: "4 July 2023",
      tags: ["Utilized"],
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />
    </div>
  );
}
