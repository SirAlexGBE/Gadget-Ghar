import React from "react";
import {products} from "../../Data/Data";
import ProductCard from "../ProductCard";
import {Link} from "react-router-dom";

const NewProducts = () => {
  // Filter new products and take up to 5
  const newProducts = products.filter((p) => p.badge === "NEW").slice(0, 5);

  return (
    <div className="relative w-full px-5  bg-gray-100 pb-3 rounded-2xl">
      <h2 className="text-2xl text-black font-semibold text-center mb-8">New Arrivals</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {newProducts.map((product) => (
          <div key={product.id} className="flex-1 min-w-[220px] max-w-xs">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Link to="/products/new" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow transition-colors duration-200">
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default NewProducts;
