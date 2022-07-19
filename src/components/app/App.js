import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Main from "../main/Main";
import Cart from "../cart/Cart";
import NotFound from "../notFound/NotFound";

import api from "../../utils/api";

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  let sortProperty = sortType.sortProperty;

  React.useEffect(() => {
    setIsLoading(true);
    api
      .getPizzas(categoryId, sortProperty)
      .then((response) => {
        setPizzas(response);
      })
      .catch((error) => console.log("error", error))
      .finally(() => setTimeout(() => setIsLoading(false), 600));
  }, [categoryId, sortProperty]);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              pizzas={pizzas}
              isLoading={isLoading}
              categoryId={categoryId}
              onClickCategory={(index) => setCategoryId(index)}
              sortType={sortType}
              onClickType={(index) => setSortType(index)}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
