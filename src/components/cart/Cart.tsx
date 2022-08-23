import React from "react";
import { useSelector } from "react-redux";
import EmptyCard from "../emptyCart/EmptyCart";
import FullCart from "../fullCart/FullCart";

type Carttypes = {
  totalCount: (items: []) => number;
};
const Cart: React.FC<Carttypes> = ({ totalCount }) => {
  const { items, totalPrice } = useSelector((state: any) => state.cart);
  return !items.length ? (
    <EmptyCard />
  ) : (
    <FullCart pizzas={items} totalPrice={totalPrice} totalCount={totalCount} />
  );
};

export default Cart;
