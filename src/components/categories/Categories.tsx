import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";
import categories from "../../utils/categories";

const Catigories: React.FC = () => {
  const categoryId = useSelector((state: any) => state.filters.categoryId);
  const dispatch = useDispatch();

  function onClickCategory(id: number) {
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
