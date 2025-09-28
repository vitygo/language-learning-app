import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 5
};

const heartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
    increment: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { decrement, increment } = heartSlice.actions;
export default heartSlice.reducer;
