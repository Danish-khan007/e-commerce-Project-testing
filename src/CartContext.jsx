import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const index = currentCart.findIndex(
        (item) => item.id === product.id
      );

      if (index === -1) {
        return [...currentCart, { ...product, quantity: 1 }];
      }

      const updatedCart = [...currentCart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity + 1,
      };

      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => {
      const index = currentCart.findIndex(
        (item) => item.id === productId
      );

      if (index === -1) return currentCart;

      const updatedCart = [...currentCart];

      if (updatedCart[index].quantity > 1) {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity - 1,
        };
      } else {
        updatedCart.splice(index, 1);
      }

      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};