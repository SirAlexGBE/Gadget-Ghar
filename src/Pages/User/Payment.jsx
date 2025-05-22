import React, {useState} from "react";
import {useSelector} from "react-redux";
import {products} from "../../Data/Data";
import {useLocation} from "react-router-dom";
import {Wallet, CreditCard} from "lucide-react";
const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("cash");
  const cartItems = useSelector((state) => state.cart.cart);

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
      icon: <CreditCard />,
    },
    {
      id: "esewa",
      name: "eSewa Mobile Wallet",
      description: "eSewa Mobile Wallet",
      icon: <img src="https://yt3.googleusercontent.com/ytc/AIdro_lwlrm-5fAqr-4PVHq_Psl4gixU7qBgrwYZIZwP_t65bg=s900-c-k-c0x00ffffff-no-rj" alt="" srcset="" />,
    },
    {
      id: "cash",
      name: "Cash on Delivery",
      description: "Cash on Delivery",
      icon: <Wallet />,
    },
    {
      id: "ime",
      name: "IME Pay",
      description: "IME Pay Mobile Wallet",
      icon: <img src="https://play-lh.googleusercontent.com/LzKjYKvzLnyMq9XaRm3RauNI-ni7QwuN4r_IzClSXUNpO6o443SDACRd92ePn03UNHU" alt="" srcset="" />,
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
    "Login with your bank account and PASSWORD ",
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen">
      <div className="lg:w-2/3 p-6">
        <h1 className="text-2xl font-medium text-gray-700 mb-6">Select Payment Method</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`relative border rounded-md p-4 cursor-pointer transition-all ${
                selectedMethod === method.id ? "border-blue-500 bg-white shadow-md" : "border-gray-200 bg-white hover:border-gray-300"
              }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <div className="flex flex-col items-center">
                <div className="mb-3">{method.icon}</div>
                <div className="text-center">
                  <p className="font-medium text-gray-800">{method.name}</p>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedMethod === "cash" && (
          <div className="bg-white p-6 rounded-md border border-gray-200 mb-6">
            {cashInstructions.map((instruction, index) => (
              <p key={index} className="mb-3 text-gray-700">
                - {instruction}
              </p>
            ))}
          </div>
        )}
        {selectedMethod === "esewa" && (
          <div className="bg-white p-6 rounded-md border border-gray-200 mb-6">
            {esewaInstructions.map((instruction, index) => (
              <p key={index} className="mb-3 text-gray-700">
                - {instruction}
              </p>
            ))}
          </div>
        )}
        {selectedMethod === "ime" && (
          <div className="bg-white p-6 rounded-md border border-gray-200 mb-6">
            {ImeInstructions.map((instruction, index) => (
              <p key={index} className="mb-3 text-gray-700">
                - {instruction}
              </p>
            ))}
          </div>
        )}

        {selectedMethod === "card" && (
          <div className="bg-white p-6 rounded-md border border-gray-200 mb-6">
            {CardInstructions.map((instruction, index) => (
              <p key={index} className="mb-3 text-gray-700">
                - {instruction}
              </p>
            ))}
          </div>
        )}
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-6 rounded-md w-full md:w-auto transition-colors">Confirm Order</button>
      </div>
      <div className="lg:w-1/3 bg-white p-6 border-l border-gray-200">
        <h2 className="text-xl font-medium text-gray-800 mb-6">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal ({totalItems} items and shipping fee included)</span>
            <span className="font-medium">NRs {subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Discount</span>
            <span className="font-medium text-red-500">- NRs {discount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipment cost</span>
            <span className="font-medium">NRs {shippingCost}</span>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-800">Total Amount</span>
              <span className="text-2xl font-medium text-orange-500">NRs {grandTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
