import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "snackbar",
  initialState: {
    isOpen: false,
    text: "",
  },
  reducers: {
    openedSnackbar: (state, action: PayloadAction<{ text: string }>) => {
      state.text = action.payload.text;
      state.isOpen = true;
    },
    closedSnackbar: (state) => {
      state.isOpen = false;
    },
  },
});

export default slice.reducer;
export const { openedSnackbar, closedSnackbar } = slice.actions;
