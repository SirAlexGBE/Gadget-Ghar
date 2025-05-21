import React, {useState} from "react";
import {User, Phone, Home, Mail, KeyRound, MapPin, Pencil, Eye, EyeOff} from "lucide-react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PersonalInfo() {
  // Get current user from localStorage
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Find the full user object from users array
  const userData = users.find((u) => u.username === currentUser?.username || u.email === currentUser?.email) || {};

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    postalCode: "",
  });

  // Password visibility state
  const [showPassword, setShowPassword] = useState(false);

  // Show password handler
  const handleShowPassword = () => {
    // If the field is empty and userData has a password, fill it
    if (!formData.password && userData.password) {
      setFormData({...formData, password: userData.password});
    }
    setShowPassword((prev) => !prev);
  };

  // Reset form to empty (placeholders will show userData)
  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      password: "",
      postalCode: "",
    });
  };

  // Update user info in localStorage
  const handleUpdate = (e) => {
    e.preventDefault();
    if (window.confirm("Do you want to update the information?")) {
      // Only update fields that are not empty
      const updatedUser = {
        ...userData,
        fullName: formData.fullName || userData.fullName,
        email: formData.email || userData.email,
        phoneNumber: formData.phoneNumber || userData.phoneNumber,
        address: formData.address || userData.address,
        password: formData.password || userData.password,
        postalCode: formData.postalCode || userData.postalCode,
      };
      // Update users array
      const updatedUsers = users.map((u) => (u.username === userData.username || u.email === userData.email ? updatedUser : u));
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      toast.success("Profile updated!");
      handleReset();
      setTimeout(() => window.location.reload(), 1200); // To reflect changes everywhere
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-8">Personal Information</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleUpdate}>
        {/* Full name */}
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-gray-600">
            Full name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <User size={20} />
            </div>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              placeholder={userData.fullName || ""}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500">
              <Pencil size={20} />
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-600">
            E-mail Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <Mail size={20} />
            </div>
            <input
              type="email"
              id="email"
              value={formData.email}
              placeholder={userData.email || ""}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500">
              <Pencil size={20} />
            </button>
          </div>
        </div>

        {/* Phone number */}
        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block text-gray-600">
            Phone number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <Phone size={20} />
            </div>
            <input
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              placeholder={userData.phoneNumber || ""}
              onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
              className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500">
              <Pencil size={20} />
            </button>
          </div>
        </div>

        {/* Password with eye icon */}
        <div className="space-y-2">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <KeyRound size={20} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              placeholder={userData.password ? "********" : ""}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="button" className="absolute inset-y-0 right-8 flex items-center pr-3 text-blue-500" tabIndex={-1} onClick={handleShowPassword} style={{background: "none", border: "none"}}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500">
              <Pencil size={20} />
            </button>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <label htmlFor="address" className="block text-gray-600">
            Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <Home size={20} />
            </div>
            <input
              type="text"
              id="address"
              value={formData.address}
              placeholder={userData.address || ""}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500">
              <Pencil size={20} />
            </button>
          </div>
        </div>

        {/* Postal code */}
        <div className="space-y-2">
          <label htmlFor="postalCode" className="block text-gray-600">
            Postal code
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <MapPin size={20} />
            </div>
            <input
              type="text"
              id="postalCode"
              value={formData.postalCode}
              placeholder={userData.postalCode || ""}
              onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
              className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500">
              <Pencil size={20} />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 flex gap-4 mt-6">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
            Update
          </button>
          <button type="button" onClick={handleReset} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
