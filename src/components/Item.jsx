import React from "react";
import { Link } from "react-router-dom";

// Información Breve del Producto mostrar id, title, price, pictureUrl

const Item = (props) => {
  return (
    <div className="col-4 text-center">
      <h4 className="text-center">{props.elem.title}</h4>
      <img
        className="img-responsive center-block d-block mx-auto"
        src={props.elem.pictureUrl}
        alt={props.elem.title}
      />
      <h5 className="text-center">AR$ {props.elem.price}</h5>
      <Link to={`/detail/${props.elem.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
