import { createContext } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

return (
    <cartContext.Provider>
        {children}
    </cartContext.Provider>
)

};