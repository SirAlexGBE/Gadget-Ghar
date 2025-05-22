import React, {useState, useEffect} from "react";
import {products} from "../Data/Data";
import ProductCard from "../Components/ProductCard";
import {useSearchParams, Link} from "react-router-dom";
import {Player} from "@lottiefiles/react-lottie-player";
import productNotFound from "../Animation/Product not found.json";
import FilterProducts from "../Components/FilterProducts";
import {ChevronDown, Filter, X} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {addToWishlist, removeFromWishlist} from "../Redux/Slices/WishlistSlice";

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

  // Mobile filter drawer state
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  // Redux dispatch
  const dispatch = useDispatch();

  // Wishlist state from Redux
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  // Update filteredProducts when URL query changes
  useEffect(() => {
    setFilteredProducts(initialFilteredProducts);
    setFiltersApplied(false);
  }, [query]);

  // Handle filtering from the FilterProducts component
  const handleFilter = (filteredResults) => {
    setFilteredProducts(filteredResults);
    setFiltersApplied(true);
    // Close drawer on mobile after applying filters
    if (window.innerWidth < 768) {
      setFilterDrawerOpen(false);
    }
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

  // Toggle filter drawer
  const toggleFilterDrawer = () => {
    setFilterDrawerOpen(!filterDrawerOpen);
  };

  // Count the number of products
  const productCount = filteredProducts.length;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 relative ">
        {/* Mobile Filter Button */}
        <div className="md:hidden sticky top-0 z-30 bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-b-lg shadow-md flex justify-between items-center">
          <h2 className="text-white font-semibold text-lg">
            {productCount} {productCount === 1 ? "product" : "products"}
          </h2>
          <button onClick={toggleFilterDrawer} className="flex items-center gap-1 bg-white/90 text-indigo-800 px-3 py-1.5 rounded-md shadow-sm">
            <Filter size={16} />
            <span>Filters</span>
          </button>
        </div>

        {/* Mobile Filter Drawer */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${filterDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={toggleFilterDrawer}
        ></div>
        <div
          className={`fixed inset-y-0 right-0 z-50 w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
            filterDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center border-b border-gray-200 p-4">
            <h3 className="font-bold text-lg text-gray-800">Filters</h3>
            <button onClick={toggleFilterDrawer} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <div className="p-4 overflow-y-auto h-full pb-24">
            {filterDrawerOpen && (
              <div className="h-full overflow-y-auto">
                <FilterProducts products={initialFilteredProducts} onFilter={handleFilter} />
              </div>
            )}
          </div>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden md:block md:float-left md:w-72 md:pr-8 md:sticky md:top-4 md:h-screen md:pb-20">
          <FilterProducts products={initialFilteredProducts} onFilter={handleFilter} />
        </aside>

        {/* Main Content */}
        <div className="md:ml-72">
          {/* Hero Section with Product Count and Sorting */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-4 md:p-6 mb-6 mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-white text-xl md:text-3xl font-bold mb-1 md:mb-2">{query ? `Search Results: "${query}"` : "All Products"}</h1>
              <p className="text-indigo-100 text-sm md:text-lg">
                {productCount} {productCount === 1 ? "product" : "products"} found
                {filtersApplied ? " with applied filters" : ""}
              </p>
            </div>
            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-white text-xs md:text-sm font-medium whitespace-nowrap">
                Sort by:
              </label>
              <div className="relative">
                <select
                  id="sort"
                  value={sortOption}
                  onChange={handleSortChange}
                  className="appearance-none bg-white/90 backdrop-blur-sm rounded-md px-2 md:px-3 py-1 md:py-1.5 pr-8 text-xs md:text-sm font-medium text-indigo-800 border border-purple-200 shadow-sm hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
                >
                  <option value="default">Default</option>
                  <option value="price-low-high">Price: Low - High</option>
                  <option value="price-high-low">Price: High - Low</option>
                  <option value="rating">Rating</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-700">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <main>
            {filteredProducts.length > 0 ? (
              <div className="grid justify-items-center grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {getSortedProducts().map((product) => {
                  const isProductInWishlist = wishlistItems.includes(product.id);

                  return (
                    <Link to={`/productdetails?id=${product.id}`} key={product.id} className="block">
                      <ProductCard
                        product={product}
                        onWishlistToggle={() => {
                          if (isProductInWishlist) {
                            dispatch(removeFromWishlist(product.id));
                          } else {
                            dispatch(addToWishlist(product.id));
                          }
                        }}
                        isInWishlist={isProductInWishlist}
                      />
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center py-4 md:py-7">
                <Player autoplay loop src={productNotFound} style={{height: "200px", width: "200px"}} className="md:h-64 md:w-64" />
                <h2 className="text-xl md:text-2xl font-semibold mt-4 text-center px-4">No products found {query ? `matching "${query}"` : "with current filters"}</h2>
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
