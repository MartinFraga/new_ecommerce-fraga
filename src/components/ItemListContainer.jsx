import React, { useEffect, useState } from "react";
import { customFetch, customFetchCategory } from "../utils/customFetch";
import ItemList from "./ItemList";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      customFetch(1500, products).then((resultado) => setItems(resultado));
    } else {
      customFetchCategory(1000, products, category).then((resultado) =>
        setItems(resultado)
      );
    }
  }, [category]);

  return (
    <>
      <ItemList products={items} />
    </>
  );
};

export default ItemListContainer;
