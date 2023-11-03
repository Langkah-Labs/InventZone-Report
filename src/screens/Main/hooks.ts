import { useState, useEffect } from "react";
// dependencies
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Session from "supertokens-web-js/recipe/session";
import { useCookies } from "react-cookie";

export const useMain = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [, , removeCookie] = useCookies([
    "sFrontToken",
    "st-last-access-token-update",
  ]);

  useEffect(() => {
    getSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSession = async () => {
    setIsLoading(true);
    try {
      // await api.getSession();
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      // navigate("/login");
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    await Session.signOut();
    removeCookie("sFrontToken");
    removeCookie("st-last-access-token-update");
    setIsLoading(false);
    navigate("/login", { replace: true });
  };

  return {
    isLoading,
    logoutHandler,
  };
};

export default useMain;
