import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "antd";

const initialState = {
  userId: "",
  token: "",
};

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (userData) => {
    //console.log(userData);
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        userData
      );
      axios.defaults.headers.common["Authorization"] = response.data.token;
      localStorage.setItem("token1", JSON.stringify(response.data.token));
      return response.data;
    } catch (err) {
      console.log(err);
      message.error(err.response.data);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload);
      //console.log(state);
      state.token = action.payload;
      //return { ...state, token: action.payload };
    });
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default loginSlice.reducer;
