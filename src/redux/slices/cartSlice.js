import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      state.items.push(action.payload);
    },
    removeItems(state, action) {
      state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
