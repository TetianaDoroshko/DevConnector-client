import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";
import { BASE_URL } from "../../../helpers/variables";

export const getAvatarById = createAsyncThunk(
  "avatar/get",
  async (userId, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/profile/avatar/${userId}`);
      return res.data;
    } catch (error) {
      callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
