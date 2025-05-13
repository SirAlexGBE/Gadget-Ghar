import {Link} from "react-router-dom";
import {Search, MapPin, Truck, User, Heart, ShoppingCart, ChevronDown} from "lucide-react";

function Header() {
  return (
    <header className=" font-roboto sticky top-0">
      <div className="bg-white font-roboto text-neutral-700 py-2 px-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p className="text-sm">Need help? Call us: (+977) 9842852413</p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm font-roboto flex items-center gap-1.5">
              <MapPin className="size-4" />
              Our store
            </Link>
            <Link to="/" className="text-sm flex items-center gap-1.5">
              <Truck className="size-4" />
              Track your order
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 font-roboto text-white py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold flex items-center">
              <span className="">GadgetGhar</span>
            </div>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="size-5 text-neutral-500" />
              </div>
              <input
                type="search"
                className="block w-full p-2.5 pl-10 text-sm text-neutral-900 border border-neutral-300 rounded-lg bg-white"
                placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
              />
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <User className="size-5" />
              <span>Sign in</span>
            </Link>
            <Link to="/wishlist" className="flex items-center gap-1">
              <div className="relative">
                <Heart className="size-5" />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full size-4 flex items-center justify-center">0</span>
              </div>
            </Link>
            <Link to="/" className="flex items-center gap-2">
              <div className="relative">
                <ShoppingCart className="size-5" />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full size-4 flex items-center justify-center">0</span>
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-neutral-100 py-3 px-20 border-b">
        <div className="container pl-5 flex justify-between items-center">
          <nav className="flex pl-5 items-center gap-8">
            <Link to="/" className="text-neutral-800 font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-neutral-800 font-medium gap-1">
                Products
                <ChevronDown className="size-4" />
              </button>
            </div>
            <Link to="/" className="text-neutral-800 font-medium">
              About us
            </Link>
          </nav>
          <div className="text-blue-800 font-medium">30 Days Free Return</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
