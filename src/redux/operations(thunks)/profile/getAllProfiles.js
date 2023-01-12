import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../helpers/variables";

export const getAllProfiles = createAsyncThunk(
  "profiles/get",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/profile`);

      return res.data;
    } catch (error) {
      // callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
