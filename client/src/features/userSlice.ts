import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../common/common";

interface State {
  user: User | undefined;
}

const initialState: State = {
  user: undefined,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signedIn: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
    },
    signedOut: (state) => {
      state.user = undefined;
    },
  },
});

export default slice.reducer;
export const { signedIn, signedOut } = slice.actions;
