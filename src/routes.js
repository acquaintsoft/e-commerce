import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login";
import AllCategory from "./components/getAllCategory";
import App from "./App";
import Category from "./components/category";
import NotFound from "./components/NotFound";
import { ProtectedRoute } from "./auth/protectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/getAllCategory",
    element: (
      <ProtectedRoute>
        <AllCategory />
      </ProtectedRoute>
    ),
  },
  {
    path: "getAllCategory/:category",
    element: <Category />,
  },
  {
    path: "/cart",
    element: <App />,
  },
  {
    path: "/summery",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
