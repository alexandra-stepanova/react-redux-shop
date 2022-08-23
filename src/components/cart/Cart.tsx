import React from "react";
import FullCart from "../fullCart/FullCart";
import { MainTypes } from "../layouts/MainLayout";

const Cart: React.FC<MainTypes> = ({ items, totalPrice, totalCount }) => {
  return (
    <FullCart items={items} totalPrice={totalPrice} totalCount={totalCount} />
  );
};

export default Cart;
