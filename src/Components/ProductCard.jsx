// Components/ProductCard.jsx
import {Heart, Star} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {addToWishlist, removeFromWishlist} from "../Redux/Slices/WishlistSlice";
import {toast} from "react-toastify";
import {useAuth} from "../Context/AuthContext"; // Adjust the path based on your file structure

const ProductCard = ({product}) => {
  if (!product) return null;

  const {id, image, name, brand, price, isOnSale, salePrice, badge, rating} = product;

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  // Get user authentication status from AuthContext
  const {currentUser} = useAuth();
  const isLoggedIn = !!currentUser;

  // Now wishlistItems is an array of IDs
  const isProductInWishlist = wishlistItems.includes(id);

  const handleWishlistToggle = (e) => {
    // Prevent the link navigation when clicking the heart
    e.preventDefault();
    e.stopPropagation();

    // Check if user is logged in before proceeding
    if (!isLoggedIn) {
      toast.error("Please login to use the wishlist feature", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (isProductInWishlist) {
      dispatch(removeFromWishlist(id));
      toast.success("Removed from wishlist", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      dispatch(addToWishlist(id)); // Only the id!
      toast.success("Added to wishlist", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="group flex flex-col w-58 h-80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white max-w-xs">
      {/* Product Image Container */}
      <div className="relative overflow-hidden">
        {isOnSale && <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">SALE</span>}
        {badge && !isOnSale && <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">{badge}</span>}

        <img src={image} alt={name} className="w-full h-40 object-contain transform group-hover:scale-105 transition-transform duration-300" />

        <span className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md cursor-pointer" onClick={handleWishlistToggle}>
          <Heart size={18} className={isProductInWishlist ? "text-red-500 fill-current" : "text-gray-500"} />
        </span>
      </div>

      <div className="p-3 flex flex-col flex-grow">
        <span className="text-gray-500 text-xs font-medium">{brand}</span>
        <h3 className="text-gray-800 font-semibold mb-1 text-sm line-clamp-2">{name}</h3>

        {/* Rating Stars */}
        <div className="flex items-center mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill={i < Math.floor(rating) ? "#f59e42" : "none"} className={`size-3 ${i < Math.floor(rating) ? "text-amber-400" : "text-gray-300"}`} />
          ))}
          <span className="ml-1 text-xs text-gray-600">{rating}</span>
        </div>

        <div className="mt-auto">
          <div className="flex items-center">
            {isOnSale ? (
              <>
                <span className="text-red-600 font-bold text-sm mr-1">{salePrice}</span>
                <span className="text-gray-500 text-xs line-through">{price}</span>
              </>
            ) : (
              <span className="text-gray-800 font-bold text-sm">{price}</span>
            )}
          </div>
          <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-3 rounded text-sm font-medium transition-colors duration-200">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
