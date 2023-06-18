import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserRegistration, IRegisterState } from "../model/signUp";
import { API_URL } from "shared/config/env-config";

// Отправляем post запрос для регистрации
export const userRegistration = createAsyncThunk<void, IUserRegistration>(
  "user/registration",
  async (values, thunkApi) => {
    try {
      const { data } = await axios.post(API_URL + "v1/users/register/", values);
      console.log(data);

      // Сохраняем токен пользователя
      localStorage.setItem("token", JSON.stringify(data.tokens.access));
      localStorage.setItem("email", JSON.stringify(data.email));
      localStorage.setItem("id", JSON.stringify(Date.now()));
      localStorage.setItem("city_distric", JSON.stringify(data.city_district));
      localStorage.setItem("phone_number", JSON.stringify(data.phone_number));
      localStorage.setItem("address", JSON.stringify(data.address));
      localStorage.setItem("region", JSON.stringify(data.region));

      return data.tokens.access;
    } catch ({ response }: any) {
      console.log(response.data.email[0]);

      return thunkApi.rejectWithValue(response.data.email[0]);
    }
  }
);

const initialState: IRegisterState = {
  isToken: "",
  isLoading: false,
  error: "",
};

const registrationSlice = createSlice({
  name: "registration",
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
      state.isToken = action.payload;
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(userRegistration.rejected, (state: any, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = registrationSlice.actions;
export default registrationSlice.reducer;
