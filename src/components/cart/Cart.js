import React from "react";
import EmptyCard from "../emptyCart/EmptyCart";
import FullCart from "../fullCart/FullCart";

function Cart({ pizzas }) {
  return !pizzas.length ? <EmptyCard /> : <FullCart pizzas={pizzas} />;
}

export default Cart;
