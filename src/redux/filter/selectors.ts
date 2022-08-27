import { RootState } from "../store";

export const selectFilter = (state: RootState) => state.filters;
export const selectors = (state: RootState) => state.filters.sortType;
