import React, {useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Eye, EyeOff, Mail, User, Lock} from "lucide-react";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSocialLogin = (provider) => {
    toast.info(`${provider} login is not available yet`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "signup") {
      console.log("Sign up data:", formData);
      toast.success("Account created successfully!");
    } else {
      console.log("Login data:", formData);
      toast.success("Logged in successfully!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b">
          <button className={`flex-1 py-4 text-center font-medium ${activeTab === "login" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-400"}`} onClick={() => setActiveTab("login")}>
            Log in
          </button>
          <button className={`flex-1 py-4 text-center font-medium ${activeTab === "signup" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-400"}`} onClick={() => setActiveTab("signup")}>
            Create Account
          </button>
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-8">{activeTab === "signup" ? "Create your account" : "Log in to your account"}</h1>

          <form onSubmit={handleSubmit}>
            {activeTab === "signup" && (
              <div className="mb-4 relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button type="button" className="absolute inset-y-0 right-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
              </button>
            </div>

            {activeTab === "signup" && (
              <div className="mb-6 flex items-start">
                <input type="checkbox" id="terms" name="agreeToTerms" className="mt-1 mr-2" checked={formData.agreeToTerms} onChange={handleInputChange} required />
                <label htmlFor="terms" className="text-gray-700">
                  I agree to all{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>
            )}

            {activeTab === "login" && (
              <div className="mb-6 text-right">
                <a href="#" className="text-blue-500 hover:underline text-sm">
                  Forgot password?
                </a>
              </div>
            )}

            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              {activeTab === "signup" ? "Create Account" : "Log In"}
            </button>
          </form>

          {/* Social Login - visible for both */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500">Or {activeTab === "signup" ? "Sign Up" : "Log In"} with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => handleSocialLogin("Google")} className="flex items-center justify-center py-3 border border-blue-500 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button onClick={() => handleSocialLogin("Facebook")} className="flex items-center justify-center py-3 border border-blue-500 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
              </svg>
              Facebook
            </button>
          </div>

          <div className="mt-6 text-center">
            {activeTab === "signup" ? (
              <p className="text-gray-600">
                Already have an account?{" "}
                <button onClick={() => setActiveTab("login")} className="text-blue-500 hover:underline">
                  sign in
                </button>
              </p>
            ) : (
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button onClick={() => setActiveTab("signup")} className="text-blue-500 hover:underline">
                  sign up
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
