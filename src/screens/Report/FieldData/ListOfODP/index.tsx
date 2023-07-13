import React, { useState, useEffect } from "react";
// dependencies
import ReactPaginate from "react-paginate";
import _ from "lodash";
import { mock_data } from "../../../../utils/constants";
import { NavLink } from "react-router-dom";
// components
import FieldData from "../../FieldData";
import Spinner from "../../../../components/Spinner";
// assets
import s from "./list_odp.module.scss";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 2;

  const handlePageClick = ({ selected: selectedPage }: any) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;
  const currentPageData = mock_data.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(mock_data.length / PER_PAGE);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <FieldData>
          <div className={`${s.list_odp}`}>
            <div>
              <div className="w-full flex justify-start gap-8 items-center mb-4 sm:w-[20rem] xs:w-[20rem]">
                <div>
                  <h1 className="text-[32px] text-primary sm:text-2xl xs:text-2xl">
                    LIST OF ODP
                  </h1>
                </div>
                <div className="flex justify-end">
                  <input
                    type="text"
                    name="name"
                    placeholder="Search by ODP ID"
                    className="w-full sm:w-10/12 xs:w-10/12 sm:placeholder:text-[10px] xs:placeholder:text-[10px]"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="mt-4 w-full">
                  <table className="table-auto w-full text-[12px] sm:text-[8px] xs:text-[8px]">
                    <thead className="h-[42px] sm:text-[8px] xs:text-[8px]">
                      <tr>
                        <th>No</th>
                        <th>ODP ID</th>
                        <th>Capacity</th>
                        <th>Optical Power</th>
                        <th>Installation Date</th>
                        <th>Location</th>
                        <th>Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!_.isEmpty(searchValue)
                        ? mock_data
                            .filter((item: any) =>
                              item.odp_id.toLowerCase().includes(searchValue)
                            )
                            .map((item, i) => (
                              <tr key={i}>
                                <td className="text-center">{item._id}</td>
                                <td>{item.odp_id}</td>
                                <td>{item.capacity} port</td>
                                <td>{item.optical_power} dBm</td>
                                <td>{item.installation_date}</td>
                                <td>
                                  <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://www.google.com/maps/?q=${item.location}`}
                                  >
                                    <u>View on map</u>
                                  </a>
                                </td>
                                <td>
                                  <NavLink
                                    to="/report/field-data/list-customer"
                                    className="text-primary"
                                  >
                                    Detail
                                  </NavLink>
                                </td>
                              </tr>
                            ))
                        : currentPageData.map((item, i) => (
                            <tr key={i}>
                              <td className="text-center">{item._id}</td>
                              <td>{item.odp_id}</td>
                              <td>{item.capacity} port</td>
                              <td>{item.optical_power} dBm</td>
                              <td>{item.installation_date}</td>
                              <td>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={`https://www.google.com/maps/?q=${item.location}`}
                                >
                                  <u>View on map</u>
                                </a>
                              </td>
                              <td>
                                <NavLink
                                  to="/report/field-data/list-customer"
                                  className="text-primary"
                                >
                                  Detail
                                </NavLink>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {_.isEmpty(searchValue) && (
                <div className="flex justify-center mt-4">
                  <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    activeClassName={"paginationActive"}
                    previousClassName={"previous"}
                    nextClassName={"next"}
                    initialPage={0}
                    pageRangeDisplayed={5}
                  ></ReactPaginate>
                </div>
              )}
            </div>
          </div>
        </FieldData>
      )}
    </>
  );
}
