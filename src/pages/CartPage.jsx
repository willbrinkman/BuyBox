import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import ProductCard from "../components/ProductCard";
import { fetchSingleProduct } from "../services/api";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } =
    useContext(CartContext);
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCartProducts() {
      try {
        const productDetails = await Promise.all(
          cart.map(async (item) => {
            const product = await fetchSingleProduct(item.product.id);
            return { ...product, quantity: item.quantity };
          })
        );
        setCartProducts(productDetails);
      } catch (error) {
        console.error("Error loading cart products:", error);
      }
    }

    loadCartProducts();
  }, [cart]);

  const totalCost = cart
    .reduce((total, item) => total + item.product.price * item.quantity, 0)
    .toFixed(2);
  const handleCheckout = () => {
    alert(`Checkout confirmed for $${totalCost}`);
    clearCart();
    navigate("/");
  };

  return (
    <div>
      <h1 className="title">Your Cart</h1>
      {cartProducts.length > 0 ? (
        <>
          <div>
            {cartProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isLarge={true}
                initialQuantity={product.quantity}
                showDetail={false}
                isInCart={true}
                onRemove={(product) => removeFromCart(product.id, "remove")}
              />
            ))}
            <p>Total Cost: ${totalCost}</p>
            <button onClick={handleCheckout}>Confirm Checkout</button>
          </div>
        </>
      ) : (
        <p className="center-text">
          Your cart is empty. Click <Link to="/">here</Link> to return to home.
        </p>
      )}
    </div>
  );
};

export default CartPage;
