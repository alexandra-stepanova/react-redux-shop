import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";
import categories from "../../utils/categories";

function Catigories({ categoryId }) {
  const dispatch = useDispatch();

  function onClickCategory(id) {
    dispatch(setCategoryId(id));
  }
  return (
    <div className="categories">
      <ul className="types">
        {categories.map((categorie, index) => {
          return (
            <li
              onClick={() => onClickCategory(index)}
              key={index}
              className={`type ${categoryId === index ? "active" : ""}`}
            >
              {categorie}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Catigories;
