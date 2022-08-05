import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: []
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.pizzas = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPizzas } =
pizzasSlice.actions;

export default pizzasSlice.reducer;