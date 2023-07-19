import { useState } from "react";
// dependencies
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import type { MenuProps } from "antd";

export const useNavigation = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      const res = await api.deleteCurrentSession();
      if (res) {
        setIsLoading(false);
        navigate("/login");
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
    current,
    isLoading,
    logoutHandler,
    onClick,
  };
};

export default useNavigation;
