import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export type StoreStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
