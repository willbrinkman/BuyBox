import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchSingleProduct } from "../../services/api";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateCart } = useContext(CartContext);
  const [cartProducts, setCartProducts] = useState([]);

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
        console.log(cartProducts);
      } catch (error) {
        console.error("Error loading cart products:", error);
      }
    }

    loadCartProducts();
  }, [cart]);

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
                initialQuantity={product.quantity}
                showDetail={false}
                showAdjust={true}
                onAddToCart={addToCart}
                onRemove={handleRemove}
                showRemove={true}
                isInCart={true}
              />
            ))}
            <Link to="/checkout">Proceed to Checkout</Link>
          </div>
        </>
      ) : (
        <p>
          Your cart is empty. Click <Link to="/">here</Link> to return to home.
        </p>
      )}
    </div>
  );
};

export default CartPage;
