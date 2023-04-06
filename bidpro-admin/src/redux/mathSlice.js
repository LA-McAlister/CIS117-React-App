import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const mathSlice = createSlice({
  name: "mathResults",
  initialState: {
    mathResults: [
      {
        numberOne: 2,
        operator: "+",
        numberTwo: 2,
        answer: 4,
      },
      {
        numberOne: 2,
        operator: "-",
        numberTwo: 2,
        answer: 0,
      },
      {
        numberOne: 2,
        operator: "*",
        numberTwo: 2,
        answer: 4,
      },
      {
        numberOne: 2,
        operator: "/",
        numberTwo: 2,
        answer: 1,
      },
      {
        numberOne: 2,
        operator: "%",
        numberTwo: 2,
        answer: 0,
      },
    ],
  },
  reducers: {
    addResult: (state, action) => {
      state.mathResults = [...state.mathResults, action.payload];
    },
  },
});

export const selectMathResults = (state) => state.mathResults.mathResults;
export const { addResult } = mathSlice.actions;
export default mathSlice.reducer;
