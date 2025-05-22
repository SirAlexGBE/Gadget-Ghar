import {Outlet, NavLink, useNavigate} from "react-router";
import {User2, Heart, ShoppingCart, Package, LogOut, Menu, X} from "lucide-react";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Context/AuthContext";

export default function User() {
  const {currentUser, loading, logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!loading && !currentUser) {
      navigate("/auth", {replace: true});
    }
  }, [currentUser, loading, navigate]);

  function linkClasses({isActive}) {
    return isActive ? "bg-indigo-700 text-white font-medium rounded-lg shadow-md translate-x-2" : "text-gray-100 hover:bg-indigo-600 hover:translate-x-1";
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  if (loading) return null;
  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-indigo-800 px-4 py-3 flex justify-between items-center shadow-lg">
        <h2 className="text-xl font-bold text-white">Dashboard</h2>
        <button onClick={toggleMobileMenu} className="text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMobileMenu} />}

      <div className="lg:grid lg:grid-cols-12 min-h-screen">
        {/* Sidebar - Desktop & Mobile */}
        <div
          className={`
          fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
          col-span-12 lg:col-span-3 bg-indigo-800 shadow-xl
          transform transition-transform duration-300 ease-in-out
          w-80 lg:w-auto
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <div className="flex flex-col p-6 h-full lg:sticky lg:top-0">
            {/* Mobile close button */}
            <div className="lg:hidden flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">User Dashboard</h2>
              <button onClick={closeMobileMenu} className="text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Desktop title */}
            <h2 className="hidden lg:block text-4xl font-bold text-white mb-8 text-center animate-pulse">User Dashboard</h2>

            <nav className="flex flex-col space-y-4">
              <NavLink
                to="personalinfo"
                className={({isActive}) => `${linkClasses({isActive})} py-3 px-4 transition-all duration-300 ease-in-out rounded-lg flex items-center`}
                onClick={closeMobileMenu}
              >
                <User2 size={20} className="mr-3 transition-all duration-300 ease-in-out" />
                <span className="text-lg">Personal Info</span>
              </NavLink>

              <NavLink to="Wishlist" className={({isActive}) => `${linkClasses({isActive})} py-3 px-4 transition-all duration-300 ease-in-out rounded-lg flex items-center`} onClick={closeMobileMenu}>
                <Heart size={20} className="mr-3 transition-all duration-300 ease-in-out" />
                <span className="text-lg">Wishlist</span>
              </NavLink>

              <NavLink to="Cart" className={({isActive}) => `${linkClasses({isActive})} py-3 px-4 transition-all duration-300 ease-in-out rounded-lg flex items-center`} onClick={closeMobileMenu}>
                <ShoppingCart size={20} className="mr-3 transition-all duration-300 ease-in-out" />
                <span className="text-lg">Cart</span>
              </NavLink>

              <NavLink to="Order" className={({isActive}) => `${linkClasses({isActive})} py-3 px-4 transition-all duration-300 ease-in-out rounded-lg flex items-center`} onClick={closeMobileMenu}>
                <Package size={20} className="mr-3 transition-all duration-300 ease-in-out" />
                <span className="text-lg">Order</span>
              </NavLink>

              <div
                onClick={() => {
                  logout();
                  closeMobileMenu();
                }}
                className="flex items-center py-3 px-4 space-x-3 rounded-lg cursor-pointer hover:bg-red-500 text-gray-100 hover:text-white transition-all duration-300 ease-in-out group"
              >
                <LogOut size={20} className="text-gray-100 group-hover:text-white transition-all duration-300" />
                <span className="text-lg group-hover:text-white transition-all duration-300">Log out</span>
              </div>
            </nav>
          </div>
        </div>

        {/* Main content area */}
        <div className="col-span-12 lg:col-span-9 bg-purple-200 p-3 sm:p-4 lg:p-6 transition-all duration-500 pt-16 lg:pt-6">
          <div className="bg-white rounded-lg shadow-lg h-full p-4 sm:p-6 animate-fadeIn">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
