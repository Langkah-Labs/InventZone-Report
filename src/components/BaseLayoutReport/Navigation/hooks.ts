import { useState } from "react";
// dependencies
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import type { MenuProps } from "antd";
import Session from "supertokens-web-js/recipe/session";
import { useCookies } from "react-cookie";

export const useNavigation = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, , removeCookie] = useCookies([
    "sFrontToken",
    "st-last-access-token-update",
  ]);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
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
    current,
    isLoading,
    logoutHandler,
    onClick,
  };
};

export default useNavigation;
