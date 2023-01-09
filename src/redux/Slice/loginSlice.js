import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "antd";
import { BASE_URL, loginApi } from "../../common/constants";

const initialState = {
  userId: "",
  token: "",
};

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/${loginApi}`, userData);
      //axios.defaults.headers.common["Authorization"] = response.data.token;
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
      state.token = action.payload;
    });
  },
});

export default loginSlice.reducer;
