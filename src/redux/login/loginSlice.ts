import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for the slice state
interface CounterState {
  value: number;
}

// Define the initial state
const initialState: CounterState = {
  value: 0,
};

// Create the slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      // eslint-disable-next-line no-param-reassign
      state.value += 1;
    },
    decrement: (state: CounterState) => {
      // eslint-disable-next-line no-param-reassign
      state.value -= 1;
    },
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export the action creators and reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
