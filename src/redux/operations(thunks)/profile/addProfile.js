import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";
import { BASE_URL } from "../../../helpers/variables";

export const addProfile = createAsyncThunk(
  "profile/add",
  async (user, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/profile`, user.formData);
      // console.log(res.data);
      if (user.edit === false) {
        callAlert("Profile created", "success");
      } else {
        callAlert("Profile updated", "success");
      }
      user.navigate();
      return res.data;
    } catch (error) {
      callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
