import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/productCard";

const Products = () => {
  const [isProducts, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5173/data/products.json")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => setProducts(err));
  }, []);
  console.log(isProducts)
  return (
    <div className="w-full h-full pt-14 overflow-hidden">
      <div className="w-full h-full overflow-y-scroll no-scrollbar p-5 flex gap-2 flex-wrap justify-between">
        {isProducts.map(product => (
          <ProductCard key={product.id} id={product.id} title={product.name} image={product.image} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default Products;
