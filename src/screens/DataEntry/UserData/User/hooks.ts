import { useState, useEffect } from "react";
// dependencies
import api from "../../../../api/api";
import { Server } from "../../../../utils/config";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { generateUniqueId } from "../../../../utils/constants";

export const useUser = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const collectionId = "nfcs";
  const url = "http://localhost";
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [searchValues, setSearchValues] = useState<any>("");
  const [listValues, setListValues] = useState<any>([]);
  const [values, setValues] = useState<any>({
    userName: "",
    userEmail: "",
    userPhone: "",
    userTeam: "",
    userRole: "",
  });
  const [listRolesValues, setListRolesValues] = useState<any>([]);
  const [listTeamValues, setListTeamValues] = useState<any>([]);

  useEffect(() => {
    getSelectedUser(id);
  }, [id]);

  useEffect(() => {
    // getListUser();
    getListRoles();
    getListTeam();
    setIsLoading(false);
  }, []);

  const getSelectedUser = async (id: any) => {
    if (id) {
      const res = await api.getDocument(Server.databaseID, collectionId, id);
      setValues({
        nfcId: res.nfcId,
        nfcDesc: res.nfcDesc,
      });
      setIsDisabled(true);
    }
  };

  const getListUser = async () => {
    const res = await api.listDocuments(Server.databaseID, collectionId);
    if (res) {
      setListValues(res.documents);
      setIsLoading(false);
    }
  };

  const getListRoles = async () => {
    const res = await api.listDocuments(Server.databaseID, "roles");
    if (res) {
      setListRolesValues(res.documents);

      setIsLoading(false);
    }
  };

  const getListTeam = async () => {
    const res = await api.list();
    if (res) {
      console.log(res);

      setListTeamValues(res.teams);

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
      //   await api.createDocument(Server.databaseID, collectionId, id, values);
      const role = [];
      role.push(values.userRole);
      await api.createMembership(
        values.userTeam,
        role,
        url,
        values.userEmail,
        "64b3cd7f4b56174c36e4",
        values.userPhone,
        values.userName
      );

      swal({
        title: "Congratulations!",
        text: "Your submission has been saved!",
        icon: "success",
      }).then(() => {
        setIsLoading(false);
        navigate("/data-entry/user-data/user");
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
    listRolesValues,
    listTeamValues,
    setValues,
    submitHandler,
    deleteHandler,
    setSearchValues,
  };
};

export default useUser;
