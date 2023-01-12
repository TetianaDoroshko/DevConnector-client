import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";
import { BASE_URL } from "../../../helpers/variables";

export const addComment = createAsyncThunk(
  "comment/add",
  async ({ text, postId }, thunkAPI) => {
    try {
      const res = await axios.patch(`${BASE_URL}/api/posts/${postId}/comment`, {
        text,
      });
      callAlert("Comment was added successfully", "success");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
