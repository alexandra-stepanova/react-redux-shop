import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const SinglePage: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    name: string;
  }>({});
  const { id } = useParams();

  React.useEffect(() => {
    async function getPizza() {
      try {
        const { data } = await axios.get(
          `https://62c80ec00f32635590d05660.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPizza();
  }, [id]);
  return (
    <div>
      <img src={pizza.imageUrl} alt="img" />
      <p>{pizza.name}</p>
    </div>
  );
};

export default SinglePage;
