import { useState, useEffect } from "react";
// dependencies
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const useMain = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSession = async () => {
    setIsLoading(true);
    try {
      await api.getSession();
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      navigate("/login");
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      const res = await api.deleteCurrentSession();
      if (res) {
        localStorage.removeItem("user_session");
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
