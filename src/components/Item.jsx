import React from "react";

// Información Breve del Producto mostrar id, title, price, pictureUrl

const Item = (props) => {
  return (
    <div>
      <h4>{props.elem.title}</h4>
      <h5>{props.elem.price}</h5>
      <img src={props.elem.pictureUrl} alt={props.elem.title} />
    </div>
  );
};

export default Item;
