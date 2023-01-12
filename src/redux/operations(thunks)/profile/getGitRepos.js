import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../helpers/variables";

export const getGitRepos = createAsyncThunk(
  "gitRepos/get",
  async (userName, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/profile/github/${userName}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
