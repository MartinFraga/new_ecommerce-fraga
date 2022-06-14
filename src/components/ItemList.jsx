import React, { useState } from "react";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.products.map((elem) => (
          <Item key={elem.id} elem={elem} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
