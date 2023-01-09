import { Routes, Route } from "react-router-dom";

import Login from "./components/login";
import AllCategory from "./components/getAllCategory";
import Category from "./components/category";
import NotFound from "./components/NotFound";
import PrivatRoute from "./auth/authCheck";
import Cart from "./components/cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="getAllCategory"
          element={
            <PrivatRoute>
              <AllCategory />
            </PrivatRoute>
          }
        />
        <Route
          path="getAllCategory/:category"
          element={
            <PrivatRoute>
              <Category />
            </PrivatRoute>
          }
        />
        <Route
          path="cart"
          element={
            <PrivatRoute>
              <Cart />
            </PrivatRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
