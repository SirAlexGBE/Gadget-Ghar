import React from "react";
import {useLocation, Link} from "react-router-dom";
import {CheckCircle2} from "lucide-react";

const Orderconfirmation = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">No Order Found</h2>
        <p className="mb-6 text-gray-600">It looks like you haven't placed an order yet.</p>
        <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="flex flex-col items-center mb-8">
        <CheckCircle2 className="w-20 h-20 text-green-500 mb-4" />
        <h2 className="text-3xl font-bold mb-2 text-center">Order Placed Successfully!</h2>
        <p className="text-gray-600 text-center">Thank you for your purchase. Your order has been placed and is being processed.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Order Details</h3>
        <div className="mb-2 flex justify-between">
          <span className="font-medium">Order ID:</span>
          <span>{order.id}</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span className="font-medium">Order Date:</span>
          <span>{new Date(order.date).toLocaleString()}</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span className="font-medium">Payment Method:</span>
          <span className="capitalize">{order.paymentMethod}</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span className="font-medium">Status:</span>
          <span>{order.status}</span>
        </div>
        <div className="border-t my-4"></div>
        <h4 className="font-semibold mb-2">Items:</h4>
        <ul className="mb-4">
          {order.items.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-1">
              <span>
                {item.name} <span className="text-gray-500">×{item.quantity}</span>
              </span>
              <span>NRs {item.isOnSale ? Number(item.salePrice.replace(/[^0-9.]/g, "")) * item.quantity : Number(item.price.replace(/[^0-9.]/g, "")) * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mb-1">
          <span>Subtotal:</span>
          <span>NRs {order.subtotal}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Shipping:</span>
          <span>NRs {order.shippingCost}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Discount:</span>
          <span className="text-red-500">- NRs {order.discount}</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Total:</span>
          <span>NRs {order.grandTotal}</span>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <Link to="/user/order" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
          View My Orders
        </Link>
        <Link to="/products" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded font-medium">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Orderconfirmation;
