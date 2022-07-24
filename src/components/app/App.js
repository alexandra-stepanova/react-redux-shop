import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Main from "../main/Main";
import Cart from "../cart/Cart";
import NotFound from "../notFound/NotFound";
import api from "../../utils/api";
import { useSelector } from "react-redux";

function App() {
  const { categoryId, sortType } = useSelector((state) => state.filters);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  let sortProperty = sortType.sortProperty;

  React.useEffect(() => {
    setIsLoading(true);
    api
      .getPizzas(categoryId, sortProperty, searchValue, currentPage)
      .then((response) => {
        setPizzas(response);
      })
      .catch((error) => console.log("error", error))
      .finally(() => setTimeout(() => setIsLoading(false), 500));
  }, [categoryId, sortProperty, searchValue, currentPage]);

  return (
    <div className="app">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              pizzas={pizzas}
              isLoading={isLoading}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          }
        />
        <Route path="/cart" element={<Cart pizzas={pizzas} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
