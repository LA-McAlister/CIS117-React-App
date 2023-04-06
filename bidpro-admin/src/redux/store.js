import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "./counterSlice";
import bidTypeReducer from "./bidTypeSlice";
import mathResultsReducer from "./mathSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    bidTypes: bidTypeReducer,
    mathResults: mathResultsReducer,
  },
});
