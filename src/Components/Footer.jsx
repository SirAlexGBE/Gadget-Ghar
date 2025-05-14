import {Facebook, Home, MessageCircle, PhoneIcon as WhatsApp} from "lucide-react";

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
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <MessageCircle size={24} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Facebook size={24} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <WhatsApp size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Find Product Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Find product</h3>
            <ul className="space-y-3">
              {["DJI Mavic Mini", "EPSON Projectors", "Smart phones", "Automatic watch", "Hair straighteners"].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                  <a href="#" className="text-teal-700 hover:underline hover:text-teal-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Get help</h3>
            <ul className="space-y-3">
              {["About us", "Contact us", "Return policy", "Privacy policy", "Payment policy"].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                  <a href="#" className="text-teal-700 hover:text-teal-900 hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">About us</h3>
            <ul className="space-y-3">
              {["News", "Service", "Our policy", "Custmer care", "FAQ's"].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span>
                  <a href="#" className="text-teal-700 hover:underline hover:text-teal-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
