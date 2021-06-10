import { createSlice } from "@reduxjs/toolkit";

const selectSlice = createSlice({
  name: "sel",
  initialState: {
    selectedPickValue: "",
  },
  reducers: {
    replaceCart(state, action) {
      state.selectedPickValue = action.payload.selectedPickValue;
    },
  },
});

export const selectActions = selectSlice.actions;

export default selectSlice;
