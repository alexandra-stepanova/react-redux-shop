import React from "react";
import { Outlet } from "react-router";
import Header from "../header/Header";

type MainLayoytType = {
  totalCount: any;
};
const MainLayoyt: React.FC<MainLayoytType> = ({ totalCount }) => {
  return (
    <div className="app">
      <Header totalCount={totalCount} />
      <Outlet />
    </div>
  );
};

export default MainLayoyt;
