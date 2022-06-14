import React, { useState } from "react";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <div>
      {props.products.map((elem) => (
        <Item key={elem.id} elem={elem} />
      ))}
    </div>
  );
};

export default ItemList;
