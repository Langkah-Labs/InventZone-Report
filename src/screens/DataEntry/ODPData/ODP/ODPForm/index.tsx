import React, { useState, useEffect } from "react";
// dependencies
import axios from "axios";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { MdCancel } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";
// components
import General from "../../../General";
import Spinner from "../../../../../components/Spinner";

export default function Index() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState<any>({
    odpId: "",
    odpName: "",
    odpCapacity: "",
    odpOpticalPower: "",
    odpDesc: "",
  });

  useEffect(() => {
    if (id) {
      setValues({
        odpId: id,
        odpName: "",
        odpCapacity: "",
        odpOpticalPower: "",
        odpDesc: "",
      });
    } else {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (id) {
      // console.log(values, "put");
      setIsLoading(true);
      await axios
        .put(`https://dummyjson.com/users/${id}`, values)
        .then(function (response) {
          // console.log(response, 'put');
          swal({
            title: "Success!",
            text: "Your data has been updated!",
            icon: "success",
          }).then(() => {
            navigate("/relawan");
          });
        })
        .catch(function (error) {
          // console.log(error, "put");
          swal({
            title: "Failed!",
            text: "Oops, something went wrong",
            icon: "error",
          });
        });
    } else {
      // console.log(values, "post");
      setIsLoading(true);
      await axios
        .post("https://dummyjson.com/users/add", values)
        .then(function (response) {
          // console.log(response, "post");
          swal({
            title: "Congratulations!",
            text: "Your submission has been saved!",
            icon: "success",
          }).then(() => {
            navigate("/relawan");
          });
        })
        .catch(function (error) {
          // console.log(error, "post");
          swal({
            title: "Failed!",
            text: "Oops, something went wrong",
            icon: "error",
          });
        });
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <General title="NFC Data">
          <div>
            <form onSubmit={submitHandler}>
              <div className="flex flex-col gap-4 mb-16">
                <input
                  type="text"
                  name="odpName"
                  placeholder="ODP Name"
                  className="w-4/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.odpName}
                  onChange={(e) =>
                    setValues({ ...values, odpName: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="odpCapacity"
                  placeholder="Capacity"
                  className="w-4/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.odpCapacity}
                  onChange={(e) =>
                    setValues({ ...values, odpCapacity: e.target.value })
                  }
                />
                <input
                  type="text"
                  name="odpOpticalPower"
                  placeholder="Optical Power"
                  className="w-4/5 h-[44px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.odpOpticalPower}
                  onChange={(e) =>
                    setValues({ ...values, odpOpticalPower: e.target.value })
                  }
                />
                <textarea
                  name="odpDeac"
                  placeholder="ODP Description"
                  className="w-4/5 h-[80px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.odpDeac}
                  onChange={(e) =>
                    setValues({ ...values, odpDeac: e.target.value })
                  }
                />
              </div>
              <hr />
              <div className="flex justify-start items-center gap-1">
                <NavLink
                  to="/data-entry/field-data/odp"
                  className="bg-error px-4 py-1 rounded text-white flex justify-center items-center gap-2 mt-4 hover:opacity-75 hover:transition-opacity"
                >
                  Cancel
                  <MdCancel />
                </NavLink>
                <button
                  type="submit"
                  className="bg-primary px-4 py-1 rounded text-white flex justify-center items-center gap-2 mt-4 hover:opacity-75 hover:transition-opacity"
                >
                  Submit
                  <BsBoxArrowInRight />
                </button>
              </div>
            </form>
          </div>
        </General>
      )}
    </>
  );
}
