import React from "react";
import {products} from "../../Data/Data";
import ProductCard from "../ProductCard";
import {Link} from "react-router-dom";
import {Clock} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {addToWishlist, removeFromWishlist} from "../../Redux/Slices/WishlistSlice";

const LimitedProducts = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  const limitedProducts = products.filter((p) => p.badge === "LIMITED").slice(0, 4);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 to-red-50 p-6 shadow-lg">
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-red-100 opacity-50 blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-rose-100 opacity-50 blur-xl"></div>
      <div className="mb-8 flex items-center justify-start border-b border-rose-100 pb-4">
        <div className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-rose-500" />
          <h2 className="text-2xl font-bold tracking-tight text-gray-800">Limited Edition</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {limitedProducts.map((product) => {
          const isProductInWishlist = wishlistItems.includes(product.id);
          return (
            <Link to={`/productdetails?id=${product.id}`} key={product.id} className="group transform transition-all duration-300 hover:scale-105">
              <div className="flex-1 min-w-[220px] max-w-xs overflow-hidden rounded-xl bg-white p-3 shadow-md transition-shadow duration-300 hover:shadow-xl">
                <ProductCard
                  product={product}
                  isInWishlist={isProductInWishlist}
                  onWishlistToggle={() => {
                    if (isProductInWishlist) {
                      dispatch(removeFromWishlist(product.id));
                    } else {
                      dispatch(addToWishlist(product.id));
                    }
                  }}
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center mt-6">
        <Link
          to="/products?name=LIMITED"
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-rose-500 to-red-500 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <span className="relative z-10">Explore More</span>
          <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-red-500 to-rose-500 transition-transform duration-300 group-hover:translate-y-0"></span>
        </Link>
      </div>
    </div>
  );
};

export default LimitedProducts;
