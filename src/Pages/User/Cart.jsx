import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {products} from "../../Data/Data";
import {initializeCart, removeFromCart, updateCartQuantity, clearCart} from "../../Redux/Slices/CartSlice";
import {useAuth} from "../../Context/AuthContext";
import {toast} from "react-toastify";
import {ChevronUp, ChevronDown, Trash, Edit} from "lucide-react";
import {useNavigate} from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const {currentUser, loading: authLoading} = useAuth();
  const navigate = useNavigate();

  const [shippingOpen, setShippingOpen] = useState(false);
  const [discountOpen, setDiscountOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState("");

  useEffect(() => {
    if (!authLoading) {
      dispatch(initializeCart());
    }
  }, [dispatch, currentUser, authLoading]);

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center px-4">Loading user session...</div>;
  }

  // Map cart items to product objects and quantities
  const cartProducts = cartItems
    .map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
      return product ? {...product, quantity: cartItem.quantity} : null;
    })
    .filter(Boolean);

  // Calculate subtotal
  const subtotal = cartProducts.reduce((total, item) => total + (item.isOnSale ? Number(item.salePrice.replace(/[^0-9.]/g, "")) : Number(item.price.replace(/[^0-9.]/g, ""))) * item.quantity, 0);

  // Update quantity
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateCartQuantity({id, quantity: newQuantity}));
    toast.success("Cart updated successfully!");
  };

  // Remove item
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    toast.info("Removed from cart");
  };

  // Handler for clearing cart with toast
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.info("Cart cleared");
  };

  return (
    <div className="w-full py-4 sm:py-8 px-4">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Your Cart</h1>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          {/* Desktop Table View */}
          <div className="hidden md:block border rounded-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="border-b">
                  <th className="text-left p-4">Item</th>
                  <th className="text-right p-4">Price</th>
                  <th className="text-center p-4">Qty</th>
                  <th className="text-right p-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="p-8 text-center text-gray-500">
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  cartProducts.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 relative flex-shrink-0">
                            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-16 h-16 object-contain border p-1 rounded" />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm">{item.name}</h3>
                            <div className="text-xs text-gray-500">{item.brand}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right whitespace-nowrap text-sm">{item.isOnSale ? item.salePrice : item.price}</td>
                      <td className="p-4">
                        <div className="flex justify-center">
                          <div className="flex flex-col border rounded-md">
                            <button className="px-2 py-1 hover:bg-gray-100 transition-colors" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                              <ChevronUp className="h-3 w-3" />
                            </button>
                            <div className="px-3 py-1 text-center border-y text-sm">{item.quantity}</div>
                            <button
                              className="px-2 py-1 hover:bg-gray-100 disabled:opacity-50 transition-colors"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <ChevronDown className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <span className="font-medium text-sm">
                            NRs {(item.isOnSale ? Number(item.salePrice.replace(/[^0-9.]/g, "")) : Number(item.price.replace(/[^0-9.]/g, ""))) * item.quantity}
                          </span>
                          <button className="p-1 hover:bg-red-100 rounded-md transition-colors text-red-600" onClick={() => handleRemoveFromCart(item.id)}>
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {cartProducts.length === 0 ? (
              <div className="border rounded-lg p-8 text-center text-gray-500">Your cart is empty</div>
            ) : (
              cartProducts.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 bg-white shadow-sm">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 flex-shrink-0">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-20 h-20 object-contain border p-1 rounded" />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{item.name}</h3>
                      <div className="text-xs text-gray-500 mb-2">{item.brand}</div>

                      {/* Price and Quantity Row */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-medium">{item.isOnSale ? item.salePrice : item.price}</div>

                        {/* Quantity Controls */}
                        <div className="flex items-center border rounded-md">
                          <button className="px-2 py-1 hover:bg-gray-100 transition-colors" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                            <ChevronDown className="h-3 w-3" />
                          </button>
                          <div className="px-3 py-1 text-sm border-x">{item.quantity}</div>
                          <button className="px-2 py-1 hover:bg-gray-100 transition-colors" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                            <ChevronUp className="h-3 w-3" />
                          </button>
                        </div>
                      </div>

                      {/* Subtotal and Remove */}
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-sm">NRs {(item.isOnSale ? Number(item.salePrice.replace(/[^0-9.]/g, "")) : Number(item.price.replace(/[^0-9.]/g, ""))) * item.quantity}</div>
                        <button className="p-2 hover:bg-red-100 rounded-md transition-colors text-red-600" onClick={() => handleRemoveFromCart(item.id)}>
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Clear Cart Button */}
          {cartProducts.length > 0 && (
            <button className="mt-4 sm:mt-6 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors text-sm" onClick={handleClearCart}>
              Clear Cart
            </button>
          )}
        </div>

        {/* Summary Section */}
        <div className="lg:col-span-1 mt-6 lg:mt-0">
          <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-gray-100 p-3 sm:p-4 text-sm font-semibold border-b">ORDER SUMMARY</div>
            <div className="p-3 sm:p-4">
              {/* Shipping and Tax Section */}
              <div className="w-full">
                <button className="flex w-full justify-between items-center py-2 hover:bg-gray-50 rounded px-2 -mx-2 transition-colors" onClick={() => setShippingOpen(!shippingOpen)}>
                  <span className="text-sm font-medium">Estimate Shipping and Tax</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${shippingOpen ? "rotate-180" : ""}`} />
                </button>
                {shippingOpen && (
                  <div className="py-2 px-2">
                    <p className="text-xs text-gray-500">Shipping options will be updated during checkout.</p>
                  </div>
                )}
              </div>

              <div className="border-t my-3"></div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex justify-between py-1 text-sm">
                  <span>Subtotal</span>
                  <span>NRs {subtotal}</span>
                </div>
                <div className="flex justify-between py-1 text-sm font-semibold border-t pt-2">
                  <span>Order Total</span>
                  <span>NRs {subtotal}</span>
                </div>
              </div>

              <div className="border-t my-3"></div>

              {/* Discount Code Section */}
              <div className="w-full">
                <button className="flex w-full justify-between items-center py-2 hover:bg-gray-50 rounded px-2 -mx-2 transition-colors" onClick={() => setDiscountOpen(!discountOpen)}>
                  <span className="text-sm font-medium">Apply Discount Code</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${discountOpen ? "rotate-180" : ""}`} />
                </button>
                {discountOpen && (
                  <div className="py-2 px-2">
                    <p className="text-xs text-gray-500">Coupons and Discounts options will be updated during checkout.</p>
                  </div>
                )}
              </div>

              {/* Checkout Button */}
              <div className="mt-4">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white text-sm font-medium rounded-md py-3 px-4 transition-colors"
                  onClick={() => navigate("/user/checkout")}
                  disabled={cartProducts.length === 0}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
