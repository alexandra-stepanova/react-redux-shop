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
          <Route path="react-redux-shop/" element={<Home />} />
          <Route
            path="react-redux-shop/pizza/:id"
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                <SinglePage />
              </Suspense>
            }
          />
          <Route
            path="react-redux-shop/cart"
            element={
              <Suspense fallback={<div>Loading ...</div>}>
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
              <Suspense fallback={<div>Loading ...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
  );
};

export default App;
