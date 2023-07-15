import { useState, useEffect } from "react";
// dependencies
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const useNFC = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [searchValues, setSearchValues] = useState<any>("");
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
  return {
    isLoading,
    values,
    searchValues,
    setValues,
    submitHandler,
    deleteHandler,
    setSearchValues,
  };
};

export default useNFC;
