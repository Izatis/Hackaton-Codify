import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { rtkQueryErrorLogger } from 'shared/api/error-catching';

const reducers = {
  // auth: authReducer,
  // [REGISTER_API_RE DUCER_KEY]: registerApi.reducer
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    }).concat([
      rtkQueryErrorLogger,
      // registerApi.middleware
    ]),
  devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
setupListeners(store.dispatch)