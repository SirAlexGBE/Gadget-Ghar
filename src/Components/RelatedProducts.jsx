import React from "react";
import {Link} from "react-router-dom";
import {products} from "../Data/Data";

export default function RelatedProducts({product}) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((p) => p.category === product.category && p.id !== product.id)
          .slice(0, 5)
          .map((relatedProduct) => (
            <Link to={`/productdetails?id=${relatedProduct.id}`} key={relatedProduct.id} className="block">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={relatedProduct.image1} alt={relatedProduct.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{relatedProduct.name}</h3>
                  <p className="text-gray-600">{relatedProduct.price}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
