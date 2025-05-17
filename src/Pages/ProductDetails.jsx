import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { products } from "../Data/Data";
import { Player } from "@lottiefiles/react-lottie-player";
import productNotFound from "../Animation/Product not found.json";
import { ShoppingCart, Heart } from "lucide-react";

export default function ProductDetails() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const product = products.find((product) => String(product.id) === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center py-7">
        <Player autoplay loop src={productNotFound} style={{ height: "300px", width: "300px" }} />
        <h2 className="text-2xl font-semibold mt-4">No product found matching "{query}"</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-96 object-contain rounded-md mb-6" />
      <div className="mb-4 flex flex-wrap gap-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">{product.brand}</span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">{product.category}</span>
        {product.badge && (
          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">{product.badge}</span>
        )}
        {product.isOnSale && (
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">On Sale</span>
        )}
      </div>
      <div className="mb-4">
        <span className="text-lg font-semibold text-gray-800">Price: </span>
        {product.isOnSale ? (
          <>
            <span className="text-red-600 font-bold text-xl mr-2">{product.salePrice}</span>
            <span className="text-gray-500 line-through">{product.price}</span>
          </>
        ) : (
          <span className="text-gray-800 font-bold text-xl">{product.price}</span>
        )}
      </div>
      <div className="mb-4">
        <span className="text-lg font-semibold text-gray-800">Description: </span>
        <span className="text-gray-700">{product.description}</span>
      </div>
      <div className="flex gap-4 mt-8">
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow transition-colors duration-200">
          <ShoppingCart className="size-5" />
          Add to Cart
        </button>
        <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-md shadow transition-colors duration-200">
          <Heart className="size-5" />
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
