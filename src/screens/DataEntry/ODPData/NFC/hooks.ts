import { useState, useEffect } from "react";
// dependencies
import axios from "axios";
import api from "../../../../api/api";
import { Permission, Role } from "appwrite";
import { Server } from "../../../../utils/config";
import { useParams, useNavigate } from "react-router-dom";
import { Client, Databases } from "appwrite";
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

  function generateUniqueId() {
    // Generate a random number between 0 and 10^36-1.
    var randomNumber = Math.random() * 10 ** 36 - 1;

    // Convert the random number to a string with a radix of 36.
    var uniqueId = randomNumber.toString(36);

    // Pad the unique ID with zeros to make it 36 characters long.
    while (uniqueId.length < 36) {
      uniqueId = "0" + uniqueId;
    }

    return uniqueId;
  }

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

  const handleAddNFC = async (e: any) => {
    e.preventDefault();
    // console.log('Adding Todo');
    // console.log(data, user);
    try {
      await api.createSession("seagalputra@gmail.com", "InventZone_2023");
      const data = await api.getAccount();
      console.log(data);

      if (data) {
        const id = generateUniqueId();
        await api.createDocument(Server.databaseID, "nfcs", id, values, [
          Permission.read(Role.user(data.$id)),
          Permission.write(Role.user(data.$id)),
        ]);
        setValues({
          nfcId: "",
          nfcDesc: "",
        });
        swal({
          title: "Congratulations!",
          text: "Your submission has been saved!",
          icon: "success",
        }).then(() => {
          navigate("/data-entry/field-data/nfc");
        });
      }
    } catch (e) {
      console.error("Error in adding nfc", e);
      swal({
        title: "Failed!",
        text: "Oops, something went wrong",
        icon: "error",
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
    handleAddNFC,
    deleteHandler,
    setSearchValues,
  };
};

export default useNFC;
