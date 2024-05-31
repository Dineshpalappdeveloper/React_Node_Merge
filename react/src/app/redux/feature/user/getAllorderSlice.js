import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "./userApi";

export const getAllorders = createAsyncThunk(
  "user/getAllorders",
  async (thankAPI) => {
    try {
      const response = await userApi.getordersApi();
      if (!response) {
        return thankAPI.rejectWithValue(response);
      }
      console.log("tokenslice", response);
      return response;
    } catch (error) {
      return thankAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  isLoading: false,
  isError: false,
  userData: null,
};
const getAllorderslice = createSlice({
  name: "getAllOrder",
  initialState,
  reducers: {
    resertState: (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllorders.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllorders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(getAllorders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.userData = null;
      });
  },
});

export const { resertState } = getAllorderslice.actions;
export const getAllOrder = (state) => state.getAllOrder;
export default getAllorderslice.reducer;
