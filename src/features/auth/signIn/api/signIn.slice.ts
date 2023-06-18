import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {  IAuthorizationState } from "../model/signIn";
import { API_URL } from "shared/config/env-config";

// Отправляем post запрос для авторизации
export const userAuthorization = createAsyncThunk<void, any>(
  "user/authorization",
  async (values, thunkApi) => {    
    try {
      const parsedToken = JSON.parse(localStorage.getItem("token") as string);

      const { data } = await axios.post(
        API_URL + "v1/users/login/",
        values,
        {
          headers: { Authorization: `Bearer ${parsedToken}` },
        },
      );
      return data.token;
    } catch ({ response }: any) {
      return thunkApi.rejectWithValue(response.data.message);
    }
  }
);

const initialState: IAuthorizationState = {
  isToken: "",
  isLoading: false,
  error: "",
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = "";
    },
  },

  // SIGNIN USER
  extraReducers: (builder) => {
    builder.addCase(userAuthorization.pending, (state: any) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(userAuthorization.fulfilled, (state: any, action: any) => {
      state.isToken = action.payload;
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(userAuthorization.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = authorizationSlice.actions;
export default authorizationSlice.reducer;
