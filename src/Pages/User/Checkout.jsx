import React, {useState} from "react";
import {useSelector} from "react-redux";
import {products} from "../../Data/Data";
import {toast} from "react-toastify"; //
import {useNavigate} from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  // Map cart items to product objects
  const cartProducts = cartItems
    .map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
      return product ? {...product, quantity: cartItem.quantity} : null;
    })
    .filter(Boolean);

  // Get current user from localStorage
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const [shippingMethod, setShippingMethod] = useState("express");
  const [discountCode, setDiscountCode] = useState("");
  const [address, setAddress] = useState(currentUser.address || "");
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber || "");
  const [addressSaved, setAddressSaved] = useState(false);

  const subtotal = cartProducts.reduce((sum, item) => sum + (item.isOnSale ? Number(item.salePrice.replace(/[^0-9.]/g, "")) : Number(item.price.replace(/[^0-9.]/g, ""))) * item.quantity, 0);
  const discount = 0;
  const shippingCost = shippingMethod === "express" ? 22.5 : shippingMethod === "regular" ? 7.5 : 0;
  const grandTotal = subtotal - discount + shippingCost;

  // Handle address and phone form submit
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    // Update address and phoneNumber in users array
    const updatedUsers = users.map((u) => (u.username === currentUser.username ? {...u, address, phoneNumber} : u));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    // Update address and phoneNumber in currentUser
    const updatedCurrentUser = {...currentUser, address, phoneNumber};
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
    setAddressSaved(true);
    setTimeout(() => setAddressSaved(false), 2000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 max-w-6xl mx-auto font-sans">
      {/* Left Column */}
      <div className="w-full md:w-1/2 bg-white rounded-lg p-6 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">User</h2>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-gray-800">{currentUser.fullname || currentUser.username || "Your Name"}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Ship to</h2>
          <form onSubmit={handleAddressSubmit}>
            <div className="bg-gray-50 p-4 rounded-md flex flex-col gap-2">
              <label className="text-xs text-gray-600 mb-1" htmlFor="address-input">
                Address
              </label>
              <input
                id="address-input"
                type="text"
                className="bg-transparent outline-none border-b border-gray-200 py-1 mb-2"
                placeholder={currentUser.address || "Enter your shipping address"}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <label className="text-xs text-gray-600 mb-1" htmlFor="phone-input">
                Phone Number
              </label>
              <input
                id="phone-input"
                type="text"
                className="bg-transparent outline-none border-b border-gray-200 py-1"
                placeholder={currentUser.phoneNumber || "Enter your phone number"}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <button type="submit" className="text-blue-500 font-medium px-3 py-1 rounded hover:underline mt-2 self-end">
                Save
              </button>
            </div>
            {addressSaved && <div className="text-green-600 text-xs mt-1">Address and phone number saved!</div>}
          </form>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shipping Method</h2>
          <div className="space-y-3">
            <label className="flex items-center justify-between bg-gray-50 p-4 rounded-md cursor-pointer">
              <div className="flex items-center">
                <input type="radio" name="shipping" value="free" checked={shippingMethod === "free"} onChange={() => setShippingMethod("free")} className="h-5 w-5 text-blue-600" />
                <div className="ml-3">
                  <span className="block font-medium">Free Shipping</span>
                  <span className="text-gray-500 text-sm">7-30 business days</span>
                </div>
              </div>
              <span className="text-gray-700">Nrs. 0</span>
            </label>
            <label className="flex items-center justify-between bg-gray-50 p-4 rounded-md cursor-pointer">
              <div className="flex items-center">
                <input type="radio" name="shipping" value="regular" checked={shippingMethod === "regular"} onChange={() => setShippingMethod("regular")} className="h-5 w-5 text-blue-600" />
                <div className="ml-3">
                  <span className="block font-medium">Regular Shipping</span>
                  <span className="text-gray-500 text-sm">3-14 business days</span>
                </div>
              </div>
              <span className="text-gray-700">Nrs 7.50</span>
            </label>
            <label className="flex items-center justify-between bg-blue-50 p-4 rounded-md cursor-pointer border border-blue-200">
              <div className="flex items-center">
                <input type="radio" name="shipping" value="express" checked={shippingMethod === "express"} onChange={() => setShippingMethod("express")} className="h-5 w-5 text-blue-600" />
                <div className="ml-3">
                  <span className="block font-medium">Express Shipping</span>
                  <span className="text-gray-500 text-sm">1-3 business days</span>
                </div>
              </div>
              <span className="text-gray-700">NRs 22.50</span>
            </label>
          </div>
        </div>
        <a href="/user/cart" className="text-blue-500 font-medium">
          Return to cart
        </a>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Your Order</h2>
        <div className="space-y-6 mb-6">
          {cartProducts.map((product) => (
            <div key={product.id} className="flex border-b pb-6">
              <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-gray-800 font-medium">{product.name}</h3>
                <p className="text-gray-500">×{product.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{product.isOnSale ? product.salePrice : product.price}</p>
                {product.price !== product.salePrice && product.isOnSale && <p className="text-gray-500 text-sm line-through">{product.price}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="discount code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="bg-white border border-blue-500 text-blue-500 px-6 py-2 rounded-r-md hover:bg-blue-50 transition-colors"
            onClick={() => toast.error("Invalid discount code!")}
            type="button"
          >
            Apply
          </button>
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Discount</span>
            <span className="font-medium text-red-500">-{discount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipment cost</span>
            <span className="font-medium">{shippingCost}</span>
          </div>
          <div className="border-t pt-3 mt-3">
            <div className="flex justify-between">
              <span className="text-lg font-bold">Grand Total</span>
              <span className="text-lg font-bold">{grandTotal}</span>
            </div>
          </div>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-4 rounded-md font-medium hover:bg-blue-600 transition-colors"
          onClick={() =>
            navigate("/user/payment", {
              state: {subtotal, shippingCost, discount, grandTotal},
            })
          }
        >
          Continue to pay
        </button>
      </div>
    </div>
  );
};

export default Checkout;
