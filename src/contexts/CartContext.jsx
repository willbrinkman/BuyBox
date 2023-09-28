import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      }, []);
    
      useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);

      const addToCart = (product, quantity) => {
        setCart([...cart, { product, quantity }]);
      };

      const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.product.id !== productId));
      };
    
      const clearCart = () => {
        setCart([]);
        sessionStorage.removeItem('cart');
      };
return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
        {children}
    </CartContext.Provider>
)

};

