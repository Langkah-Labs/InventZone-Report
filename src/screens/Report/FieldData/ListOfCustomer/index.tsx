import React, { useState, useEffect } from "react";
// dependencies
// import axios from "axios";
// import _ from "lodash";
import { NavLink } from "react-router-dom";
import { ImBackward2 } from "react-icons/im";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
// components
import FieldData from "../../FieldData";
import Spinner from "../../../../components/Spinner";

interface DataType {
  key: string;
  no: number;
  name: string;
  customerId: string;
  address: string;
  installationDate: string;
  service: string;
}

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  const columns: ColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
    },
    {
      title: "Customer ID",
      dataIndex: "customerId",
      key: "customerId",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "Installation Date",
      dataIndex: "installationDate",
      key: "installationDate",
      align: "center",
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      align: "center",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      no: 1,
      customerId: "CUST-1",
      name: "Bryan",
      address: "Perumahan BRI",
      installationDate: "04 July 2023",
      service: "Gold",
    },
    {
      key: "2",
      no: 2,
      customerId: "CUST-2",
      name: "Greg",
      address: "Cilandak",
      installationDate: "05 July 2023",
      service: "Silver",
    },
    {
      key: "3",
      no: 3,
      customerId: "CUST-3",
      name: "Dyana",
      address: "Kalibata City",
      installationDate: "05 July 2023",
      service: "Gold",
    },
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <FieldData>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-2">
              <NavLink
                to={"/report/field-data/list-odp"}
                className="text-error underline underline-offset-2 flex items-center gap-1"
              >
                <ImBackward2 />
                Back
              </NavLink>
              <h2 className="underline underline-offset-2">
                <b>ODP Info</b>
              </h2>
              <li>
                ODP ID: <b>2376GHFHWD12</b>
              </li>
              <li>
                Capacity: <b>8 port</b>
              </li>
              <li>
                Location: <b>Pamulang, South Tangerang</b>
              </li>
            </div>
            <div>
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 16 }}
              />
            </div>
          </div>
        </FieldData>
      )}
    </>
  );
}
