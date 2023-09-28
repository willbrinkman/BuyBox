import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

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

return (
    <cartContext.Provider>
        {children}
    </cartContext.Provider>
)

};