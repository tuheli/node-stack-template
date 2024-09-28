import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import exampleSlice from "../features/exampleSlice";
import userSlice from "../features/userSlice";
import snackbarSlice from "../features/snackbarSlice";

export const store = configureStore({
  reducer: {
    example: exampleSlice,
    user: userSlice,
    snackbar: snackbarSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
