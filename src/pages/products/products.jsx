import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/productCard";
import { getProducts } from "../../services/products.service";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:5173/data/products.json")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => setProducts(data))
  //     .catch((err) => setError(err.message));
  // }, []);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="w-full h-full pt-14 overflow-hidden">
      <div className="w-full h-full overflow-y-scroll no-scrollbar p-5 flex gap-2 flex-wrap justify-between">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.image}
              price={product.price}
            />
          ))
        ) : (
          <div className="w-full h-full p-5 text-center">
            <h2 className="">Tidak ada data</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
