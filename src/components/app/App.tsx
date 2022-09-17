import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayoyt from "../layouts/MainLayout";
import Main from "../main/Main";
import Cart from "../../pages/Cart";
import SinglePage from "../../pages/SinglePage";
import NotFound from "../notFound/NotFound";

const App: React.FC = () => {
  const { items, totalPrice } = useSelector((state: any) => state.cart);
  const totalCount = (items: []) =>
    items.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <div className="app">
      <Routes>
        <Route element={<MainLayoyt items={items} totalPrice={totalPrice} totalCount={totalCount}/>}>
          <Route path="" element={<Main />} />
          <Route path="pizza/:id" element={<SinglePage />} />
          <Route path="cart" element={<Cart items={items} totalPrice={totalPrice} totalCount={totalCount}/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
