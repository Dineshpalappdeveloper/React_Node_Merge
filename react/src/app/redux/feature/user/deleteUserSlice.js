import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./userApi";

export const deleteUsers = createAsyncThunk(
  "user/deleteUsers",
  async (id, thunkAPI) => {
    try {
      const res = await userApi.deleteUserApi(id);
      if (!res) {
        return thunkAPI.rejectWithValue(res);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// ?export default deleteUserSlice.reducer;
