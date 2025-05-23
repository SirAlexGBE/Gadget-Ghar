import {Link} from "react-router-dom";
import {User, ShoppingBag, Heart, ShoppingCart, LogOut} from "lucide-react";
import {useContext} from "react";
import {AuthContext} from "../Context/AuthContext";

const UserProfileMenu = () => {
  const {currentUser, logout} = useContext(AuthContext);
  return (
    <div className="w-full  min-w-64 p-4 overflow-scroll bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="space-y-6">
        {/* User Profile Section */}
        <Link to="/user/personalinfo">
          <div className="flex items-start space-x-3 cursor-pointer hover:bg-blue-50 rounded-lg p-2 transition">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center bg-blue-100">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-blue-600">{currentUser?.username}</h3>
              <p className="text-gray-500 text-sm">{currentUser?.email}</p>
            </div>
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="space-y-4">
          <Link to="/user/order">
            <div className="flex items-center py-3 px-2 space-x-3 rounded-lg cursor-pointer hover:bg-blue-50 transition group">
              <ShoppingBag className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition" />
              <span className="text-gray-700 text-lg group-hover:text-blue-600 transition">Orders</span>
            </div>
          </Link>
          <Link to="/user/wishlist">
            <div className="flex items-center py-3 px-2 space-x-3 rounded-lg cursor-pointer hover:bg-blue-50 transition group">
              <Heart className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition" />
              <span className="text-gray-700 text-lg group-hover:text-blue-600 transition">Wish List</span>
            </div>
          </Link>
          <Link to="/user/cart">
            <div className="flex items-center py-3 px-2 space-x-3 rounded-lg cursor-pointer hover:bg-blue-50 transition group">
              <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition" />
              <span className="text-gray-700 text-lg group-hover:text-blue-600 transition">Cart</span>
            </div>
          </Link>
          <div onClick={logout} className="flex items-center py-3 px-2 space-x-3 rounded-lg cursor-pointer hover:bg-red-50 transition mt-4 group">
            <LogOut className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition" />
            <span className="text-gray-700 text-lg group-hover:text-red-600 transition">Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileMenu;
