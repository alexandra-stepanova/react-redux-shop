import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filter/slice";
import cartSlice from "./slices/cart/slice";
import pizzasSlice from "./slices/pizzasSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { filters: filterSlice, cart: cartSlice, pizzas: pizzasSlice },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
