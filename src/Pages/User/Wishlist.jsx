import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import ProductCard from "../../Components/ProductCard";
import {initializeWishlist, clearWishlist} from "../../Redux/Slices/WishlistSlice"; // <-- import clearWishlist
import {useAuth} from "../../Context/AuthContext";
import {products} from "../../Data/Data";
import {ToastContainer} from "react-toastify";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistIds = useSelector((state) => state.wishlist.wishlist);
  const {currentUser, loading: authLoading} = useAuth();

  useEffect(() => {
    if (!authLoading) {
      dispatch(initializeWishlist());
    }
  }, [dispatch, currentUser, authLoading]);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-600 text-xl">Loading user session...</div>
      </div>
    );
  }

  const wishlistItems = products.filter((product) => wishlistIds.includes(product.id));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Your Wishlist</h1>
          <ToastContainer position="top-right" autoClose={3000} />
          {/* Message for guest users */}
          {!currentUser && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-gray-700 text-center">
                You are currently viewing a guest wishlist. <br />
                <span className="font-semibold text-blue-600">Log in</span> to access your personalized, persistent wishlist.
              </p>
            </div>
          )}

          {/* Clear Wishlist Button */}
          {wishlistItems.length > 0 && (
            <div className="flex justify-center mb-4">
              <button onClick={() => dispatch(clearWishlist())} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium transition">
                Clear Wishlist
              </button>
            </div>
          )}
        </div>

        {/* Display wishlist items or empty message */}
        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <p className="text-gray-500 text-xl mb-4">Your wishlist is empty</p>
              <p className="text-gray-400">Start adding some amazing products to see them here!</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-max">
            {wishlistItems.map((product) => (
              <div key={product.id} className="w-full">
                <Link to={`/productdetails?id=${product.id}`} className="block hover:transform hover:scale-105 transition-transform duration-200">
                  <ProductCard product={product} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
