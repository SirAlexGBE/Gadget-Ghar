import {FileText, AlertTriangle, Scale, Gavel} from "lucide-react";

export default function TermsConditions() {
  return (
    <div id="T&S" className="space-y-6">
      <div className="flex items-center">
        <FileText className="h-6 w-6 text-purple-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Terms and Conditions</h2>
      </div>

      <p className="text-gray-600">
        These Terms and Conditions ("Terms") govern your use of the Gadget Ghar website and services, including the purchase of products from our physical store located in Kathmandu, Nepal. By
        accessing our website or making a purchase, you agree to be bound by these Terms.
      </p>

      <div className="space-y-8 mt-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Definitions</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>
              <span className="font-medium">"We," "us," "our," and "Gadget Ghar"</span> refer to Gadget Ghar, located at New Road, Kathmandu, Nepal.
            </li>
            <li>
              <span className="font-medium">"You" and "your"</span> refer to the user or purchaser of our products and services.
            </li>
            <li>
              <span className="font-medium">"Website"</span> refers to the website operated by Gadget Ghar at www.GadgetGhar.com.np.
            </li>
            <li>
              <span className="font-medium">"Products"</span> refers to the items offered for sale by Gadget Ghar.
            </li>
            <li>
              <span className="font-medium">"Services"</span> refers to any services provided by Gadget Ghar, including but not limited to repair services and customer support.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Account Registration</h3>
          <p className="text-gray-600 ml-4">
            To make purchases through our website, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that
            occur under your account. You agree to provide accurate and complete information when creating an account and to update your information as necessary.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Product Information</h3>
          <p className="text-gray-600 ml-4">
            We strive to provide accurate product descriptions, pricing, and availability information. However, we do not warrant that product descriptions, pricing, or other content on our website is
            accurate, complete, reliable, current, or error-free. In the event of a pricing error, we reserve the right to cancel any orders placed for products listed at an incorrect price.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Ordering and Acceptance</h3>
          <p className="text-gray-600 ml-4">
            When you place an order, you are making an offer to purchase the products. We reserve the right to accept or decline your order for any reason, including but not limited to product
            availability, errors in product or pricing information, or problems identified by our security or fraud departments.
          </p>
          <p className="text-gray-600 ml-4 mt-2">
            After placing an order, you will receive an order confirmation email. This email confirms that we have received your order but does not constitute acceptance of your order. We will send a
            separate email confirming shipment of the products, which constitutes our acceptance of your order.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Intellectual Property</h3>
          <p className="text-gray-600 ml-4">
            All content on our website, including text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Gadget Ghar or its content suppliers and is protected
            by Nepali and international copyright laws. You may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer,
            disassemble, decompile, or otherwise exploit this content without our explicit written consent.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6. User Conduct</h3>
          <p className="text-gray-600 ml-4">
            You agree not to use our website or services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our services. You also agree not to attempt to gain
            unauthorized access to any part of our website, other accounts, computer systems, or networks connected to our servers.
          </p>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <AlertTriangle className="h-5 w-5 text-purple-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">7. Limitation of Liability</h3>
          </div>
          <p className="text-gray-600 ml-9">
            To the fullest extent permitted by applicable law, Gadget Ghar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or
            revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-9 mt-2">
            <li>Your use of or inability to use our website or services</li>
            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
            <li>Any interruption or cessation of transmission to or from our website</li>
            <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our website</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <Scale className="h-5 w-5 text-purple-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">8. Dispute Resolution</h3>
          </div>
          <p className="text-gray-600 ml-9">
            Any dispute arising from or relating to these Terms, our website, or our services shall first be resolved through good-faith negotiations. If such negotiations fail, the dispute shall be
            submitted to binding arbitration in Kathmandu, Nepal, in accordance with the Arbitration Act of Nepal.
          </p>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <Gavel className="h-5 w-5 text-purple-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">9. Governing Law</h3>
          </div>
          <p className="text-gray-600 ml-9">
            These Terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions. Your use of our website and services may also be
            subject to other local, state, national, or international laws.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10. Changes to Terms</h3>
          <p className="text-gray-600 ml-4">
            We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on our website and updating the "last updated" date.
            Your continued use of our website or services after such changes constitutes your acceptance of the new Terms.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">11. Severability</h3>
          <p className="text-gray-600 ml-4">
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the Terms shall otherwise
            remain in full force and effect and enforceable.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12. Contact Information</h3>
          <p className="text-gray-600 ml-4">If you have any questions about these Terms, please contact us at:</p>
          <div className="ml-4 mt-2">
            <p className="text-gray-600">Gadget Ghar</p>
            <p className="text-gray-600">Raniban-2, Nagarjun Kathmandu 44600, Nepal</p>
            <p className="text-gray-600">Email: legal@GadgetGhar.com.np</p>
            <p className="text-gray-600">Phone: +977 01-4567890</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <p className="text-sm text-gray-500">These Terms and Conditions were last updated on May 15, 2025. We reserve the right to modify these terms at any time without prior notice.</p>
      </div>
    </div>
  );
}
