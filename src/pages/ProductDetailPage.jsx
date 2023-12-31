import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../services/api";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../contexts/CartContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchSingleProduct(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
      <ProductCard
        product={product}
        isLarge={true}
        showDetail={true}
        onAddToCart={(product) => {
          addToCart(product, 1);
          navigate("/cart");
        }}
      />
  );
};

export default ProductDetailPage;
