import React from "react";
import { Outlet } from "react-router";
import Header from "../header/Header";

export type MainTypes = {
  items: [];
  totalPrice: number;
  totalCount: (items: []) => number;
};
const MainLayoyt: React.FC<MainTypes> = ({ items, totalPrice, totalCount }) => {
  return (
    <div className="app">
      <Header items={items} totalPrice={totalPrice} totalCount={totalCount} />
      <Outlet />
    </div>
  );
};

export default MainLayoyt;
