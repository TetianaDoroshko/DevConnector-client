import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../helpers/variables";

export const getPost = createAsyncThunk(
  "post/get",
  async (postId, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/posts/${postId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
