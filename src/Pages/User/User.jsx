import {Outlet, NavLink, useNavigate} from "react-router";
import {User2, Heart, ShoppingCart, Package, LogOut} from "lucide-react";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../Context/AuthContext";

export default function User() {
  const {currentUser, logout} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth", {replace: true});
    }
  }, [currentUser, navigate]);

  function linkClasses({isActive}) {
    return isActive ? "bg-indigo-700 text-white font-medium rounded-lg shadow-md translate-x-2" : "text-gray-100 hover:bg-indigo-600 hover:translate-x-1";
  }

  // Optionally, render nothing or a loader while redirecting
  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-12 min-h-screen">
        {/* Sidebar */}
        <div className="col-span-3 bg-indigo-800 shadow-xl">
          <div className="flex flex-col p-6 h-full">
            <h2 className="text-4xl font-bold text-white mb-8 text-center animate-pulse">User Dashboard</h2>

            <nav className="flex flex-col space-y-4">
              <NavLink to="personalinfo" className={({isActive}) => `${linkClasses({isActive})} py-3 px-4 transition-all duration-300 ease-in-out rounded-lg flex items-center`}>
                <User2 size={20} className="mr-3 transition-all duration-300 ease-in-out" />
                <span className="text-lg">Personal Info</span>
              </NavLink>

              <NavLink to="Wishlist" className={({isActive}) => `${linkClasses({isActive})} py-3 px-4 transition-all duration-300 ease-in-out rounded-lg flex items-center`}>
                <Heart size={20} className="mr-3 transition-all duration-300 ease-in-out" />
                <span className="text-lg">Wishlist</span>
              </NavLink>

              <NavLink to="Cart" className={({isActive}) => `${linkClasses({isActive})} py-3 px-4 transition-all duration-300 ease-in-out rounded-lg flex items-center`}>
                <ShoppingCart size={20} className="mr-3 transition-all duration-300 ease-in-out" />
                <span className="text-lg">Cart</span>
              </NavLink>

              <NavLink to="Order" className={({isActive}) => `${linkClasses({isActive})} py-3 px-4 transition-all duration-300 ease-in-out rounded-lg flex items-center`}>
                <Package size={20} className="mr-3 transition-all duration-300 ease-in-out" />
                <span className="text-lg">Order</span>
              </NavLink>
              <div
                onClick={logout}
                className="flex items-center py-3 px-4 space-x-3 rounded-lg cursor-pointer hover:bg-red-500 text-gray-100 hover:text-white transition-all duration-300 ease-in-out group"
              >
                <LogOut size={20} className="text-gray-100 group-hover:text-white transition-all duration-300" />
                <span className="text-lg group-hover:text-white transition-all duration-300">Log out</span>
              </div>
            </nav>
          </div>
        </div>

        {/* Main content area */}
        <div className="col-span-9 bg-purple-200 p-6 transition-all duration-500">
          <div className="bg-white rounded-lg shadow-lg h-full p-6 animate-fadeIn">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
