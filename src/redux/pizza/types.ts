export interface FilterSliceFetch {
  categoryId: number;
  currentPage: number;
  searchValue: string;
  sortProperty: string;
}

export type PizzaItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: number;
  size: number;
  count: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface PizzaSliceState {
  pizzas: PizzaItem[];
  status: Status;
}
