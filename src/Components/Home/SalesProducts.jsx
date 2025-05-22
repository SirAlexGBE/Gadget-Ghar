import React from "react";
import {products} from "../../Data/Data";
import ProductCard from "../ProductCard";
import {Link} from "react-router-dom";
import {Sparkles} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {addToWishlist, removeFromWishlist} from "../../Redux/Slices/WishlistSlice";

const SaleProducts = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  const saleProducts = products.filter((p) => p.isOnSale).slice(0, 4);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-pink-50 p-6 mt-5 shadow-lg">
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-pink-100 opacity-50 blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-100 opacity-50 blur-xl"></div>
      <div className="mb-8 flex items-center justify-between border-b border-indigo-100 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-pink-500" />
          <h2 className="text-2xl font-bold tracking-tight text-gray-800">Hot Deals</h2>
        </div>
        <div className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600">Limited Time</div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {saleProducts.map((product) => {
          const isProductInWishlist = wishlistItems.includes(product.id);
          return (
            <Link to={`/productdetails?id=${product.id}`} key={product.id} className="group transform transition-all duration-300 hover:scale-105">
              <div className="overflow-hidden flex justify-center rounded-xl bg-white p-3 shadow-md transition-shadow duration-300 hover:shadow-xl">
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
      <div className="mt-8 flex justify-center">
        <Link
          to="/products?name=sales"
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <span className="relative z-10">Explore More Deals</span>
          <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-pink-500 to-indigo-500 transition-transform duration-300 group-hover:translate-y-0"></span>
        </Link>
      </div>
    </div>
  );
};

export default SaleProducts;
