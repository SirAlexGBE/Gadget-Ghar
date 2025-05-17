import Accessories from "../assets/Cata-accessories.png";
import Phone from "../assets/Cata-phone.png";
import Camera from "../assets/Cata-camera.png";
import Laptop from "../assets/Cata-laptop.png";
import Gaming from "../assets/Cata-gaming.png";
import Watch from "../assets/Cata-watches.png";
import headphone from "../assets/Cata-headphones.png";
import Tablet from "../assets/Cata-Tab.png";
import {Link} from "react-router-dom";

export default function Catagories() {
  const categories = [
    {name: "Accessories", image: Accessories},
    {name: "Cameras", image: Camera},
    {name: "Laptops", image: Laptop},
    {name: "Phones", image: Phone},
    {name: "Gaming", image: Gaming},
    {name: "Wearables", image: Watch},
    {name: "Audio", image: headphone},
    {name: "Tablets", image: Tablet},
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-2xl text-black font-semibold text-center mb-8">Catagories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link to={`/products/${category.name.toLowerCase()}`}>
            <div key={index} className="bg-white rounded-lg shadow-xl p-4 flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
              <div className="w-32 h-32 flex items-center justify-center">
                <img src={category.image || "/placeholder.svg"} alt={category.name} className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="mt-4 text-gray-800 text-center">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
