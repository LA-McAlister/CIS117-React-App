import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "./counterSlice";
import bidTypeReducer from "./bidTypeSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    bidTypes: bidTypeReducer,
  },
});
