import { useState, useEffect } from "react";
// dependencies
import api from "../../../../api/api";
import { Server } from "../../../../utils/config";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const useNFC = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const collectionId = "nfcs";
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [searchValues, setSearchValues] = useState<any>("");
  const [values, setValues] = useState<any>({
    nfcId: "",
    nfcDesc: "",
  });
  const [listValues, setListValues] = useState<any>([]);

  function generateUniqueId() {
    var randomNumber = Math.random() * 10 ** 36 - 1;
    var uniqueId = randomNumber.toString(36);
    while (uniqueId.length < 36) {
      uniqueId = "0" + uniqueId;
    }

    return uniqueId;
  }

  useEffect(() => {
    getSelectedNFC(id);
  }, [id]);

  useEffect(() => {
    getListNFC();
  }, []);

  const getSelectedNFC = async (id: any) => {
    if (id) {
      const res = await api.getDocument(Server.databaseID, collectionId, id);
      setValues({
        nfcId: res.nfcId,
        nfcDesc: res.nfcDesc,
      });
      setIsDisabled(true);
    }
  };

  const getListNFC = async () => {
    const res = await api.listDocuments(Server.databaseID, collectionId);
    if (res) {
      setListValues(res.documents);
      setIsLoading(false);
    }
  };

  const submitHandler = async (e: any) => {
    if (!id) {
      await addHandler(e);
    } else {
      await updateHandler(id);
    }
  };

  const addHandler = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const id = generateUniqueId();
      await api.createDocument(Server.databaseID, collectionId, id, values);
      swal({
        title: "Congratulations!",
        text: "Your submission has been saved!",
        icon: "success",
      }).then(() => {
        setIsLoading(false);
        navigate("/data-entry/field-data/nfc");
      });
    } catch (e) {
      console.error(e);
      swal({
        title: "Failed!",
        text: "Oops, something went wrong",
        icon: "error",
      });
      setIsLoading(false);
    }
  };

  const updateHandler = async (id: any) => {
    setIsLoading(true);
    try {
      await api.updateDocument(Server.databaseID, collectionId, id, values);
      swal({
        title: "Congratulations!",
        text: "Your submission has been saved!",
        icon: "success",
      }).then(() => {
        setIsLoading(false);
        navigate("/data-entry/field-data/nfc");
      });
    } catch (e) {
      console.error(e);
      swal({
        title: "Failed!",
        text: "Oops, something went wrong",
        icon: "error",
      });
      setIsLoading(false);
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
        await api.deleteDocument(Server.databaseID, collectionId, id).then(() =>
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
    listValues,
    isDisabled,
    setValues,
    submitHandler,
    deleteHandler,
    setSearchValues,
  };
};

export default useNFC;
