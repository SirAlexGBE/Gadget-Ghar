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

  // Sorting state
  const [sortOption, setSortOption] = useState("default");

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

  // Handle sorting
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Sort products based on sortOption
  const getSortedProducts = () => {
    let sorted = [...filteredProducts];
    if (sortOption === "price-low-high") {
      sorted.sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, "")) - parseFloat(b.price.replace(/[^0-9.]/g, "")));
    } else if (sortOption === "price-high-low") {
      sorted.sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, "")) - parseFloat(a.price.replace(/[^0-9.]/g, "")));
    } else if (sortOption === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
  };

  // Count the number of products
  const productCount = filteredProducts.length;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-[120vh] pb-12">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Sidebar */}
        <aside className="absolute left-0 top-0 h-full w-72 min-w-[18rem] max-w-[18rem] z-20">
          <FilterProducts products={initialFilteredProducts} onFilter={handleFilter} />
        </aside>
        {/* Main Content */}
        <div className="pl-72">
          {/* Hero Section with Product Count and Sorting */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-6 mb-8 mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-white text-3xl font-bold mb-2">{query ? `Search Results: "${query}"` : "All Products"}</h1>
              <p className="text-indigo-100 text-lg">
                {productCount} {productCount === 1 ? "product" : "products"} found
                {filtersApplied ? " with applied filters" : ""}
              </p>
            </div>
            {/* Sorting Dropdown */}
            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-white text-sm font-medium">
                Sort by:
              </label>
              <div className="relative">
                <select
                  id="sort"
                  value={sortOption}
                  onChange={handleSortChange}
                  className="appearance-none bg-white/90 backdrop-blur-sm rounded-md px-3 py-1.5 pr-8 text-sm font-medium text-indigo-800 border border-purple-200 shadow-sm hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
                >
                  <option value="default">Default</option>
                  <option value="price-low-high">Price: Low - High</option>
                  <option value="price-high-low">Price: High - Low</option>
                  <option value="rating">Rating</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-700">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Products Grid */}
          <main>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {getSortedProducts().map((product) => (
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
