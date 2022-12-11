import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../Features/questionsSlice";
import resultReducer from "../Features/resultsSlice";

const Store = configureStore({
  reducer: {
    questions: questionsReducer,
    result: resultReducer,
  },
});

export default Store;
