import {MapPin, Clock} from "lucide-react";

export default function LocationSection() {
  return (
    <div className="bg-white flex flex-col max-h-screen p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Locate Us</h2>

      <div className="flex  mb-4">
        <MapPin className="h-5 w-5 text-purple-600 mr-3 mt-1" />
        <p className="text-gray-700">
          Raniban Road, Kathmandu 44600, Nepal
          <br />
          (Near Radha Krishna Mandir, Valhalla Cafe 2nd Floor)
        </p>
      </div>

      <div className="flex items-start mb-6">
        <Clock className="h-5 w-5 text-purple-600 mr-3 mt-1" />
        <div>
          <p className="text-gray-700">Opening Hours:</p>
          <p className="text-gray-700">Sunday - Friday: 10:00 AM - 7:00 PM</p>
          <p className="text-gray-700">Saturday: 11:00 AM - 5:00 PM</p>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden shadow-md h-[300px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1513.675310913629!2d85.28337715820888!3d27.732941706545372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18b901daf03f%3A0x7b5ed355ede69eac!2sRaniban%20Rd%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1747291863711!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{border: 0}}
          allowFullScreen={false}
          loading="lazy"
          title="Gadget Ghar Store Location "
          aria-label="Map showing  Gadget Ghar Store location in Raniban Road, Kathmandu"
        ></iframe>
      </div>
    </div>
  );
}
