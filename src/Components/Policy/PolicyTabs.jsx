import {useState} from "react";
import ReturnPolicy from "./ReturnPolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import PaymentPolicy from "./PaymentPolicy";
import TermsConditions from "./T&S";
import {RefreshCw, Shield, CreditCard, FileText} from "lucide-react";

export default function PolicyTabs() {
  const [activeTab, setActiveTab] = useState("return");

  // Custom tab trigger component
  const TabTrigger = ({value, icon, labelDesktop, labelMobile, activeTab, onClick}) => (
    <button onClick={() => onClick(value)} className={`flex items-center justify-center py-2 px-4 ${activeTab === value ? "bg-purple-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}>
      {icon}
      <span className="hidden md:inline ml-2">{labelDesktop}</span>
      <span className="md:hidden ml-2">{labelMobile}</span>
    </button>
  );

  // Handle tab change
  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  // Render active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "return":
        return <ReturnPolicy />;
      case "privacy":
        return <PrivacyPolicy />;
      case "payment":
        return <PaymentPolicy />;
      case "terms":
        return <TermsConditions />;
      default:
        return <ReturnPolicy />;
    }
  };

  return (
    <div className="w-full mt-8">
      {/* Custom tabs list */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-full rounded-t-lg overflow-hidden">
        <TabTrigger
          value="return"
          icon={<RefreshCw className={`h-4 w-4 ${activeTab === "return" ? "text-white" : "text-purple-600"}`} />}
          labelDesktop="Return Policy"
          labelMobile="Returns"
          activeTab={activeTab}
          onClick={handleTabChange}
        />
        <TabTrigger
          value="privacy"
          icon={<Shield className={`h-4 w-4 ${activeTab === "privacy" ? "text-white" : "text-purple-600"}`} />}
          labelDesktop="Privacy Policy"
          labelMobile="Privacy"
          activeTab={activeTab}
          onClick={handleTabChange}
        />
        <TabTrigger
          value="payment"
          icon={<CreditCard className={`h-4 w-4 ${activeTab === "payment" ? "text-white" : "text-purple-600"}`} />}
          labelDesktop="Payment Policy"
          labelMobile="Payment"
          activeTab={activeTab}
          onClick={handleTabChange}
        />
        <TabTrigger
          value="terms"
          icon={<FileText className={`h-4 w-4 ${activeTab === "terms" ? "text-white" : "text-purple-600"}`} />}
          labelDesktop="Terms & Conditions"
          labelMobile="Terms"
          activeTab={activeTab}
          onClick={handleTabChange}
        />
      </div>

      {/* Tab content */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-6 focus:outline-none">{renderTabContent()}</div>
    </div>
  );
}
