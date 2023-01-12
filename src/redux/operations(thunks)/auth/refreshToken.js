import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { callAlert } from "../../helpers/alerts";
import { setAuthToken } from "../../../helpers/setAuthToken";
import { BASE_URL } from "../../../helpers/variables";


export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (data, thunkAPI) => {
    setAuthToken(data);
    try {
      const res = await axios.get(`${BASE_URL}/api/auth`);
      // callAlert("User created", "success");

      return res.data;
    } catch (error) {
      // callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
