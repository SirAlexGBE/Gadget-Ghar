import React from "react";
import Laptop from "../../assets/Banner.png";
export default function Banner() {
  return (
    <div className="relative  h-[400px] rounded-2xl md:h-[300px] m-5 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={Laptop} alt="Modern laptop on dark background" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col  justify-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Sales up to 50%</h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-xl mb-8">Discover our collection of high-performance laptops for work and play</p>
      </div>
    </div>
  );
}
