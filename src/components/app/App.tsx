import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayoyt from "../layouts/MainLayout";
import SinglePage from "../../pages/SinglePage";
// import NotFound from "../../pages/NotFound";

const Cart = React.lazy(() => import("../../pages/Cart"));
const Home = React.lazy(() => import("../../pages/Home"));
const NotFound = React.lazy(() => import("../../pages/NotFound"));

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
          <Route
            path=""
            element={
              <React.Suspense fallback={<div>Идет загрузка ...</div>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route path="pizza/:id" element={<SinglePage />} />
          <Route
            path="cart"
            element={
              <React.Suspense fallback={<div>Идет загрузка ...</div>}>
                <Cart
                  items={items}
                  totalPrice={totalPrice}
                  totalCount={totalCount}
                />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<div>Идет загрузка ...</div>}>
                <NotFound />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
