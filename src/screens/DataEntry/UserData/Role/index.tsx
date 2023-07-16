import React, { useState, useEffect } from "react";
// dependencies
import axios from "axios";
// import _ from "lodash";
import { NavLink } from "react-router-dom";
import { MdDeleteForever, MdUpdate } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import swal from "sweetalert";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
// components
import General from "../../General";
import Spinner from "../../../../components/Spinner";

interface DataType {
  key: string;
  no: number;
  name: string;
}

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchValues, setSearchValues] = useState<any>("");

  const columns: ColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
    },
    {
      title: "Role Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <NavLink
            to={`/data-entry/user-data/role/update/1`}
            className="rounded bg-green-500 px-4 flex justify-center items-center gap-1 hover:opacity-75 hover:transition-opacity"
          >
            <MdUpdate />
            Update
          </NavLink>
          <button
            className="rounded text-red-500 px-4 flex items-center justify-center gap-1 hover:opacity-75 hover:transition-opacity"
            onClick={() => {
              deleteHandler("1");
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
      name: "Administrator",
    },
    {
      key: "2",
      no: 2,
      name: "Super Admin",
    },
    {
      key: "3",
      no: 3,
      name: "Staff",
    },
    {
      key: "4",
      no: 4,
      name: "Field - Opearation",
    },
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const deleteHandler = async (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: ["Cancel", "Yes"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        setIsLoading(true);
        await axios.delete(`https://dummyjson.com/users/${id}`).then(() =>
          swal({
            title: "Deleted!",
            text: "Poof! Your record has been deleted!",
            icon: "success",
          }).then(() => window.location.reload())
        );
      } else {
        swal("Your record is safe!");
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <General title="Role Data">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <input
                type="text"
                name="searchValues"
                placeholder="Search.."
                className="w-1/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                value={searchValues}
                onChange={(e) => setSearchValues(e.target.value)}
              />
              <NavLink to="/data-entry/user-data/role/add">
                <div className="border border-primary text-primary rounded-md flex gap-2 justify-center items-center py-1 px-2 hover:bg-primary hover:text-white">
                  <IoIosAddCircle />
                  Tambah Data
                </div>
              </NavLink>
            </div>
            <div>
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 2 }}
              />
            </div>
          </div>
        </General>
      )}
    </>
  );
}
