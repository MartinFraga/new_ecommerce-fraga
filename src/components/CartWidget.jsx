import React, { useContext } from "react";
import { CartContex } from "../context/CartContex";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { quantityCalc } = useContext(CartContex);
  return (
    <>
      <Link to="/Cart">
        <span className="material-symbols-outlined">shopping_cart</span>
      </Link>
      <span>{quantityCalc()}</span>
    </>
  );
};

export default CartWidget;
