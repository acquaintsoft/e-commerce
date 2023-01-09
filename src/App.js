import { Routes, Route } from "react-router-dom";

import Login from "./components/login";
import AllCategory from "./components/getAllCategory";
import Category from "./components/category";
import NotFound from "./components/NotFound";
//import PrivatRoute from "./auth/authCheck";
import Cart from "./components/cart";
import PrivateRoute from "./auth/privateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* first way of Auth */}
        {/* <Route
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
        /> */}

        {/* different way of Auth */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="getAllCategory" element={<AllCategory />} />
          <Route path="getAllCategory/:category" element={<Category />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
