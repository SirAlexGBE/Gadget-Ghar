import React from "react";
import {products} from "../Data/Data";
import ProductCard from "../Components/ProductCard";

export default function Products() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 gap-4 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          brand={product.brand}
          price={product.price}
          isOnSale={product.isOnSale}
          salePrice={product.salePrice}
          badge={product.badge}
        />
      ))}
    </div>
  );
}
