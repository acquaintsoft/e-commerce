import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Slice/loginSlice";
import productReducer from "./Slice/productsSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    product: productReducer,
  },
});
