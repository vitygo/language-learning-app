import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const coinSlice = createSlice({
  name: "coin",
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

export const { increment, decrement } = coinSlice.actions;
export default coinSlice.reducer;
