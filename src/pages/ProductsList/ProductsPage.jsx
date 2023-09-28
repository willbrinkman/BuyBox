import { useState, useEffect } from "react";
import { fetchAllProducts } from "../../services/api.js";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>Loading...</p>;
  if (!products.length) return <p>No products found.</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
