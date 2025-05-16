import {Shield, Database, Lock, Eye, UserCheck, AlertTriangle} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div id="Privacy" className="space-y-6">
      <div className="flex items-center">
        <Shield className="h-6 w-6 text-purple-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
      </div>

      <p className="text-gray-600">
        Gadget Ghar is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase
        from our store.
      </p>

      <div className="space-y-6 mt-6">
        <div>
          <div className="flex items-center mb-2">
            <Database className="h-5 w-5 text-purple-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Information We Collect</h3>
          </div>
          <div className="ml-7">
            <p className="text-gray-600 mb-3">We may collect the following types of information:</p>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-800">Personal Information</h4>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>Name, email address, phone number, and billing/shipping address</li>
                  <li>Payment information (credit card details, bank information)</li>
                  <li>Purchase history and transaction information</li>
                  <li>Communications with our customer service team</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Automatically Collected Information</h4>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website or source</li>
                  <li>Operating system and device type</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <Eye className="h-5 w-5 text-purple-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">How We Use Your Information</h3>
          </div>
          <div className="ml-7">
            <p className="text-gray-600 mb-3">We use the information we collect for various purposes, including:</p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Processing and fulfilling your orders</li>
              <li>Communicating with you about your orders, products, and services</li>
              <li>Providing customer support and responding to inquiries</li>
              <li>Improving our website, products, and services</li>
              <li>Sending promotional emails and marketing communications (with your consent)</li>
              <li>Detecting and preventing fraud and unauthorized access</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <Lock className="h-5 w-5 text-purple-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Data Security</h3>
          </div>
          <div className="ml-7">
            <p className="text-gray-600 mb-3">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>Encryption of sensitive data using SSL technology</li>
              <li>Regular security assessments and vulnerability testing</li>
              <li>Access controls and authentication procedures for our systems</li>
              <li>Employee training on data protection and security practices</li>
              <li>Secure data storage with regular backups</li>
            </ul>
            <p className="text-gray-600 mt-3">
              While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <UserCheck className="h-5 w-5 text-purple-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Your Rights</h3>
          </div>
          <div className="ml-7">
            <p className="text-gray-600 mb-3">You have certain rights regarding your personal information, including:</p>
            <ul className="list-disc list-inside text-gray-600 ml-4">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to opt-out of marketing communications</li>
              <li>The right to lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-gray-600 mt-3">To exercise these rights, please contact us at privacy@GadgetGhar.com.np or call +977 01-4567890.</p>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <AlertTriangle className="h-5 w-5 text-purple-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Data Retention</h3>
          </div>
          <div className="ml-7">
            <p className="text-gray-600">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              When determining the retention period, we consider:
            </p>
            <ul className="list-disc list-inside text-gray-600 ml-4 mt-3">
              <li>The amount, nature, and sensitivity of the personal information</li>
              <li>The potential risk of harm from unauthorized use or disclosure</li>
              <li>The purposes for which we process the information</li>
              <li>Legal requirements and obligations</li>
            </ul>
            <p className="text-gray-600 mt-3">
              For transaction data, we typically retain information for 7 years to comply with tax and accounting requirements. For marketing preferences, we retain this information until you opt-out
              or request deletion.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mt-6">
        <h3 className="font-semibold text-gray-800 mb-2">Cookies and Tracking Technologies</h3>
        <p className="text-gray-600">
          We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous
          unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <p className="text-sm text-gray-500">
          This privacy policy was last updated on May 15, 2025. We may update this policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>
      </div>
    </div>
  );
}
