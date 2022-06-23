import React from "react";
import { useState } from "react";
import { createRoutesFromChildren, Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  const [countToCart, setCounToCart] = useState(0);

  const quantity = (count) => {
    setCounToCart(count);
  };

  return (
    <div className="col-12 text-center">
      <h4>{props.product.title}</h4>

      <img src={props.product.pictureUrl} alt={props.product.title} />
      <h5>AR$ {props.product.price}</h5>
      <h6>{props.product.description}</h6>
      <ItemCount initial={1} stock={props.product.stock} quantity={quantity} />
      <Link to="/Cart">Ir al Carrito</Link>
    </div>
  );
};

export default ItemDetail;
