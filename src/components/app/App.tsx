import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../../pages/Home";
import MainLayoyt from "../layouts/MainLayout";

const Cart = React.lazy(
  () => import(/*webpackChankName: "Cart"*/ "../../pages/Cart")
);
const SinglePage = React.lazy(
  () => import(/*webpackChankName: "SinglePage"*/ "../../pages/SinglePage")
);
const NotFound = React.lazy(
  () => import(/*webpackChankName: "NotFound"*/ "../../pages/NotFound")
);

const App: React.FC = () => {
  const { items, totalPrice } = useSelector((state: any) => state.cart);
  const totalCount = (items: []) =>
    items.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <div className="app">
      <Routes>
        <Route
          element={
            <MainLayoyt
              items={items}
              totalPrice={totalPrice}
              totalCount={totalCount}
            />
          }
        >
          <Route path="" element={<Home />} />
          <Route
            path="pizza/:id"
            element={
              <Suspense fallback={<div>Идет загрузка ...</div>}>
                <SinglePage />
              </Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <Suspense fallback={<div>Идет загрузка ...</div>}>
                <Cart
                  items={items}
                  totalPrice={totalPrice}
                  totalCount={totalCount}
                />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Идет загрузка ...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
