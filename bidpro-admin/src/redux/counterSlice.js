import { createSlice } from "@reduxjs/toolkit";

//uses the Immer library for immutability
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 5,
  },
});

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
