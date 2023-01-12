import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";
import { BASE_URL } from "../../../helpers/variables";

export const deleteComment = createAsyncThunk(
  "comment/delete",
  async ({ postId, commentId }, thunkAPI) => {
    try {
      const res = await axios.delete(
        `${BASE_URL}/api/posts/${postId}/comment/${commentId}`
      );
      callAlert("Comment was removed successfully", "success");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
