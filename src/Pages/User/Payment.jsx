import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {products} from "../../Data/Data";
import {useLocation, useNavigate} from "react-router-dom";
import {Wallet, CreditCard} from "lucide-react";
import {addOrder} from "../../Redux/Slices/OrderSlice";
import {clearCart} from "../../Redux/Slices/CartSlice";

// Simple spinner loader (you can replace with any animation library)
const Loader = () => (
  <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
    <div className="flex flex-col items-center">
      <svg className="animate-spin h-12 w-12 text-blue-600 mb-4" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
      <span className="text-lg text-blue-700 font-semibold">Placing your order...</span>
    </div>
  </div>
);

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("cash");
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get checkout data from location state (passed from Checkout page)
  const location = useLocation();
  const {subtotal = 0, shippingCost = 0, discount = 0, grandTotal = 0} = location.state || {};

  // Map cart items to product objects
  const cartProducts = cartItems
    .map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
      return product ? {...product, quantity: cartItem.quantity} : null;
    })
    .filter(Boolean);

  const totalItems = cartProducts.reduce((sum, item) => sum + item.quantity, 0);

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      description: "Credit/Debit Card",
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    },
    {
      id: "esewa",
      name: "eSewa Mobile Wallet",
      description: "eSewa Mobile Wallet",
      icon: <img src="https://yt3.googleusercontent.com/ytc/AIdro_lwlrm-5fAqr-4PVHq_Psl4gixU7qBgrwYZIZwP_t65bg=s900-c-k-c0x00ffffff-no-rj" alt="" className="w-8 h-8 rounded-full object-cover" />,
    },
    {
      id: "cash",
      name: "Cash on Delivery",
      description: "Cash on Delivery",
      icon: <Wallet className="w-8 h-8 text-green-600" />,
    },
    {
      id: "ime",
      name: "IME Pay",
      description: "IME Pay Mobile Wallet",
      icon: <img src="https://play-lh.googleusercontent.com/LzKjYKvzLnyMq9XaRm3RauNI-ni7QwuN4r_IzClSXUNpO6o443SDACRd92ePn03UNHU" alt="" className="w-8 h-8 rounded-full object-cover" />,
    },
  ];

  const cashInstructions = [
    "You may pay in cash to our courier upon receiving your parcel at the doorstep",
    "Before agreeing to receive the parcel, check if your delivery status has been updated to 'Out for Delivery'",
    "Before receiving, confirm that the airway bill shows that the parcel is from Gadget Ghar",
    "Before you make payment to the courier, confirm your order number, sender information and tracking number on the parcel",
  ];

  const esewaInstructions = [
    "You will be redirected to your eSewa account to complete your payment:",
    "1. Login to your eSewa account using your eSewa ID and your Password",
    "2. Ensure your eSewa account is active and has sufficient balance",
    "3. Enter OTP (one time password) sent to your registered mobile number",
    "Login with your eSewa mobile and PASSWORD (not MPin)",
  ];

  const ImeInstructions = [
    "You will be redirected to your IME Pay account to complete your payment:",
    "1. Login to your IME Pay account using your IME pay ID and your Password",
    "2. Ensure your IME Pay account is active and has sufficient balance",
    "3. Enter OTP (one time password) sent to your registered mobile number",
    "Login with your IME Pay mobile and PASSWORD (not PIN)",
  ];

  const CardInstructions = [
    "You will be redirected to Card Page to complete your payment:",
    "1. Add the Details of your Credit/Debit card",
    "2. Ensure your account is active and has sufficient balance",
    "3. Enter OTP (one time password) sent to your registered mobile number",
    "Login with your bank account and PASSWORD",
  ];

  // Confirm Order Handler
  const handleConfirmOrder = () => {
    setLoading(true);

    // Prepare order details
    const orderDetails = {
      id: Date.now(),
      items: cartProducts,
      subtotal,
      shippingCost,
      discount,
      grandTotal,
      paymentMethod: selectedMethod,
      date: new Date().toISOString(),
      status: "Placed",
    };

    setTimeout(() => {
      // Add order to Redux and localStorage
      dispatch(addOrder(orderDetails));
      // Clear cart
      dispatch(clearCart());
      setLoading(false);
      // Redirect to order confirmation page with order details
      navigate("/user/order-confirmation", {state: {order: orderDetails}});
    }, 2000);
  };

  return (
    <div className="w-full max-w-full bg-gray-50 min-h-screen">
      {loading && <Loader />}
      <div className="flex flex-col xl:flex-row gap-6 p-4 sm:p-6">
        {/* Main Payment Section */}
        <div className="flex-1 xl:w-2/3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Select Payment Method</h1>

            {/* Payment Methods Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`relative border rounded-lg p-3 sm:p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedMethod === method.id ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200" : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="flex-shrink-0 mb-3">{method.icon}</div>
                    <div className="min-h-0">
                      <p className="text-sm font-medium text-gray-800 leading-tight">{method.name}</p>
                      <p className="text-xs text-gray-500 mt-1 leading-tight">{method.description}</p>
                    </div>
                  </div>

                  {/* Selection indicator */}
                  {selectedMethod === method.id && <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full"></div>}
                </div>
              ))}
            </div>

            {/* Instructions Sections */}
            {selectedMethod === "cash" && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Cash on Delivery Instructions</h3>
                <div className="space-y-3">
                  {cashInstructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700 leading-relaxed">{instruction}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedMethod === "esewa" && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">eSewa Payment Instructions</h3>
                <div className="space-y-3">
                  {esewaInstructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700 leading-relaxed">{instruction}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedMethod === "ime" && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">IME Pay Instructions</h3>
                <div className="space-y-3">
                  {ImeInstructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700 leading-relaxed">{instruction}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedMethod === "card" && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Card Payment Instructions</h3>
                <div className="space-y-3">
                  {CardInstructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700 leading-relaxed">{instruction}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Confirm Button */}
            <div className="flex justify-end">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full md:w-auto"
                onClick={handleConfirmOrder}
                disabled={loading}
              >
                {loading ? "Processing..." : "Confirm Order"}
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="xl:w-1/3 xl:max-w-sm">
          <div className="bg-gray-50 rounded-xl shadow-lg border border-gray-100 p-6 lg:p-8 sticky top-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <span className="text-base text-gray-600 leading-tight">Subtotal ({totalItems} items and shipping fee included)</span>
                <span className="font-semibold text-gray-800 ml-2">NRs {subtotal}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-base text-gray-600">Discount</span>
                <span className="font-semibold text-red-600">- NRs {discount}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-base text-gray-600">Shipment cost</span>
                <span className="font-semibold text-gray-800">NRs {shippingCost}</span>
              </div>

              <div className="border-t border-gray-200 pt-5">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">Total Amount</span>
                  <span className="text-xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 text-white px-3 py-1 rounded-md">NRs {grandTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
