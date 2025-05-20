import React from "react";
import {Link} from "react-router-dom";
import {products} from "../Data/Data";
import ProductCard from "./ProductCard"; // Import your ProductCard

export default function RelatedProducts({product}) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((p) => p.category === product.category && p.id !== product.id)
          .slice(0, 4)
          .map((relatedProduct) => (
            <Link to={`/productdetails?id=${relatedProduct.id}`} key={relatedProduct.id} className="block">
              <ProductCard
                image={relatedProduct.image}
                name={relatedProduct.name}
                brand={relatedProduct.brand}
                price={relatedProduct.price}
                isOnSale={relatedProduct.isOnSale}
                salePrice={relatedProduct.salePrice}
                badge={relatedProduct.badge}
                rating={relatedProduct.rating}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
