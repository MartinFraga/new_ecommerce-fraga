import React, { useEffect, useState } from "react";
import { customFetchDetail } from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = (props) => {
  const [item, setItem] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    customFetchDetail(1500, products, productId).then((resultado) =>
      setItem(resultado)
    );
  }, [productId]);

  return (
    <div className="container">
      <div className="row">
        <ItemDetail product={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
