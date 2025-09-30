import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import coinReducer from "./coinSlice";
import heartReducer from "./heartSlice"
import scoreReducer from "./scoreSlice"
import gameReducer from "./gameSlice"

export const store = configureStore({
  reducer: {
    language: languageReducer,
    coin: coinReducer,
    heart: heartReducer,
    score: scoreReducer,
    game: gameReducer
  },
});
