import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  console.log(props);
  return (
    <div className="col-12 text-center">
      <h4>{props.product.title}</h4>

      <img src={props.product.pictureUrl} alt={props.product.title} />
      <h5>AR$ {props.product.price}</h5>
      <h6>{props.product.description}</h6>
      <ItemCount initial={1} stock={props.product.stock} />
    </div>
  );
};

export default ItemDetail;
