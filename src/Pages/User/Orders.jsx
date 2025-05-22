import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {cancelOrder} from "../../Redux/Slices/OrderSlice";
import {toast} from "react-toastify";

export default function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.order) || JSON.parse(localStorage.getItem("order")) || [];

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [orderToCancel, setOrderToCancel] = useState(null);

  const openModal = (orderId) => {
    setOrderToCancel(orderId);
    setShowModal(true);
  };

  const handleCancelOrder = () => {
    dispatch(cancelOrder(orderToCancel));
    setShowModal(false);
    setOrderToCancel(null);
    toast.success("Order cancelled successfully!");
  };

  if (!orders.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-2">No Orders Yet</h2>
        <p className="mb-6 text-gray-600">You haven't placed any orders yet.</p>
        <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>
      <div className="space-y-8">
        {orders
          .slice()
          .reverse()
          .map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                <div>
                  <span className="font-semibold">Order ID:</span> {order.id}
                </div>
                <div>
                  <span className="font-semibold">Date:</span> {new Date(order.date).toLocaleString()}
                </div>
                <div>
                  <span className="font-semibold">Status:</span> {order.status}
                </div>
                <div>
                  <span className="font-semibold">Payment:</span> <span className="capitalize">{order.paymentMethod}</span>
                </div>
                <div>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded font-medium transition" onClick={() => openModal(order.id)}>
                    Cancel Order
                  </button>
                </div>
              </div>
              <div className="border-t my-3"></div>
              <h3 className="font-semibold mb-2">Items:</h3>
              <ul className="mb-4">
                {order.items.map((item) => (
                  <li key={item.id} className="flex justify-between items-center py-1">
                    <div className="flex items-center gap-3">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-12 h-12 object-cover rounded border" />
                      <span>
                        {item.name} <span className="text-gray-500">×{item.quantity}</span>
                      </span>
                    </div>
                    <span>NRs {item.isOnSale ? Number(item.salePrice.replace(/[^0-9.]/g, "")) * item.quantity : Number(item.price.replace(/[^0-9.]/g, "")) * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <div>
                  <div className="flex justify-between gap-4">
                    <span>Subtotal:</span>
                    <span>NRs {order.subtotal}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Shipping:</span>
                    <span>NRs {order.shippingCost}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Discount:</span>
                    <span className="text-red-500">- NRs {order.discount}</span>
                  </div>
                </div>
                <div className="flex items-center font-bold text-lg mt-2 sm:mt-0">
                  <span>Total:&nbsp;</span>
                  <span>NRs {order.grandTotal}</span>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Modal for cancel confirmation */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-center">Cancel Order</h2>
            <p className="mb-6 text-gray-700 text-center">Are you sure you want to cancel this order?</p>
            <div className="flex justify-center gap-4">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded font-medium" onClick={() => setShowModal(false)}>
                No
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium" onClick={handleCancelOrder}>
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
