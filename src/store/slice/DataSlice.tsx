import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialStateType {
  _id: number;
  name: string;
  price: number;
  photoURL: string;
  description: string;
  category: string;
}

interface IDataState {
  data: IInitialStateType[];
  details: IInitialStateType[];
  searchValue: string;
}

const initialState: IDataState = {
  data: [],
  details: [],
  searchValue: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IInitialStateType[]>) => {
      state.data = action.payload;
    },
    oneProduct: (state, action: PayloadAction<IInitialStateType>) => {
      state.details = [action.payload];
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setData, oneProduct } = dataSlice.actions;
export default dataSlice.reducer;
