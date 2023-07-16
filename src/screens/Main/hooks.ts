import { useState } from "react";
// dependencies
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const useMain = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
    isLoading,
    logoutHandler,
  };
};

export default useMain;
