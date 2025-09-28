import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import coinReducer from "./coinSlice";
import heartReducer from "./heartSlice"

export const store = configureStore({
  reducer: {
    language: languageReducer,
    coin: coinReducer,
    heart: heartReducer
  },
});
