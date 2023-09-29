import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
    const { cart, clearCart } = useContext(CartContext);

    const totalCost = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2);
    const handleCheckout = () => {
        console.log('Checkout confirmed:', { cart, totalCost });
        clearCart();
    };

    if (!cart || cart.length === 0) return <p>Your cart is empty. Click <Link to="/">here</Link> to return to home.</p>;

    return (
        <div>
            <h1>Checkout</h1>
            <p>Total Cost: ${totalCost}</p>
            <button onClick={handleCheckout}>Confirm Checkout</button>
        </div>
    )
};

export default CheckoutPage;