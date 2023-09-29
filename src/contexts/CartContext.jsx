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
        const existingProductIndex = cart.findIndex(item => item.product.id === product.id);
    
        if (existingProductIndex !== -1) {
          const updatedCart = [...cart];
          updatedCart[existingProductIndex].quantity += quantity;
          setCart(updatedCart);
        } else {
          setCart(prevCart => [...prevCart, { product, quantity }]);
        }
      };
    
      const updateCart = (productId, newQuantity) => {
        const updatedCart = cart.map(item => 
          item.product.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
      };

      const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.product.id !== productId));
      };
    
      const clearCart = () => {
        setCart([]);
        sessionStorage.removeItem('cart');
      };
return (
    <CartContext.Provider value={{ cart, updateCart, addToCart, removeFromCart, clearCart }}>
        {children}
    </CartContext.Provider>
)

