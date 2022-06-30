import { createContext, useState } from "react";

// Creo el contexto
export const CartContex = createContext();

// Creo el provider
const CartContexProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => cart.some((product) => product.id === id);
  const updateCart = (id, cantidad) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        const updatedProduct = { ...item, cantidad: item.cantidad + cantidad };
        return updatedProduct;
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      updateCart(item.id, cantidad);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const deleteItem = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  };

  const clearCart = () => setCart([]);

  // Agrupadores de Cantidad y Precio Totales.
  const quantityCalc = () =>
    cart.reduce((prev, current) => prev + current.cantidad, 0);

  const priceCalc = () =>
    cart.reduce((prev, current) => prev + current.cantidad * current.price, 0);

  return (
    <CartContex.Provider
      value={{ cart, addItem, clearCart, deleteItem, quantityCalc, priceCalc }}
    >
      {children}
    </CartContex.Provider>
  );
};

export default CartContexProvider;
