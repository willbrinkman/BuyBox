import { useState } from "react";

const ProductCard = ({
  product,
  showDetail,
  showAdjust,
  onUpdateCart,
  onRemove,
  showRemove,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleUpdateCart = () => {
    onUpdateCart(product, quantity);
  };

  return (
    <div>
      <img src={product.image} alt={product.title} className="product-image"/>
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      {showDetail && <p>{product.description}</p>}
      {showAdjust && (
        <>
          <div className="quantity-adjuster">
            <button onClick={handleDecrement} disabled={quantity <= 1}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <button onClick={handleUpdateCart}>Update Cart</button>
        </>
      )}
      {showRemove && <button onClick={() => onRemove(product)}>Remove</button>}
    </div>
  );
};

export default ProductCard;
