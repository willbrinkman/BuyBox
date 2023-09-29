import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";

const ProductCard = ({
  product,
  isLarge = false,
  initialQuantity = 1,
  showDetail,
  onAddToCart,
  onRemove,
  isInCart = false,
}) => {
  const { isAuthenticated } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(initialQuantity);
  const { updateCart } = useContext(CartContext);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(product.id, newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    updateCart(product.id, newQuantity);
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className={isLarge ? "product-card large" : "product-card"}>
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-element">{product.title}</h3>
      <p className="product-element">Price: ${product.price}</p>
      {showDetail && <p className="product-element">{product.description}</p>}
      {showDetail && isAuthenticated && !isInCart && (
        <button onClick={() => onAddToCart(product, initialQuantity)}>
          Add to Cart
        </button>
      )}
      {isInCart && (
        <>
          <div className="quantity-adjuster">
            <button onClick={handleDecrement} disabled={quantity <= 1}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <button onClick={() => onRemove(product)}>Remove</button>
        </>
      )}
    </div>
  );
};

export default ProductCard;
