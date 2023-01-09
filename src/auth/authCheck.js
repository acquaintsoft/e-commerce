import { useEffect } from "react";
import { useNavigate } from "react-router";
import AuthConsumer from "./auth";

const PrivatRoute = ({ children }) => {
  const [authed, dispatch1] = AuthConsumer();

  const navigate = useNavigate();

  useEffect(() => {
    if (!authed) {
      navigate("/login");
    }
  }, [authed]);

  return <>{children}</>;
};

export default PrivatRoute;
