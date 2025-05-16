import {ArrowLeftRight, Clock, AlertCircle, CheckCircle2, XCircle} from "lucide-react";

export default function ReturnPolicy() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <ArrowLeftRight className="h-6 w-6 text-purple-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Return Policy</h2>
      </div>

      <p className="text-gray-600">At Gadget Ghar, we want you to be completely satisfied with your purchase. If you're not entirely happy with your purchase, we're here to help.</p>

      <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
        <div className="flex items-start">
          <Clock className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-800">Return Period</h3>
            <p className="text-gray-600">
              You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Return Process</h3>
      <ol className="list-decimal list-inside space-y-3 text-gray-600 ml-4">
        <li>
          <span className="font-medium">Initiate a Return:</span> Contact our customer service team via email at returns@GadgetGhar.com.np or call +977 01-4567890 to initiate the return process.
        </li>
        <li>
          <span className="font-medium">Return Authorization:</span> You will receive a Return Merchandise Authorization (RMA) number and return instructions.
        </li>
        <li>
          <span className="font-medium">Package Your Return:</span> Pack the item securely in its original packaging along with all accessories, manuals, and warranty cards.
        </li>
        <li>
          <span className="font-medium">Ship Your Return:</span> Ship the item to the address provided in the return instructions. We recommend using a trackable shipping service.
        </li>
        <li>
          <span className="font-medium">Refund Processing:</span> Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved, your refund will
          be processed within 7 business days.
        </li>
      </ol>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-800">Eligible for Return</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
                <li>Unopened products in original packaging</li>
                <li>Defective items (verified by our technical team)</li>
                <li>Items that don't match the description</li>
                <li>Incorrect items shipped to you</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
          <div className="flex items-start">
            <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-800">Not Eligible for Return</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
                <li>Items with missing parts or accessories</li>
                <li>Products with physical damage caused by customer</li>
                <li>Software products with broken seals</li>
                <li>Consumable items that have been used</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Refunds</h3>
      <p className="text-gray-600">
        Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your
        refund.
      </p>
      <p className="text-gray-600 mt-2">If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7 business days.</p>

      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mt-6">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-800">Additional Fees</h3>
            <p className="text-gray-600">
              <span className="font-medium">Restocking Fee:</span> A 15% restocking fee may apply to returns that are not due to our error or defective products.
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Return Shipping:</span> Customers are responsible for return shipping costs after 30 days unless the return is due to our error (you received an incorrect
              or defective item).
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Exchanges</h3>
      <p className="text-gray-600">If you need to exchange an item for the same product, send us an email at returns@GadgetGhar.com.np and send your item to the return address provided.</p>
      <p className="text-gray-600 mt-2">If you need to exchange an item for a different product, please return your item for a refund and place a new order for the desired product.</p>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <p className="text-sm text-gray-500">This return policy was last updated on May 15, 2025. We reserve the right to modify this policy at any time without prior notice.</p>
      </div>
    </div>
  );
}
