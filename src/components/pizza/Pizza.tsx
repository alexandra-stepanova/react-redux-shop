import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import pizzaTypes from "../../utils/pizzaTypes";
import { addItem, cartItemByIdSelector } from "../../redux/slices/cartSlice";

export type PizzaTypes = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  sizes: [];
  types: any;
  count: number;
};

const Pizza: React.FC<PizzaTypes> = ({
  id,
  name,
  imageUrl,
  price,
  sizes,
  types,
}) => {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const cartItem = useSelector(cartItemByIdSelector(id));
  const addCount = cartItem ? cartItem.count : 0;
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item: PizzaTypes  = {
      id,
      name,
      imageUrl,
      price,
      sizes: sizes[activeSize],
      types: pizzaTypes[activeType],
      count: 0,
    };
    dispatch(addItem(item));
  };

  console.log(typeof(types))
  return (
    <li className="pizza-block">
      <Link key={id} to={`pizza/${id}`}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{name}</h4>
      </Link>
      <div className="pizza-block__selector">
        <ul className="decoration">
          {types.map((type: number, index: number) => {
            return (
              <li
                onClick={() => setActiveType(type)}
                key={index}
                className={`type ${activeType === type ? "active" : ""}`}
              >
                {pizzaTypes[type]}
              </li>
            );
          })}
        </ul>
        <ul className="decoration">
          {sizes.map((size: number, index: number) => {
            return (
              <li
                onClick={() => setActiveSize(index)}
                key={index}
                className={`type ${activeSize === index ? "active" : ""}`}
              >
                {size} см
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button
          onClick={onClickAdd}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addCount > 0 && <i>{addCount}</i>}
        </button>
      </div>
    </li>
  );
};

export default Pizza;
