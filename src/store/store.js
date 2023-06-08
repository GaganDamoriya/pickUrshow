import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "/src/store/homeSlice.js";

const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});

export default store;
