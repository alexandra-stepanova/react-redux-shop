import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id); // поиск схожих пицц по id при добавлении в корзину
      if (findItem) {
        findItem.count++; //добавление
      } else {
        state.items.push({ ...action.payload, count: 1 }); //добавление в items.count
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        // подсчет сумму за все пиццы
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        // подсчет сумму за все пиццы
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      //удаление выборочной пиццы
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItem(state) {
      //удаление всез пицц из корзины
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const cartSelector = (state) => state.cart;

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
