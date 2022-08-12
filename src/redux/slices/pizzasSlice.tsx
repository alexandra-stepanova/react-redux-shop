import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async (params) => {
    const { categoryId, sortProperty, searchValue, currentPage } = params;
    const { data } = await axios.get(
      `https://62c80ec00f32635590d05660.mockapi.io/items?page=${currentPage}&limit=4&${
        //пагинация с бэка
        categoryId > 0 ? `category=${categoryId}` : "" //сортировку по типу
      }&sortBy=${sortProperty.replace("-", "")}&order=${
        //сортировка по убыванию/повышению цены, популярности, по алфавиту
        sortProperty.includes("-") ? "asc" : "desc"
      }&&${
        searchValue ? `search=${searchValue}` : "" //фильтрация по поиску слова в header
      }`
    );
    return data;
  }
);

const initialState = {
  pizzas: [],
  status: "loading",
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.pizzas = action.payload;
      state.status = "success";
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "error";
      state.pizzas = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
