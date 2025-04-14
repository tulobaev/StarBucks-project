import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import dataProduct from "./slice/DataSlice";

export const store = configureStore({
<<<<<<< HEAD:src/store/Store.ts
  reducer: {
    dataProduct,
  },
=======
  reducer: {},
>>>>>>> master:src/store/Store.tsx
});

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
