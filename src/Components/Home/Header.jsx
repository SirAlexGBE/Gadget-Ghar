import {Link, useNavigate} from "react-router-dom";
import {Search, MapPin, Truck, User, Heart, ShoppingCart} from "lucide-react";
import ProductDropdown from "./ProductDropdown";
import {useState} from "react";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/products?name=${encodeURIComponent(search)}`);
    }
  };

  return (
    <>
      <div className="bg-white text-neutral-700 py-2 px-4 text-sm">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <p>Need help? Call us: (+977) 9842852413</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="flex items-center gap-1.5">
              <MapPin className="size-4" />
              <span className="hidden sm:inline">Our store</span>
            </Link>
            <Link to="/order" className="flex items-center gap-1.5">
              <Truck className="size-4" />
              <span className="hidden sm:inline">Track your order</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky Main Header and Navigation Bar */}
      <div className="sticky top-0 z-1000">
        {/* Main Header */}
        <div className="bg-blue-950 text-white py-4 px-7">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-2">
                <span className="text-2xl font-bold text-white">GG</span>
              </div>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">GADGET GHAR</div>
            </Link>

            {/* Search Bar */}
            <div className="w-full md:flex-1 max-w-xl">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="size-5 text-neutral-500" />
                  </div>

                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-2.5 pl-10 text-sm text-neutral-900 border border-neutral-300 rounded-lg bg-white"
                    placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                  />
                </div>
              </form>
            </div>

            {/* User Icons */}
            <div className="flex items-center gap-4 text-sm">
              <Link to="/user" className="flex items-center gap-1.5">
                <User className="size-5" />
                <span className="hidden md:inline">Sign in</span>
              </Link>
              <Link to="/wishlist" className="relative">
                <Heart className="size-5" />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </Link>
              <Link to="/cart" className="flex items-center gap-1.5 relative">
                <ShoppingCart className="size-5" />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                <span className="hidden md:inline">Cart</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-neutral-100 py-3 px-4">
          <div
            className="max-w-screen-xl mx-auto flex flex-col md:pl-50
           md:flex-row justify-between items-center gap-2"
          >
            <nav className="flex flex-wrap items-center gap-4 text-sm md:text-base">
              <Link to="/" className="text-neutral-800 font-medium">
                Home
              </Link>
              <Link to="/products" className="text-neutral-800 font-medium">
                Products
              </Link>
              <ProductDropdown />
              <Link to="/about" className="text-neutral-800 font-medium">
                About us
              </Link>
            </nav>
            <div className="text-blue-800 font-medium text-sm md:text-base hidden sm:block">30 Days Free Return</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
