import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const SinglePage: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    name: string;
  }>({ imageUrl: "", name: "" });
  const { id } = useParams();

  React.useEffect(() => {
    async function getPizza() {
      try {
        const { data } = await axios.get(
          `https://66093beb0f324a9a2882f528.mockapi.io/Pizzas/${id}`
        );
        setPizza(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPizza();
  }, [id]);
  console.log(pizza)
  return (
    <div className="singlePage">
      <img src={pizza.imageUrl} alt="img" className="singlePage__image"/>
      <p>{pizza.name}</p>
    </div>
  );
};

export default SinglePage;
