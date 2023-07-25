import { useState, useEffect } from "react";
// dependencies
import api from "../../../../api/api";
import { Server } from "../../../../utils/config";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Form } from "antd";

export const useODP = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const collectionId = "odps";
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [searchValues, setSearchValues] = useState<any>("");
  const [values, setValues] = useState<any>({
    name: "",
    capacity: "",
    opticalPower: "",
    desc: "",
  });
  const [listValues, setListValues] = useState<any>([]);

  useEffect(() => {
    form.setFieldsValue(values);
  }, [form, values]);

  useEffect(() => {
    getSelectedODP(id);
  }, [id]);

  useEffect(() => {
    getListODP();
  }, []);

  const getSelectedODP = async (id: any) => {
    if (id) {
      const res = await api.getDocument(Server.databaseID, collectionId, id);
      setValues({
        name: res.name,
        capacity: res.capacity,
        opticalPower: res.opticalPower,
        desc: res.desc,
      });
    }
  };

  const getListODP = async () => {
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
      await updateHandler(id, e);
    }
  };

  const addHandler = async (e: any) => {
    setIsLoading(true);
    try {
      await api.createDocument(Server.databaseID, collectionId, e);
      swal({
        title: "Congratulations!",
        text: "Your submission has been saved!",
        icon: "success",
      }).then(() => {
        setIsLoading(false);
        navigate("/data-entry/field-data/odp");
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

  const updateHandler = async (id: any, e:any) => {
    setIsLoading(true);
    try {
      await api.updateDocument(Server.databaseID, collectionId, id, e);
      swal({
        title: "Congratulations!",
        text: "Your submission has been saved!",
        icon: "success",
      }).then(() => {
        setIsLoading(false);
        navigate("/data-entry/field-data/odp");
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
    form,
    setValues,
    submitHandler,
    deleteHandler,
    setSearchValues,
  };
};

export default useODP;
