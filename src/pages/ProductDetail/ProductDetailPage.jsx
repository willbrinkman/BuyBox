import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductDetailPage = () => {
  const { productId } = useParams();


  return (
    <ProductCard 
      product={product}
      showDetail={true}
      showAdjust={false}
    />
  );
};

export default ProductDetailPage;
