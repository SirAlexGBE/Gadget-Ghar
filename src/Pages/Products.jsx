import React from "react";
import {products} from "../Data/Data";
import ProductCard from "../Components/ProductCard";
import {useSearchParams} from "react-router-dom";
import {Player} from "@lottiefiles/react-lottie-player"; //
import productNotFound from "../Animation/Product not found.json";

export default function Products() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("name")?.toLowerCase() || "";

  const filteredProducts = products.filter((product) => {
    if (query === "sales") {
      return product.isOnSale;
    }
    return (
      product.brand.toLowerCase().includes(query) ||
      (product.badge && product.badge.toLowerCase().includes(query)) ||
      product.category.toLowerCase().includes(query) ||
      product.name.toLowerCase().includes(query)
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 gap-4 lg:grid-cols-4 xl:grid-cols-5">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
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
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center py-7">
          <Player autoplay loop src={productNotFound} style={{height: "300px", width: "300px"}} />
          <h2 className="text-2xl font-semibold mt-4">No products found matching "{query}"</h2>
        </div>
      )}
    </div>
  );
}
