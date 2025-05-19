import React, {useState, useEffect} from "react";
import {products} from "../Data/Data";
import ProductCard from "../Components/ProductCard";
import {useSearchParams, Link} from "react-router-dom";
import {Player} from "@lottiefiles/react-lottie-player";
import productNotFound from "../Animation/Product not found.json";
import FilterProducts from "../Components/FilterProducts";

export default function Products() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("name")?.toLowerCase() || "";

  // Filter products by query from URL
  const initialFilteredProducts = products.filter((product) => {
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

  // State for filtered products (affected by both URL query and filter component)
  const [filteredProducts, setFilteredProducts] = useState(initialFilteredProducts);

  // State to track if filters are applied
  const [filtersApplied, setFiltersApplied] = useState(false);

  // Update filteredProducts when URL query changes
  useEffect(() => {
    setFilteredProducts(initialFilteredProducts);
    setFiltersApplied(false);
  }, [query]);

  // Handle filtering from the FilterProducts component
  const handleFilter = (filteredResults) => {
    setFilteredProducts(filteredResults);
    setFiltersApplied(true);
  };

  // Count the number of products
  const productCount = filteredProducts.length;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pb-12">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Sidebar */}
        <aside className="absolute left-0 top-0 h-full w-72 min-w-[18rem] max-w-[18rem] z-20">
          <FilterProducts products={initialFilteredProducts} onFilter={handleFilter} />
        </aside>
        {/* Main Content */}
        <div className="pl-72">
          {" "}
          {/* Padding left for sidebar */}
          {/* Hero Section with Product Count */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-6 mb-8 mt-6">
            <h1 className="text-white text-3xl font-bold mb-2">{query ? `Search Results: "${query}"` : "All Products"}</h1>
            <p className="text-indigo-100 text-lg">
              {productCount} {productCount === 1 ? "product" : "products"} found
              {filtersApplied ? " with applied filters" : ""}
            </p>
          </div>
          {/* Products Grid */}
          <main>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
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
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center py-7">
                <Player autoplay loop src={productNotFound} style={{height: "300px", width: "300px"}} />
                <h2 className="text-2xl font-semibold mt-4">No products found {query ? `matching "${query}"` : "with current filters"}</h2>
                {filtersApplied && (
                  <button
                    onClick={() => {
                      setFilteredProducts(initialFilteredProducts);
                      setFiltersApplied(false);
                    }}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
