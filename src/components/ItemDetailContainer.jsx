import React, { useEffect, useState } from "react";
import { customFetchDetail } from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { products } from "../utils/products";

const ItemDetailContainer = (props) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    customFetchDetail(3000, products).then((resultado) => setItem(resultado));
  }, [item]);

  return (
    <div className="container">
      <div className="row">
        <ItemDetail product={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
