import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type stateType = {
  count: number;
};

const initialState: stateType = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    increaseByAmount: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    decreaseByAmount: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const {
  increment,
  decrement,
  increaseByAmount,
  decreaseByAmount,
  reset,
} = counterSlice.actions;
export default counterSlice.reducer;
