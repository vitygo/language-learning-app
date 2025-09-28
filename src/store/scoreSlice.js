import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrement: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});

export const { decrement, increment } = scoreSlice.actions;
export default scoreSlice.reducer;
