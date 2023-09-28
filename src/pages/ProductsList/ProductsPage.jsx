import { useState, useEffect } from "react";
import { fetchAllProducts, fetchAllCategories } from "../../services/api.js";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

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

  const displayedProducts = products
    .filter((product) => (category ? product.category === category : true))
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sort) {
        case "asc":
          return a.title.localeCompare(b.title);
        case "desc":
          return b.title.localeCompare(a.title);
        case "priceLowHigh":
          return a.price - b.price;
        case "priceHighLow":
          return b.price - a.price;
        default:
          return 0;
      }
    });

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
      <label>
        Min: $
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
        />
        Max: $
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </label>
      <label>
        Sort By:
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Select...</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
          <option value="priceLowHigh">Low to High</option>
          <option value="priceHighLow">High to Low</option>
        </select>
      </label>
      <ul>
        {displayedProducts.map((product) => (
          <li key={product.id}>
          <Link to={`/products/${product.id}`}>
            <ProductCard
              product={product}
              showDetail={false}
              showAdjust={false}
              // Pass other required props
            />
          </Link>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
