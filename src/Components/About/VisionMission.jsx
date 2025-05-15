import {Lightbulb, Target} from "lucide-react";

export default function VisionMission() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <Lightbulb className="h-6 w-6 text-purple-700" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          To become the most trusted technology partner for every Nepali, making cutting-edge technology accessible to all income levels. We envision a digitally empowered Nepal where quality
          technology is within everyone's reach, regardless of budget constraints.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          By 2030, we aim to expand our presence across major cities in Nepal, bringing the latest technology to every corner of the country while maintaining our commitment to affordability and
          quality service.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 p-3 rounded-full mr-4">
            <Target className="h-6 w-6 text-indigo-700" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          To provide the finest technology products and services in Kathmandu at competitive prices, ensuring every customer finds the perfect gadget for their needs and budget.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">We accomplish this through:</p>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
          <li>Curating quality products from trusted global brands</li>
          <li>Offering transparent pricing with no hidden costs</li>
          <li>Providing expert advice and personalized recommendations</li>
          <li>Delivering exceptional after-sales support and service</li>
        </ul>
      </div>
    </div>
  );
}
