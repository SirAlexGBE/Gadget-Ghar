import React from "react";
import {Link} from "react-router-dom";
import image from "../assets/herolaptops.png";
export default function Hero() {
  return (
    <div className="container border-2 mx-auto px-4  md: pt-7 flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 mb-10 px-10 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold text-[#0a1952] mb-4">Gadget Ghar</h1>
        <p className="text-2xl md:text-3xl text-[#0a1952] mb-8">Every Gadget, Every Budget</p>
        <Link to="/products">
          <button className="bg-[#050e3d] hover:bg-[#0a1952] text-white font-medium py-3 px-8 rounded-md transition duration-300">Explore More</button>
        </Link>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-center">
        <img src={image} alt="Laptops display" className="w-full max-w-lg object-contain" />
      </div>
    </div>
  );
}
