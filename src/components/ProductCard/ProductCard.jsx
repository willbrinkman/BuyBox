import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const ProductCard = ({
  product,
  initialQuantity = 1,
  showDetail,
  onAddToCart,
  onRemove,
  isInCart = false
}) => {
  const { isAuthenticated } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div>
      <img src={product.image} alt={product.title} className="product-image"/>
      <h3 >{product.title}</h3>
      <p >Price: ${product.price}</p>
      {showDetail && <p>{product.description}</p>}
      {isAuthenticated && !isInCart && (
        <button onClick={() => onAddToCart(product, initialQuantity)}>Add to Cart</button>
      )}
      {onAddToCart && isInCart && (
        <>
          <div className="quantity-adjuster">
            <button onClick={handleDecrement} disabled={quantity <= 1}>-</button>
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
