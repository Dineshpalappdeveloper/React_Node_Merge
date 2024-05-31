import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./userApi";

export const makeOrders = createAsyncThunk(
  "user/order",
  async (data, thunkAPI) => {
    try {
      //   const body = {
      //     productname: data?.fullname,
      //     price: data?.email,
      //     location: data?.password,
      //   };
      console.log(data, "22565663");
      const res = await userApi.crateOrderApi(data);
      if (!res) {
        return thunkAPI.rejectWithValue(res);
      }
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
