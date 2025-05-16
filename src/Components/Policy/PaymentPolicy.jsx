import {CreditCard, DollarSign, ShieldCheck, AlertCircle} from "lucide-react";

export default function PaymentPolicy() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <CreditCard className="h-6 w-6 text-purple-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Payment Policy</h2>
      </div>

      <p className="text-gray-600">
        Gadget Ghar offers various payment options to ensure a convenient and secure shopping experience. This policy outlines our accepted payment methods, processing procedures, and related
        information.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Accepted Payment Methods</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h4 className="font-medium text-gray-800 mb-2">In-Store Payments</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Cash (Nepali Rupees)</li>
            <li>Credit Cards (Visa, Mastercard, American Express)</li>
            <li>Debit Cards</li>
            <li>Mobile Payment Apps (eSewa, Khalti, IME Pay)</li>
            <li>Bank Transfers</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h4 className="font-medium text-gray-800 mb-2">Online Payments</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Credit Cards (Visa, Mastercard, American Express)</li>
            <li>Debit Cards</li>
            <li>Digital Wallets (eSewa, Khalti, IME Pay)</li>
            <li>Bank Transfers</li>
            <li>Cash on Delivery (within Kathmandu Valley)</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mt-6">
        <div className="flex items-start">
          <ShieldCheck className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-800">Payment Security</h3>
            <p className="text-gray-600 mt-1">
              All online payment transactions are encrypted using SSL (Secure Socket Layer) technology. We do not store your complete credit card information on our servers. When you make a payment,
              your card details are securely transmitted to our payment processor, which adheres to the Payment Card Industry Data Security Standard (PCI DSS).
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Payment Processing</h3>
      <p className="text-gray-600">
        When you place an order online, payment is processed immediately. For in-store purchases, payment is processed at the time of purchase. Here's what you need to know about our payment
        processing:
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mt-3 ml-4">
        <li>
          <span className="font-medium">Online Orders:</span> Your payment will be authorized at the time of order placement. If the authorization is successful, the payment will be captured when your
          order is shipped.
        </li>
        <li>
          <span className="font-medium">Pre-Orders:</span> For pre-order items, your payment method will be authorized at the time of order placement, but the payment will only be captured when the
          item is ready to ship.
        </li>
        <li>
          <span className="font-medium">Installment Plans:</span> For eligible purchases over NPR 50,000, we offer installment payment plans through partner banks. Additional terms and conditions
          apply.
        </li>
      </ul>

      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mt-6">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-800">Additional Fees</h3>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Currency Conversion:</span> If you're using an international payment method, your bank may charge a currency conversion fee. This fee is determined by your
              bank and is not controlled by Gadget Ghar.
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Payment Processing Fees:</span> Some payment methods may incur a processing fee:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-1 ml-4">
              <li>Credit Card: No additional fee</li>
              <li>Digital Wallets: No additional fee</li>
              <li>Bank Transfer: No additional fee</li>
              <li>Cash on Delivery: NPR 100 service charge</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Invoicing</h3>
      <p className="text-gray-600">
        A digital invoice will be sent to your email address after your purchase is complete. For in-store purchases, a printed receipt will be provided. If you require a VAT invoice, please inform
        our staff at the time of purchase or contact our customer service team.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Payment Verification</h3>
      <p className="text-gray-600">
        For security purposes, we may occasionally need to verify your payment information. This might include requesting additional identification or contacting your bank. This is done to protect
        both you and our business from fraudulent transactions.
      </p>

      <div className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
        <DollarSign className="h-5 w-5 text-purple-600 mr-2" />
        <p className="text-gray-700 font-medium">All prices are listed in Nepali Rupees (NPR) and include applicable taxes unless otherwise stated.</p>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <p className="text-sm text-gray-500">This payment policy was last updated on May 15, 2025. We reserve the right to modify this policy at any time without prior notice.</p>
      </div>
    </div>
  );
}
