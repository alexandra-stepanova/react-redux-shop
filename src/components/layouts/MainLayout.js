import React from "react";
import { Outlet } from "react-router";
import Header from "../header/Header";

const MainLayoyt = ({ totalCount }) => {
  return (
    <div className="app">
      <Header totalCount={totalCount} />
      <Outlet />
    </div>
  );
};

export default MainLayoyt;
