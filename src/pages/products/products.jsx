import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/productCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5173/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full h-full pt-14 overflow-hidden">
      <div className="w-full h-full overflow-y-scroll no-scrollbar p-5 flex gap-2 flex-wrap justify-between">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;