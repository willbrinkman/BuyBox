import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchSingleProduct } from "../../services/api";

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
      } catch (error) {
        console.error('Error loading cart products:', error);
      }
    }
  
    loadCartProducts();
  }, [cart]);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            initialQuantity={product.quantity}
            showDetail={false}
            showAdjust={true}
            onUpdateCart={updateCart}
            onRemove={() => removeFromCart(product.id)}
            showRemove={true}
          />
        ))
      ) : (
        <p>Your cart is empty. Click <a href="/">here</a> to return to home.</p>
      )}
    </div>
  );
};

export default CartPage;
