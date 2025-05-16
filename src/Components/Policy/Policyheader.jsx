import {FileText} from "lucide-react";

export default function PolicyHeader() {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <FileText className="h-8 w-8 mr-2" />
          <h1 className="text-3xl md:text-4xl font-bold">Store Policies</h1>
        </div>
        <p className="mt-4 max-w-2xl mx-auto text-gray-100">
          Our commitment to transparency and fair business practices. Please review our policies to understand your rights and our responsibilities.
        </p>
      </div>
    </div>
  );
}
