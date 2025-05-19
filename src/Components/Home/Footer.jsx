import {useState} from "react";
import {Facebook, Instagram, Twitter, Mail, Phone, MapPin} from "lucide-react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
export default function Footer() {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  // State for mobile menu toggle
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <footer className="bg-blue-950 text-gray-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Store Info & Logo */}
          <div className="flex flex-col space-y-4 md:w-1/3">
            {/* Logo Text Element */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-2">
                <span className="text-2xl font-bold text-white">GG</span>
              </div>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">GADGET GHAR</div>
            </div>

            {/* Address & Contact */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-blue-400" />
                <p>Radha Krishna Mandir, Raniban-2, Nagarjun, Kathmandu</p>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-400" />
                <p>+977 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-400" />
                <p>info@gadgetghar.com</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:w-1/3 ">
            <h3 className="text-lg font-semibold mb-4 border-b text-center border-gray-700 pb-2">Quick Links</h3>
            <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap">
              <div className="flex flex-col space-y-2 mr-8">
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
          </div>

          {/* Newsletter & Social */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Stay Connected</h3>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="bg-gray-800 text-gray-100 p-2 rounded-l flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition-colors">Subscribe</button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="mb-2">Follow us on social media</p>
              <div className="flex space-x-4">
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
          <p>&copy; {currentYear} Gadget Ghar. All rights reserved.</p>
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
