import { useState, useEffect } from "react";
// dependencies
import api from "../../../../api/api";
import { Server } from "../../../../utils/config";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const useODPAttached = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const collectionId = "odps";
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [searchValues, setSearchValues] = useState<any>("");
  const [values, setValues] = useState<any>({
    odpAttachedNFCId: "",
    odpAttachedODPName: "",
    odpAttachedDesc: "",
  });
  const [listValues, setListValues] = useState<any>([]);
  const [listNFCValues, setListNFCValues] = useState<any>([]);
  const [listODPValues, setListODPValues] = useState<any>([]);

  useEffect(() => {
    getSelectedODP(id);
  }, [id]);

  useEffect(() => {
    getListNFC();
    getListODP();
  }, []);

  const getSelectedODP = async (id: any) => {
    if (id) {
      const res = await api.getDocument(Server.databaseID, collectionId, id);
      setValues({
        odpAttachedNFCId: res.nfcId,
        odpAttachedODPName: res.name,
        odpAttachedDesc: res.desc,
      });
      setIsDisabled(true);
    }
  };

  const getListNFC = async () => {
    const res = await api.listDocuments(Server.databaseID, "nfcs");
    if (res) {
      setListNFCValues(res.documents);

      setIsLoading(false);
    }
  };

  const getListODP = async () => {
    const res = await api.listDocuments(Server.databaseID, "odps");
    if (res) {
      setListODPValues(res.documents);
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
      const val = {
        nfcId: values.odpAttachedNFCId,
        desc: values.odpAttachedDesc,
      };

      await api.updateDocument(
        Server.databaseID,
        collectionId,
        values.odpAttachedODPName,
        val
      );
      swal({
        title: "Congratulations!",
        text: "Your submission has been saved!",
        icon: "success",
      }).then(() => {
        setIsLoading(false);
        navigate("/data-entry/field-data/odp-attached");
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
      const val = {
        desc: values.odpAttachedDesc,
      };
      await api.updateDocument(Server.databaseID, collectionId, id, val);
      swal({
        title: "Congratulations!",
        text: "Your submission has been saved!",
        icon: "success",
      }).then(() => {
        setIsLoading(false);
        navigate("/data-entry/field-data/odp-attached");
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
    listNFCValues,
    listODPValues,
    listValues,
    isDisabled,
    setValues,
    submitHandler,
    deleteHandler,
    setSearchValues,
  };
};

export default useODPAttached;
