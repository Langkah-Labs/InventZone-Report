import { useState, useContext, useEffect } from "react";
// dependencies
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { GlobalContext } from "../../context/GlobalContext";

export const useMain = () => {
  const { setCheckSessionHandler } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user_session") === null) {
      setCheckSessionHandler(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
