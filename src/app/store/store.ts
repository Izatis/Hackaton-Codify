import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { rtkQueryErrorLogger } from "shared/api/error-catching";

import signUpSlice from "features/auth/signUp/api/signUp.slice";
import signInSlice from "features/auth/signIn/api/signIn.slice";
import { post } from "entities/post/api/post-api";

const reducers = {
  registration: signUpSlice,
  authorization: signInSlice,
  [post.reducerPath]: post.reducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([ post.middleware]),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
setupListeners(store.dispatch);
