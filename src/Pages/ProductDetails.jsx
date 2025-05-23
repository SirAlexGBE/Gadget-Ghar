import React, {useState, useEffect} from "react";
import {useSearchParams, useLocation, Link} from "react-router-dom";
import {products} from "../Data/Data";
import {Player} from "@lottiefiles/react-lottie-player";
import productNotFound from "../Animation/Product not found.json";
import {ShoppingCart, Heart, Star, ChevronRight, Truck, RotateCcw} from "lucide-react";
import RelatedProducts from "../Components/RelatedProducts";
import SalesProducts from "../Components/Home/SalesProducts";
import {useDispatch, useSelector} from "react-redux";
import {addToWishlist, removeFromWishlist} from "../Redux/Slices/WishlistSlice";
import {addToCart} from "../Redux/Slices/CartSlice";
import {toast} from "react-toastify";
import {useAuth} from "../Context/AuthContext";
import {ToastContainer} from "react-toastify";
export default function ProductDetails() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const location = useLocation();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);
  const cartItems = useSelector((state) => state.cart.cart);
  const {currentUser} = useAuth();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, [location.search]);

  const product = products.find((product) => String(product.id) === id);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productImages = product
    ? Object.keys(product)
        .filter((key) => key.startsWith("image") && product[key])
        .map((key) => product[key])
    : [];

  if (!product) {
    return (
      <div className="flex flex-col items-center py-16">
        <Player autoplay loop src={productNotFound} style={{height: "300px", width: "300px"}} />
        <h2 className="text-2xl font-semibold mt-4">Product not found</h2>
        <Link to="/" className="mt-6 text-blue-600 hover:text-blue-800 font-medium flex items-center">
          Return to shop
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (newQty) => {
    if (newQty >= 1) setQuantity(newQty);
  };

  // Wishlist logic with login check
  const isProductInWishlist = wishlistItems.includes(product.id);
  const handleWishlistToggle = () => {
    if (!currentUser) {
      toast.error("Please login to use the wishlist feature", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    if (isProductInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast.info("Removed from wishlist", {autoClose: 1500});
    } else {
      dispatch(addToWishlist(product.id));
      toast.success("Added to wishlist", {autoClose: 1500});
    }
  };

  const isProductInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!currentUser) {
      toast.error("Please login to add to cart");
      return;
    }
    if (!isProductInCart) {
      dispatch(addToCart({...product, quantity}));
      toast.success("Successfully added to cart!");
    } else {
      toast.info("Already in cart");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-sm text-gray-500 mb-8 flex items-center">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <ChevronRight className="size-4 mx-2" />
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>
          <ChevronRight className="size-4 mx-2" />
          <span className="text-gray-800 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Product Images */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center h-96">
              <img src={productImages[activeImage]} alt={product.name} className="max-h-full max-w-full object-contain" />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {productImages.map((img, idx) => (
                <button key={idx} onClick={() => setActiveImage(idx)} className={`w-20 h-20 rounded-lg border-2 flex-shrink-0 ${activeImage === idx ? "border-blue-600" : "border-gray-200"}`}>
                  <img src={img} alt={`${product.name} - view ${idx + 1}`} className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Badge row */}
            <div className="flex flex-wrap gap-2 mb-3">
              {product.isOnSale && <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">SALE</span>}
              {product.badge && <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">{product.badge}</span>}
            </div>

            {/* Brand & Title */}
            <p className="text-blue-600 font-medium mb-1">{product.brand}</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`size-5 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">{product.rating} / 5</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              {product.isOnSale ? (
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-gray-900">{product.salePrice}</span>
                  <span className="text-xl text-gray-400 line-through">{product.price}</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 text-sm font-medium rounded">
                    Save {((1 - parseFloat(product.salePrice.replace(/[^0-9.]/g, "")) / parseFloat(product.price.replace(/[^0-9.]/g, ""))) * 100).toFixed(0)}%
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Category */}
            <div className="mb-6">
              <span className="text-gray-600">Category: </span>
              <Link to={`/products/?name=${product.category}`} className="text-blue-600 hover:underline">
                {product.category}
              </Link>
            </div>

            {/* Product specifics */}
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="size-5 text-gray-700" />
                <span className="text-gray-700">Free shipping on orders over NRs 5000</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="size-5 text-gray-700" />
                <span className="text-gray-700">30-day Free returns</span>
              </div>
            </div>

            {/* Quantity selector */}
            <div className="flex items-center gap-6 mb-6">
              <span className="text-gray-700 font-medium">Quantity:</span>
              <div className="flex items-center">
                <button onClick={() => handleQuantityChange(quantity - 1)} className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-lg text-gray-600 hover:bg-gray-100">
                  -
                </button>
                <div className="w-14 h-10 flex items-center justify-center border-t border-b border-gray-300 text-gray-800">{quantity}</div>
                <button onClick={() => handleQuantityChange(quantity + 1)} className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-lg text-gray-600 hover:bg-gray-100">
                  +
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4">
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                onClick={handleAddToCart}
                disabled={isProductInCart}
              >
                <ShoppingCart className="size-5" />
                {isProductInCart ? "In Cart" : "Add to Cart"}
              </button>
              <button
                className={`flex items-center justify-center gap-2 border ${
                  isProductInWishlist ? "border-red-400 bg-red-50" : "border-gray-300"
                } hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200`}
                onClick={handleWishlistToggle}
              >
                <Heart className={`size-5 ${isProductInWishlist ? "text-red-500 fill-red-500" : ""}`} />
                <span className="hidden sm:inline">{isProductInWishlist ? "Wishlisted" : "Wishlist"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts product={product} />
      <SalesProducts />
    </>
  );
}
