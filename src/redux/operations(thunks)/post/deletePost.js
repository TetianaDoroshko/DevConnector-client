import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";
import { BASE_URL } from "../../../helpers/variables";

export const deletePost = createAsyncThunk(
  "post/delete",
  async (postId, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/api/posts/${postId}`);
      callAlert("Post was removed successfully", "success");

      return { postId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
