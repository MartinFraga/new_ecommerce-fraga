import React, { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemList from "./ItemList";
import { products } from "../utils/products";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    customFetch(3000, products).then((resultado) => setItems(resultado));
  }, [items]);

  return (
    <>
      <ItemList products={items} />
    </>
  );
};

export default ItemListContainer;
