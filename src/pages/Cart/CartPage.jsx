import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import ProductCard from "../../components/ProductCard/ProductCard";

const CartPage = () => {
  const { cart, removeFromCart, updateCart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        cart.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showDetail={false}
            showAdjust={true}
            onUpdateCart={updateCart}
            onRemove={removeFromCart}
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
