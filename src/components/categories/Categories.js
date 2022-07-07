import React from "react";
import categories from "../../utils/categories";

function Catigories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="categories">
      <ul className="types">
        {categories.map((categorie, index) => {
          return (
            <li
              onClick={() => onClickCategory(index)} key={index}
              className={`type ${activeIndex === index? "active" : ""}`}
            >
              {categorie}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Catigories;
