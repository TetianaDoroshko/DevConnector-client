import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfile = createAsyncThunk(
  "profile/get",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/profile/me");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
