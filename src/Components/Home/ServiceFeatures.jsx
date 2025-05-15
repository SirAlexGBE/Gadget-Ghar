import {Package, Crown, Shield} from "lucide-react";

export default function ServiceFeatures() {
  const features = [
    {
      icon: <Package className="w-12 h-12 text-amber-400" />,
      title: "Free delivery",
      description: "on order above $50.00",
    },
    {
      icon: <Crown className="w-12 h-12 text-amber-400" />,
      title: "Best quality",
      description: "best quality in low price",
    },
    {
      icon: <Shield className="w-12 h-12 text-amber-400" />,
      title: "1 year warranty",
      description: "Available warranty",
    },
  ];

  return (
    <div className="container mx-auto w-full flex items-center justify-evenly py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex  items-center justify-evenly  space-x-4">
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
