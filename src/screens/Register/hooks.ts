import { useState } from "react";
// dependencies
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

interface FormData {
  email: string;
  password: string;
  name: string;
  company: string;
  phoneNumber: string;
}

export const useRegister = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState<FormData>({
    email: "",
    password: "",
    name: "",
    company: "",
    phoneNumber: "",
  } as FormData);
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
  });

  const showPassword = (name: string) => {
    setPasswordVisibility((prevVal: any) => {
      return {
        ...prevVal,
        [name]: !prevVal[name],
      };
    });
  };

  const protectedPassword = (hidden: any) => (hidden ? "text" : "password");

  const registerHandler = async (e: any) => {
    // e.preventDefault();
    setIsLoading(true);
    try {
      // await api.createSession(e.username, e.password);
      // const data = await api.getAccount();

      // if (data) {
      //   setIsLoading(false);
      // }
      navigate("/");
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
    passwordVisibility,
    showPassword,
    protectedPassword,
    setValues,
    registerHandler,
  };
};

export default useRegister;
