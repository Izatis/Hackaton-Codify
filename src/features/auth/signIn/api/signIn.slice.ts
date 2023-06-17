import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserAuthorization, IAuthorizationState } from "../model/signIn";
import { API_URL } from "shared/config/env-config";

// Отправляем post запрос для авторизации
export const userAuthorization = createAsyncThunk<void, IUserAuthorization>(
  "user/authorization",
  async (values, thunkApi) => {
    try {
      const { data } = await axios.post(API_URL + "/v1/users/login", values);

      // Сохраняем токен пользователя
      localStorage.setItem("token", JSON.stringify(data.token));

      return data.token;
    } catch ({ response }: any) {
      return thunkApi.rejectWithValue(response.data.message);
    }
  }
);

const initialState: IAuthorizationState = {
  token: "",
  isLoading: false,
  error: "",
};

const authSlice = createSlice({
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
      state.token = action.payload;
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(userAuthorization.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
