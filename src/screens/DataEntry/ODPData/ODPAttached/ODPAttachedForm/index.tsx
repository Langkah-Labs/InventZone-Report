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
    odpAttachedNFCId: "",
    odpAttachedODPName: "",
    odpAttachedDate: "",
    odpAttachedDesc: "",
  });

  useEffect(() => {
    if (id) {
      setValues({
        odpAttachedNFCId: id,
        odpAttachedODPName: "",
        odpAttachedDate: "",
        odpAttachedDesc: "",
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
        <General title="ODP - Attached Data">
          <div>
            <form onSubmit={submitHandler}>
              <div className="flex flex-col gap-4 mb-16">
                <select
                  name="odpAttachedNFCId"
                  className="w-4/5 h-[44px] px-3 text-[14px] rounded-md border"
                  onChange={(e) =>
                    setValues({ ...values, odpAttachedNFCId: e.target.value })
                  }
                >
                  <option value="" disabled selected>
                    Select your NFC ID
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                </select>
                <select
                  name="odpAttachedODPName"
                  className="w-4/5 h-[44px] px-3 text-[14px] rounded-md border"
                  onChange={(e) =>
                    setValues({ ...values, odpAttachedODPName: e.target.value })
                  }
                >
                  <option value="" disabled selected>
                    Select your ODP Name
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                </select>
                <textarea
                  name="odpAttachedDesc"
                  placeholder="ODP - Attached Description"
                  className="w-4/5 h-[80px] px-3 py-4 text-[14px] rounded-md border"
                  value={values.odpAttachedDesc}
                  onChange={(e) =>
                    setValues({ ...values, odpAttachedDesc: e.target.value })
                  }
                />
              </div>
              <hr />
              <div className="flex justify-start items-center gap-1">
                <NavLink
                  to="/data-entry/field-data/odp-attached"
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
