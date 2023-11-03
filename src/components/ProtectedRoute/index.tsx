import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Session from "supertokens-web-js/recipe/session";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const session = await Session.doesSessionExist();

      if (!session) {
        navigate("/login", { replace: true });
      }
    })();
  }, [navigate]);

  return children;
}
