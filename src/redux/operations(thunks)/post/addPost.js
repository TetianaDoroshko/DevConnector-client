import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callAlert } from "../../../helpers/alerts";
import { BASE_URL } from "../../../helpers/variables";

export const addPost = createAsyncThunk("post/add", async (text, thunkAPI) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/posts`, { text });
    callAlert("New Post was created successfully", "success");

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
