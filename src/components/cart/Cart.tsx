import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/slices/cartSlice";
import EmptyCard from "../emptyCart/EmptyCart";
import FullCart from "../fullCart/FullCart";

type Carttypes = {
  totalCount: any;
};
const Cart: React.FC<Carttypes> = ({ totalCount }) => {
  const { items, totalPrice } = useSelector(cartSelector);
  return !items.length ? (
    <EmptyCard />
  ) : (
    <FullCart pizzas={items} totalPrice={totalPrice} totalCount={totalCount} />
  );
};

export default Cart;
