import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";
import scoreReducer from "./scoreSlice";

const appStore = configureStore({
  reducer: {
    quiz: quizReducer,
    score: scoreReducer,
  },
});

export default appStore;
