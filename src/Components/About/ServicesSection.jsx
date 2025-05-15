import {ShoppingBag, PackageCheck, Wrench, HeadphonesIcon, Truck, Shield} from "lucide-react";
<PackageCheck />;
export default function ServicesSection() {
  const services = [
    {
      icon: <ShoppingBag className="h-8 w-8 text-purple-600" />,
      title: "Product Sales",
      description: "Wide range of laptops, smartphones, accessories, and other tech gadgets from leading brands at competitive prices.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-purple-600" />,
      title: "Repair Services",
      description: "Professional repair services for smartphones, laptops, and other electronic devices with genuine parts and warranty.",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-purple-600" />,
      title: "Customer Support",
      description: "Dedicated customer support team available 7 days a week to assist with product inquiries, technical issues, and after-sales service.",
    },
    {
      icon: <Truck className="h-8 w-8 text-purple-600" />,
      title: "Home Delivery",
      description: "Free delivery within Kathmandu Valley for purchases above NPR 10,000, with expedited shipping options available.",
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Extended Warranty",
      description: "Optional extended warranty packages to provide additional protection and peace of mind for your valuable tech purchases.",
    },
    {
      icon: <PackageCheck className="h-8 w-8 text-purple-600" />,
      title: "Easy Returns",
      description: "We have a Policy of easy and free returns within 30 days",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
