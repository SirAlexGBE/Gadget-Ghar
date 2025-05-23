import {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import {ChevronDown, Smartphone, Speaker, Monitor, Tablet, Watch, Headphones, Camera, Gamepad2, Settings, Boxes} from "lucide-react";

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
    {name: "All Catagories", icon: Boxes, path: "/catagories"},
    {name: "Mobile Phones", icon: Smartphone, path: "/products/?name=smartphone"},
    {name: "Laptops & Computers", icon: Monitor, path: "/products/?name=laptop"},
    {name: "Tablets & E-reader", icon: Tablet, path: "/products/?name=tablet"},
    {name: "Wearables", icon: Watch, path: "/products/?name=smartwatch"},
    {name: "Earbuds", icon: Headphones, path: "/products/?name=earbuds"},
    {name: "Audio", icon: Speaker, path: "/products/?name=audio"},
    {name: "Cameras", icon: Camera, path: "/products/?name=cameras"},
    {name: "Monitors", icon: Monitor, path: "/products/?name=monitor"}, // <-- Added this line
    {name: "Gaming", icon: Gamepad2, path: "/products/?name=gaming"},
    {name: "Accessories", icon: Settings, path: "/products/?name=accessories"},
  ];

  return (
    <div className="relative" ref={dropdownRef} onKeyDown={handleKeyDown}>
      <button className="flex items-center text-neutral-800 font-medium gap-1" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-haspopup="true">
        Catagories
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
