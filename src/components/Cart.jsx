import React, { useContext } from "react";
import { CartContex } from "../context/CartContex";

const Cart = () => {
  const { cart, clearCart, deleteItem } = useContext(CartContex);

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <h3>{item.cantidad}</h3>
          <button onClick={() => deleteItem(item.id)}>Eliminar Item</button>
        </div>
      ))}
      <button onClick={clearCart}>Vaciar Cart</button>
    </div>
  );
};

export default Cart;
