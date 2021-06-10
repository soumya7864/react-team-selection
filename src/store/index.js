import { configureStore } from "@reduxjs/toolkit";

import selectSlice from "./select-slice";

const store = configureStore({
  reducer: { sel: selectSlice.reducer },
});

export default store;
