import { useState, useContext } from "react";
// dependencies
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { GlobalContext } from "../../context/GlobalContext";

interface FormData {
  username: string;
  password: string;
}

export const useLogin = () => {
  const { setUserSessionHandler } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [values, setValues] = useState<FormData>({
    username: "",
    password: "",
  } as FormData);

  const loginHandler = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.createSession(values.username, values.password);
      const data = await api.getAccount();

      if (data) {
        setUserSessionHandler(data);
        localStorage.setItem("user_session", data);
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

  const togglePassword = (e: any) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return {
    values,
    isLoading,
    passwordType,
    setValues,
    loginHandler,
    togglePassword,
  };
};

export default useLogin;
