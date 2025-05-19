import {useState} from "react";
import {ChevronDown, ChevronUp, Search} from "lucide-react";

const FilterProducts = ({products, onFilter}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    priceRange: true,
    ratings: true,
  });
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: {
      min: "",
      max: "",
    },
    ratings: [],
  });

  // Example category and count data (in a real app, you'd generate this from your products)
  const categories = [
    {name: "Smartphone", count: 15},
    {name: "Laptop", count: 16},
    {name: "Smartwatch", count: 13},
    {name: "Tablet", count: 14},
    {name: "Earbuds", count: 13},
    {name: "Monitor", count: 1},
    {name: "Cameras", count: 3},
  ];

  const brands = [
    {name: "Apple", count: 7},
    {name: "Samsung", count: 6},
    {name: "Xiaomi", count: 5},
    {name: "Lenovo", count: 4},
    {name: "HP", count: 2},
    {name: "Acer", count: 2},
    {name: "Asus", count: 3},
  ];

  const ratingOptions = [
    {value: 5, label: "5 Stars"},
    {value: 4, label: "4+ Stars"},
    {value: 3, label: "3+ Stars"},
    {value: 2, label: "2+ Stars"},
    {value: 1, label: "1+ Stars"},
  ];

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = filters.categories.includes(category) ? filters.categories.filter((c) => c !== category) : [...filters.categories, category];

    const newFilters = {
      ...filters,
      categories: updatedCategories,
    };

    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleBrandChange = (brand) => {
    const updatedBrands = filters.brands.includes(brand) ? filters.brands.filter((b) => b !== brand) : [...filters.brands, brand];

    const newFilters = {
      ...filters,
      brands: updatedBrands,
    };

    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handlePriceChange = (type, value) => {
    const newPriceRange = {
      ...filters.priceRange,
      [type]: value,
    };

    const newFilters = {
      ...filters,
      priceRange: newPriceRange,
    };

    setFilters(newFilters);

    // Only apply filter if both fields have values or both are empty
    if ((newPriceRange.min === "" && newPriceRange.max === "") || (newPriceRange.min !== "" && newPriceRange.max !== "")) {
      applyFilters(newFilters);
    }
  };

  const handleRatingChange = (rating) => {
    const updatedRatings = filters.ratings.includes(rating) ? filters.ratings.filter((r) => r !== rating) : [...filters.ratings, rating];

    const newFilters = {
      ...filters,
      ratings: updatedRatings,
    };

    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let filteredProducts = [...products];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(query) || product.brand.toLowerCase().includes(query));
    }

    // Filter by categories
    if (currentFilters.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) => currentFilters.categories.includes(product.category));
    }

    // Filter by brands
    if (currentFilters.brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) => currentFilters.brands.includes(product.brand));
    }

    // Filter by price range
    if (currentFilters.priceRange.min !== "" && currentFilters.priceRange.max !== "") {
      const min = parseFloat(currentFilters.priceRange.min);
      const max = parseFloat(currentFilters.priceRange.max);
      filteredProducts = filteredProducts.filter((product) => {
        const price = parseFloat(product.price.replace(/[^0-9.]/g, ""));
        return price >= min && price <= max;
      });
    }

    // Filter by ratings
    if (currentFilters.ratings.length > 0) {
      filteredProducts = filteredProducts.filter((product) => currentFilters.ratings.some((minRating) => product.rating >= minRating));
    }

    onFilter(filteredProducts);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Apply all filters including search
    applyFilters({
      ...filters,
      searchQuery: query,
    });
  };

  return (
    <div
      className="w-72 max-w-[18rem] min-w-[18rem] bg-white shadow-lg rounded-lg p-3 pt-2 text-xs overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-gray-100"
      style={{scrollbarWidth: "thin"}}
    >
      <div className="mb-4">
        <h3 className="text-sm font-medium text-indigo-700 mb-2 flex items-center">
          <span className="mr-2">Filters</span>
          <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full px-2 py-0.5">0</span>
        </h3>

        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full py-2 pl-8 pr-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-4 border-b border-gray-100 pb-4">
        <button onClick={() => toggleSection("categories")} className="flex items-center justify-between w-full text-sm text-indigo-600 font-medium mb-2">
          <span>Categories</span>
          {expandedSections.categories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {expandedSections.categories && (
          <div className="space-y-1">
            {categories.map((category) => (
              <label key={category.name} className="flex items-center text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                  className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">{category.name}</span>
                <span className="ml-auto text-xs text-gray-500">{category.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="mb-4 border-b border-gray-100 pb-4">
        <button onClick={() => toggleSection("brands")} className="flex items-center justify-between w-full text-sm text-indigo-600 font-medium mb-2">
          <span>Brands</span>
          {expandedSections.brands ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {expandedSections.brands && (
          <div className="space-y-1">
            {brands.map((brand) => (
              <label key={brand.name} className="flex items-center text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand.name)}
                  onChange={() => handleBrandChange(brand.name)}
                  className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">{brand.name}</span>
                <span className="ml-auto text-xs text-gray-500">{brand.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-4 border-b border-gray-100 pb-4">
        <button onClick={() => toggleSection("priceRange")} className="flex items-center justify-between w-full text-sm text-indigo-600 font-medium mb-2">
          <span>Price Range</span>
          {expandedSections.priceRange ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {expandedSections.priceRange && (
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="NR$0"
              value={filters.priceRange.min}
              onChange={(e) => handlePriceChange("min", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <span className="text-gray-500">to</span>
            <input
              type="number"
              placeholder="NR$100000"
              value={filters.priceRange.max}
              onChange={(e) => handlePriceChange("max", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        )}
      </div>

      {/* Ratings */}
      <div className="mb-4">
        <button onClick={() => toggleSection("ratings")} className="flex items-center justify-between w-full text-sm text-indigo-600 font-medium mb-2">
          <span>Ratings</span>
          {expandedSections.ratings ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {expandedSections.ratings && (
          <div className="space-y-1">
            {ratingOptions.map((option) => (
              <label key={option.value} className="flex items-center text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.ratings.includes(option.value)}
                  onChange={() => handleRatingChange(option.value)}
                  className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < option.value ? "text-yellow-400" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                  <span className="ml-1">{option.label}</span>
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterProducts;
