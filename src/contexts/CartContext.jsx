import { createContext, useState } from 'react';

// Create the Cart Context
export const CartContext = createContext();

// Create the Cart Provider
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add to Cart Function
  function addToCart(product) {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: product.quantity || 1 }];
      }
    });
  }

  // Remove from Cart Function
  function removeFromCart(productId) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }

  // Clear Cart Function
  function clearCart() {
    setCartItems([]);
  }

  // Provide Context Values
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
