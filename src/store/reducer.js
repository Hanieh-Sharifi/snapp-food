import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { isLoading: false, vendors: [] };

export const getVendors = createAsyncThunk(
  "content/getVendors",
  async (page) => {
    const res = await axios(
      `https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${page}&page_size=10&lat=35.754&long=51.328`
    );
    const data = await res.data;
    return data;
  }
);

const vendors = createSlice({
  name: "vendors",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getVendors.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getVendors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.vendors = action.payload.data.finalResult;
    });
    builder.addCase(getVendors.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default vendors.reducer;
