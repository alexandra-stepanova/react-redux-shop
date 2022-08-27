import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaItem, FilterSliceFetch, PizzaSliceState, Status } from "./types";

export const fetchPizzas = createAsyncThunk<PizzaItem[], FilterSliceFetch>(
  "pizzas/fetchPizzasStatus",
  async (params) => {
    const { categoryId, sortProperty, searchValue, currentPage } = params;
    const { data } = await axios.get<PizzaItem[]>(
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

const initialState: PizzaSliceState = {
  pizzas: [],
  status: Status.LOADING,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas(state, action: PayloadAction<PizzaItem[]>) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.pizzas = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.pizzas = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
