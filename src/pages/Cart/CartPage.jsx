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
<<<<<<< HEAD
                onAddToCart={addToCart}
                onRemove={handleRemove}
                showRemove={true}
                isInCart={true}
=======
                onUpdateCart={updateCart}
                onRemove={() => removeFromCart(product.id)}
                showRemove={true}
>>>>>>> 36bf5ae (implemented checkout page and functionality)
              />
            ))}
            <Link to="/checkout">Proceed to Checkout</Link>
          </div>
        </>
      ) : (
        <p>
<<<<<<< HEAD
          Your cart is empty. Click <Link to="/">here</Link> to return to home.
=======
          Your cart is empty. Click <a href="/">here</a> to return to home.
>>>>>>> 36bf5ae (implemented checkout page and functionality)
        </p>
      )}
    </div>
  );
};

export default CartPage;
