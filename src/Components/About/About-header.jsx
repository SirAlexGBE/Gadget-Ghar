import {Laptop} from "lucide-react";

export default function AboutHeader() {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Laptop className="h-10 w-10 mr-2" />
          <h1 className="text-3xl md:text-4xl font-bold">Gadget Ghar</h1>
        </div>
        <p className="text-xl md:text-2xl font-light mt-2">Every Gadget, Every Budget</p>
        <p className="mt-6 max-w-2xl mx-auto text-gray-100">
          Welcome to Nepal's premier destination for all your technology needs. We're dedicated to providing quality tech products and exceptional service to our community.
        </p>
      </div>
    </div>
  );
}
