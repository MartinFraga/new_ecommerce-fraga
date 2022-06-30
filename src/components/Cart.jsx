import React, { useContext } from "react";
import { CartContex } from "../context/CartContex";

const Cart = () => {
  const { cart, clearCart, deleteItem, priceCalc } = useContext(CartContex);

  if (priceCalc() === 0) {
    return <h4>Su cart está vacío</h4>;
  }

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

      <h4>Valor Total de su pedido AR$ {priceCalc()}</h4>
    </div>
  );
};

export default Cart;
