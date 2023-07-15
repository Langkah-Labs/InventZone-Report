import { useState } from "react";
// dependencies
// import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<FormData>({
    username: "",
    password: "",
  } as FormData);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    navigate("/");
  };

  return {
    values,
    setValues,
    submitHandler,
  };
};

export default useLogin;
