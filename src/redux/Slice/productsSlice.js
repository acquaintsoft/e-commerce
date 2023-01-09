//import axios from "axios";
import axios from "../../auth/interceptor";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
//import { current } from "immer";

const initialState = {
  categories: "",
  products: "",
  //cart: { category: [] },
  cart: {},
};

export const getAllCategories = createAsyncThunk(
  "users/getAllCategories",
  async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      message.error(err.response.data);
    }
  }
);

export const getProducts = createAsyncThunk(
  "users/getProducts",
  async (category) => {
    try {
      console.log("category", category);
      let url;
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category.category}?limit=${category.limit}&sort=${category.sort}`
      );
      //console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      message.error(err.response.data);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      if (state.cart[action.payload.category]) {
        let currentArray = state.cart[action.payload.category];

        let found = currentArray.find(
          (data) =>
            data.category === action.payload.category &&
            data.title === action.payload.title
        );

        //console.log(found);
        if (found) {
          let newcart = currentArray.map((data) => {
            if (
              data.category === action.payload.category &&
              data.title === action.payload.title
            ) {
              return { ...data, quantity: data.quantity + 1 };
            } else {
              return data;
            }
          });
          state.cart[action.payload.category] = newcart;
          //console.log(current(state.cart));
          //return state.cart;
        } else {
          state.cart[action.payload.category].push({
            ...action.payload,
            quantity: 1,
          });
          //console.log(current(state.cart));
          //return state.cart;
        }
      } else {
        let array = [];
        array[0] = {
          ...action.payload,
          quantity: 1,
        };
        state.cart[action.payload.category] = array;
        //console.log(current(state.cart));
        //return state.cart;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
