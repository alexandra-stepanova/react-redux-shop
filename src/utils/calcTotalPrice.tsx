import { CartItemTypes } from "../components/cartItem/CartItem";

export const calcTotalPrice = (items: CartItemTypes[]) => {
  return items.reduce((sum, obj) => {
    // подсчет сумму за все пиццы
    return obj.price * obj.count + sum;
  }, 0);
};
