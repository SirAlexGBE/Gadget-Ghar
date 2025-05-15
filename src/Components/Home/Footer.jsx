import {Facebook, Home, MessageCircle, PhoneIcon as WhatsApp} from "lucide-react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="w-full bg-sky-100 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Address Section */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 text-brown-800"></div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">GadgetGhar</h2>
            </div>
            <div className="text-gray-700">
              <p>Raniban-2, Nagarjun,</p>
              <p>Kathmandu, Bagmati, Nepal</p>
            </div>
            <div className="border-t border-gray-300 w-full my-4"></div>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                <MessageCircle size={24} strokeWidth={1.5} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                <Facebook size={24} strokeWidth={1.5} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                <WhatsApp size={24} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Find Product Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Find product</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <Link to="/products/dji-mavic-mini" className="text-teal-700 hover:underline hover:text-teal-900">
                  DJI Mavic Mini
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <Link to="/products/epson-projectors" className="text-teal-700 hover:underline hover:text-teal-900">
                  EPSON Projectors
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <Link to="/products/mobile-phones" className="text-teal-700 hover:underline hover:text-teal-900">
                  Smart phones
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <Link to="/products/wearables" className="text-teal-700 hover:underline hover:text-teal-900">
                  Automatic watch
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <Link to="/products/powerbank" className="text-teal-700 hover:underline hover:text-teal-900">
                  Powerbank
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Get help</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <Link to="/about" className="text-teal-700 hover:text-teal-900 hover:underline">
                  About us
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <HashLink to="/about#contact" className="text-teal-700 hover:text-teal-900 hover:underline">
                  Contact us
                </HashLink>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <Link to="/T&S/#return-policy" className="text-teal-700 hover:text-teal-900 hover:underline">
                  Return policy
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <Link to="/T&S/privacy-policy" className="text-teal-700 hover:text-teal-900 hover:underline">
                  Privacy policy
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <Link to="/T&S/payment-policy" className="text-teal-700 hover:text-teal-900 hover:underline">
                  Payment policy
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">About us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <HashLink to="/about#service" className="text-teal-700 hover:underline hover:text-teal-900">
                  Service
                </HashLink>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <Link to="/our-policy" className="text-teal-700 hover:underline hover:text-teal-900">
                  Our policy
                </Link>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <HashLink to="/about#contact" className="text-teal-700 hover:underline hover:text-teal-900">
                  Customer care
                </HashLink>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                <Link to="/faqs" className="text-teal-700 hover:underline hover:text-teal-900">
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
