import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface FilterSliceState {
  categoryId: number;
  currentPage: number;
  searchValue: string;
  sortProperty: string;
}

type PizzaItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: number;
  size: number;
  count: number;
};

export const fetchPizzas = createAsyncThunk<PizzaItem[], FilterSliceState>(
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

interface PizzaSliceState {
  pizzas: PizzaItem[];
  status: "loading" | "success" | "error";
}

const initialState: PizzaSliceState = {
  pizzas: [],
  status: "loading",
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
      state.status = "loading";
      state.pizzas = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = "error";
      state.pizzas = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
