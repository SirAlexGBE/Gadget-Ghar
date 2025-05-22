import {useState} from "react";
import {Facebook, Instagram, Twitter, Mail, Phone, MapPin} from "lucide-react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {toast} from "react-toastify"; // <-- Add this import

export default function Footer() {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  // Email validation function
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      toast.success("Subscribed successfully!");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <footer className="bg-blue-950 px-5 text-gray-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Store Info & Logo */}
          <div className="flex flex-col space-y-4">
            {/* Logo Text Element */}
            <div className="flex items-center justify-center sm:justify-start">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-2">
                <span className="text-2xl font-bold text-white">GG</span>
              </div>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">GADGET GHAR</div>
            </div>

            {/* Address & Contact */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-blue-400 flex-shrink-0" />
                <p className="text-sm sm:text-base">Radha Krishna Mandir, Raniban-2, Nagarjun, Kathmandu</p>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-400 flex-shrink-0" />
                <p className="text-sm sm:text-base">+977 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-400 flex-shrink-0" />
                <p className="text-sm sm:text-base break-all">info@gadgetghar.com</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 w-full">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1">
              <Link to="/about" className="hover:text-blue-400 transition-colors">
                About Us
              </Link>
              <Link to="/products" className="hover:text-blue-400 transition-colors">
                Products
              </Link>
              <HashLink to="/about#contact" className="hover:text-blue-400 transition-colors">
                Contact Us
              </HashLink>
              <Link to="/policy" className="hover:text-blue-400 transition-colors">
                Policy
              </Link>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 text-center sm:text-left">Stay Connected</h3>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="mb-2 text-center sm:text-left">Subscribe to our newsletter</p>
              <form onSubmit={handleSubscribe}>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="bg-gray-800 text-gray-100 p-2 rounded sm:rounded-l sm:rounded-r-none flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button type="submit" className="bg-blue-600 px-4 py-2 rounded sm:rounded-l-none sm:rounded-r hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <p className="mb-2 text-center sm:text-left">Follow us on social media</p>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="https://facebook.com" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://twitter.com" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-center md:text-left">&copy; {currentYear} Gadget Ghar. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/policy" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
