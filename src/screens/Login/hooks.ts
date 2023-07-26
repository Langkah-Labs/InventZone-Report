import { useState } from "react";
// dependencies
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

interface FormData {
  username: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState<FormData>({
    username: "",
    password: "",
  } as FormData);

  const loginHandler = async (e: any) => {
    // e.preventDefault();
    setIsLoading(true);
    try {
      await api.createSession(e.username, e.password);
      const data = await api.getAccount();

      if (data) {
        setIsLoading(false);
        navigate("/");
      }
    } catch (e) {
      setIsLoading(false);
      console.error(e);
      swal({
        title: "Failed!",
        text: "Oops, something went wrong",
        icon: "error",
      });
    }
  };

  return {
    values,
    isLoading,
    setValues,
    loginHandler,
  };
};

export default useLogin;
