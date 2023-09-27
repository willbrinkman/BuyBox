import React, { useState, useEffect } from 'react';
import { fetchAllProducts } from '../services/api';

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
    return (
<div>
    <h1>Products</h1>

</div>
    );
};

export default ProductsPage;