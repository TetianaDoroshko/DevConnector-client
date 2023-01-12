import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";
import { BASE_URL } from "../../../helpers/variables";

export const deleteExperience = createAsyncThunk(
  "experience/delete",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(
        `${BASE_URL}/api/profile/experience/${id}`
      );
      callAlert("Experience was removed successfully", "success");
      return res.data;
    } catch (error) {
      callAlert(error.response.data.message, "danger");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
