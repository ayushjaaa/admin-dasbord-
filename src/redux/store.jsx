// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./TodoSlice";

const store = configureStore({
  reducer: {
    tasks: TaskReducer
  }
});

export default store;
