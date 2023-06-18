import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import signUpSlice from "features/auth/signUp/api/signUp.slice";
import signInSlice from "features/auth/signIn/api/signIn.slice";
import { post } from "entities/post/api/post-api";
import { user } from "features/profile/api/profile.slice";

const reducers = {
  registration: signUpSlice,
  authorization: signInSlice,
  [post.reducerPath]: post.reducer,
  [user.reducerPath]: user.reducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([post.middleware, user.middleware]),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
