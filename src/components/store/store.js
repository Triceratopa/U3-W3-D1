import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./reducer/reducer";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});
export default store;
