import { useState, useEffect } from "react";
// dependencies
import api from "../../../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Form } from "antd";

export const useTeam = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [searchValues, setSearchValues] = useState<any>("");
  const [listValues, setListValues] = useState<any>([]);
  const [values, setValues] = useState<any>({
    name: "",
  });

  useEffect(() => {
    form.setFieldsValue(values);
  }, [form, values]);

  useEffect(() => {
    getSelectedTeam(id);
  }, [id]);

  useEffect(() => {
    getListTeam();
  }, []);
  const getSelectedTeam = async (id: any) => {
    if (id) {
      const res = await api.get(id);
      setValues({
        name: res.name,
      });
      setIsDisabled(true);
    }
  };

  const getListTeam = async () => {
    const res = await api.list();
    if (res) {
      setListValues(res.teams);
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
      await api.create(e.name);
      swal({
        title: "Congratulations!",
        text: "Your submission has been saved!",
        icon: "success",
      }).then(() => {
        setIsLoading(false);
        navigate("/data-entry/user-data/team");
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
  const updateHandler = async (id: any, e: any) => {
    setIsLoading(true);

    try {
      await api.updateName(id, e.name);
      swal({
        title: "Congratulations!",
        text: "Your submission has been saved!",
        icon: "success",
      }).then(() => {
        setIsLoading(false);
        navigate("/data-entry/user-data/team");
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
        await api.delete(id).then(() =>
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
    form,
    setValues,
    submitHandler,
    deleteHandler,
    setSearchValues,
  };
};

export default useTeam;
