import { createSlice } from "@reduxjs/toolkit";

interface IInitialStateType {
  count: number;
}
const initialState: IInitialStateType = {
  count: 0,
};

const Counter = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const { } = Counter.actions;
export default Counter.reducer;
