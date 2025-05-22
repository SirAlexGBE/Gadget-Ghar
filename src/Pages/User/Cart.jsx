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
    return <div className="min-h-screen flex items-center justify-center">Loading user session...</div>;
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
    <div className="w-full py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
      <div className="grid xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <div className="border rounded-md overflow-hidden">
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
                    <td colSpan="4" className="p-4 text-center">
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  cartProducts.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-20 relative flex-shrink-0">
                            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-20 h-20 object-contain border p-1" />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <div className="text-xs text-gray-500">{item.brand}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right whitespace-nowrap"> {item.isOnSale ? item.salePrice : item.price}</td>
                      <td className="p-4">
                        <div className="flex flex-col items-center">
                          <div className="flex flex-col border rounded-md">
                            <button className="px-2 py-1 hover:bg-gray-100" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                              <ChevronUp className="h-4 w-4" />
                            </button>
                            <div className="px-4 py-1 text-center border-y">{item.quantity}</div>
                            <button className="px-2 py-1 hover:bg-gray-100" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                              <ChevronDown className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right whitespace-nowrap">
                        <div className="flex flex-col md:flex-row items-end justify-end gap-2">
                          <span>NRs {(item.isOnSale ? Number(item.salePrice.replace(/[^0-9.]/g, "")) : Number(item.price.replace(/[^0-9.]/g, ""))) * item.quantity}</span>
                          <div className="flex gap-2">
                            <button className="p-1 hover:bg-gray-100 rounded-md" onClick={() => handleRemoveFromCart(item.id)}>
                              <Trash className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {cartProducts.length > 0 && (
            <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded" onClick={handleClearCart}>
              Clear Cart
            </button>
          )}
        </div>
        <div className="xl:col-span-1">
          <div className="border rounded-md overflow-hidden">
            <div className="bg-gray-100 p-2 text-sm font-semibold border-b">SUMMARY</div>
            <div className="p-3">
              {/* Shipping and Tax Section */}
              <div className="w-full">
                <button className="flex w-full justify-between items-center py-1" onClick={() => setShippingOpen(!shippingOpen)}>
                  <span className="text-sm font-medium">Estimate Shipping and Tax</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${shippingOpen ? "rotate-180" : ""}`} />
                </button>
                {shippingOpen && (
                  <div className="py-1">
                    <p className="text-xs text-gray-500">Shipping options will be updated during checkout.</p>
                  </div>
                )}
              </div>
              <div className="border-t my-2"></div>
              <div className="flex justify-between py-1 text-sm">
                <span>Subtotal</span>
                <span>NRs {subtotal}</span>
              </div>
              <div className="flex justify-between py-1 text-sm font-medium">
                <span>Order Total</span>
                <span>NRs {subtotal}</span>
              </div>
              <div className="border-t my-2"></div>
              {/* Discount Code Section */}
              <div className="w-full">
                <button className="flex w-full justify-between items-center py-1" onClick={() => setDiscountOpen(!discountOpen)}>
                  <span className="text-sm font-medium">Apply Discount Code</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${discountOpen ? "rotate-180" : ""}`} />
                </button>
                {discountOpen && (
                  <div className="py-2">
                    <div className="flex flex-col gap-2">
                      <input
                        type="text"
                        placeholder="Enter discount code"
                        className="border rounded-md px-2 py-1 text-sm w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                      />
                      <button className="bg-gray-800 hover:bg-gray-900 text-white text-xs font-medium rounded-md px-2 py-1 w-full" onClick={() => toast.info(`Discount code ${discountCode} applied!`)}>
                        Apply Discount
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <button
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md py-2 px-3"
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
