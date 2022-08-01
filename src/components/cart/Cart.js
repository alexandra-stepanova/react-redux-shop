import React from "react";
import { useSelector } from "react-redux";
import EmptyCard from "../emptyCart/EmptyCart";
import FullCart from "../fullCart/FullCart";

function Cart({ totalCount }) {
  const { items, totalPrice } = useSelector((state) => state.cart);
  return !items.length ? (
    <EmptyCard />
  ) : (
    <FullCart pizzas={items} totalPrice={totalPrice} totalCount={totalCount} />
  );
}

export default Cart;
