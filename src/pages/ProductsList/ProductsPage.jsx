import { useState, useEffect } from "react";
import { fetchAllProducts, fetchAllCategories } from "../../services/api.js";

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

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      try {
        const cat = await fetchAllCategories();
        setCategories(cat);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCategories();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>Loading...</p>;
  if (!products.length) return <p>No products found.</p>;

  return (
    <div>
      <h1>Products</h1>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
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
