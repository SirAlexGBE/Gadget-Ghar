import React, {useState} from "react";
import {ArrowUpDown} from "lucide-react";

const sortOptions = [
  {value: "default", label: "Default"},
  {value: "priceLow", label: "Price: Low to High"},
  {value: "priceHigh", label: "Price: High to Low"},
  {value: "brand", label: "Brand (A-Z)"},
  {value: "rating", label: "Rating (High to Low)"},
];

function parsePrice(price) {
  return Number(price.replace(/[^0-9.]/g, ""));
}

const SortProducts = ({products, onSort}) => {
  const [sortBy, setSortBy] = useState("default");

  const handleSort = (value) => {
    setSortBy(value);

    let sorted = [...products];
    if (value === "priceLow") {
      sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (value === "priceHigh") {
      sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (value === "brand") {
      sorted.sort((a, b) => a.brand.localeCompare(b.brand));
    } else if (value === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    onSort(value === "default" ? products : sorted);
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-6 shadow-md">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <ArrowUpDown className="text-indigo-600" size={20} />
          <h3 className="text-lg font-semibold text-gray-800">Sort Products</h3>
        </div>

        <div className="space-y-1">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSort(option.value)}
              className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${sortBy === option.value ? "bg-indigo-100 text-indigo-700 font-medium" : "text-gray-700 hover:bg-gray-100"}`}
            >
              {option.label}
              {sortBy === option.value && <span className="ml-auto h-2 w-2 rounded-full bg-indigo-600"></span>}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <p className="text-sm text-gray-500">{sortBy !== "default" ? `Currently sorting by: ${sortOptions.find((opt) => opt.value === sortBy)?.label}` : "Using default product order"}</p>
      </div>
    </div>
  );
};

export default SortProducts;
