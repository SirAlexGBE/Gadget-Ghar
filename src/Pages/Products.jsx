import React, {useState, useEffect} from "react";
import {products} from "../Data/Data";
import ProductCard from "../Components/ProductCard";
import {useSearchParams, Link} from "react-router-dom";
import {Player} from "@lottiefiles/react-lottie-player";
import productNotFound from "../Animation/Product not found.json";
import SortProducts from "../Components/SortProducts";

export default function Products() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("name")?.toLowerCase() || "";

  // Filter products by query
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

  // State for sorted products
  const [sortedProducts, setSortedProducts] = useState(filteredProducts);

  // Update sortedProducts when filter changes
  useEffect(() => {
    setSortedProducts(filteredProducts);
  }, [query, products]);

  return (
    <div className="flex gap-6 px-4 items-start">
      {/* Sorting Sidebar */}
      <aside className="sticky top-30 h-fit self-start z-100 bg-white min-w-[220px] max-w-xs border rounded-lg shadow-sm p-4">
        <SortProducts products={filteredProducts} onSort={setSortedProducts} />
      </aside>

      {/* Products Grid */}
      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-3">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <Link to={`/productdetails?id=${product.id}`} key={product.id} className="block">
                <ProductCard
                  image={product.image}
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  isOnSale={product.isOnSale}
                  salePrice={product.salePrice}
                  badge={product.badge}
                  rating={product.rating}
                />
              </Link>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center py-7">
              <Player autoplay loop src={productNotFound} style={{height: "300px", width: "300px"}} />
              <h2 className="text-2xl font-semibold mt-4">No products found matching "{query}"</h2>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
