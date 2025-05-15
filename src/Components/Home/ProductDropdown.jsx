import {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import {ChevronDown, Smartphone, Monitor, Tablet, Watch, Headphones, Camera, Gamepad2, Settings} from "lucide-react";

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const categories = [
    {name: "Mobile Phones", icon: Smartphone, path: "/products/mobile-phones", highlight: true},
    {name: "Laptops & Computers", icon: Monitor, path: "/products/laptops-computers"},
    {name: "Tablets & E-reader", icon: Tablet, path: "/products/tablets-e-readers"},
    {name: "Wearables", icon: Watch, path: "/products/wearables"},
    {name: "Audio", icon: Headphones, path: "/products/audio"},
    {name: "Cameras", icon: Camera, path: "/products/cameras"},
    {name: "Gaming", icon: Gamepad2, path: "/products/gaming"},

    {name: "Accessories", icon: Settings, path: "/products/accessories"},
  ];

  return (
    <div className="relative" ref={dropdownRef} onKeyDown={handleKeyDown}>
      <button className="flex items-center text-neutral-800 font-medium gap-1" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-haspopup="true">
        Products
        <ChevronDown className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-10 mt-1 w-64 rounded-md border border-neutral-200 bg-white p-4 shadow-lg" role="menu" aria-orientation="vertical">
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  to={category.path}
                  className={`flex items-center gap-3 hover:text-blue-600 ${category.highlight ? "text-blue-600" : "text-neutral-700"}`}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  <category.icon className="size-6 text-neutral-600" strokeWidth={1.5} />
                  <span className="text-base">{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
