import React from "react";
import categories from "../../utils/categories";

function Catigories({ categoryId, onClickCategory }) {
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
