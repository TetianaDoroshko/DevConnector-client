import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";
import { BASE_URL } from "../../../helpers/variables";

export const addExperience = createAsyncThunk(
  "experience/add",
  async (user, thunkAPI) => {
    try {
      const res = await axios.patch(
        `${BASE_URL}/api/profile/experience`,
        user.formData
      );
      callAlert("Experience added success", "success");
      user.navigate();
      return res.data;
    } catch (error) {
      callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
