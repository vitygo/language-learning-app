import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state, action) => {state.value = action.payload},
  },
});

export const { startGame } = gameSlice.actions;
export default gameSlice.reducer;
