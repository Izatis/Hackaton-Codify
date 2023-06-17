import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserRegistration, IRegisterState } from "../model/signUp";
import { API_URL } from "shared/config/env-config";

// Отправляем post запрос для регистрации
export const userRegistration = createAsyncThunk<void, IUserRegistration>(
  "user/registration",
  async (
    { email, password, phone_number, region, city_district, address },
    thunkApi
  ) => {
    try {
      const { data } = await axios.post(API_URL + "v1/users/register/", {
        email,
        password,
        phone_number,
        region,
        city_district,
        address,
      });

      // Сохраняем токен пользователя
      localStorage.setItem("token", JSON.stringify(data.tokens.refresh));

      return data.token;
    } catch ({ response }: any) {
      return thunkApi.rejectWithValue(response.data.message);
    }
  }
);

const initialState: IRegisterState = {
  token: "",
  isLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = "";
    },
  },

  // SIGNUP USER
  extraReducers: (builder) => {
    builder.addCase(userRegistration.pending, (state: any) => {
      state.isLoading = true;
    });

    builder.addCase(userRegistration.fulfilled, (state: any, action) => {
      state.token = action.payload;
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(userRegistration.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
