import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <>
      <h6>{props.greeting}</h6>
      <ItemCount stock={5} initial={1} onAdd={() => {}} />
    </>
  );
};

export default ItemListContainer;
