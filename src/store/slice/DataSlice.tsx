import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialStateType {
  _id: number;
  name: string;
  price: number | string;
  photoURL: string;
  description: string;
  category: string;
  calories?: string;
}

interface IDataState {
  data: IInitialStateType[];
  details: IInitialStateType | null;
  searchValue: string;
  categoryMenu: string;
}

const initialState: IDataState = {
  data: [],
  details: null,
  searchValue: "",
  categoryMenu: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IInitialStateType[]>) => {
      state.data = action.payload;
    },
    oneProduct: (state, action: PayloadAction<IInitialStateType>) => {
      state.details = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.categoryMenu = action.payload;
    },
  },
});

export const { setData, oneProduct, setSearch, setCategory } =
  dataSlice.actions;
export default dataSlice.reducer;
