import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeAuthToken } from "../../../helpers/setAuthToken";


export const logout = createAsyncThunk("auth/logout", () => {
    removeAuthToken();
});
