import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncActions";
import { PizzaItem, PizzaSliceState, Status } from "./types";

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
