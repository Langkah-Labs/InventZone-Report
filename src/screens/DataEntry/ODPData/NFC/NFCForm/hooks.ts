import { useState, useEffect } from "react";
// dependencies
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const useNFCForm = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState<any>({
    nfcId: "",
    nfcDesc: "",
  });

  useEffect(() => {
    if (id) {
      setValues({
        nfcId: id,
        nfcDesc: "",
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
      setIsLoading(true);
      await axios
        .put(`https://dummyjson.com/users/${id}`, values)
        .then(function (response) {
          swal({
            title: "Success!",
            text: "Your data has been updated!",
            icon: "success",
          }).then(() => {
            navigate("/data-entry/field-data/nfc");
          });
        })
        .catch(function (error) {
          swal({
            title: "Failed!",
            text: "Oops, something went wrong",
            icon: "error",
          });
        });
    } else {
      setIsLoading(true);
      await axios
        .post("https://dummyjson.com/users/add", values)
        .then(function (response) {
          swal({
            title: "Congratulations!",
            text: "Your submission has been saved!",
            icon: "success",
          }).then(() => {
            navigate("/data-entry/field-data/nfc");
          });
        })
        .catch(function (error) {
          swal({
            title: "Failed!",
            text: "Oops, something went wrong",
            icon: "error",
          });
        });
    }
  };
  return {
    isLoading,
    values,
    setValues,
    submitHandler,
  };
};

export default useNFCForm;
