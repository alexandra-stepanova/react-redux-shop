export type CartItemSlice = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  types: [];
  sizes: [];
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItemSlice[];
}
