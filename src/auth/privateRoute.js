import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const isAuth = localStorage.getItem("token1");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
