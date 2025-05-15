import React from "react";
import {useForm} from "react-hook-form";
import {Phone, Mail, Send} from "lucide-react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    toast.success("Message sent successfully!");
    reset();
  };

  const onError = (errors) => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message);
    });
  };

  return (
    <div className="flex justify-start pl-5 max-h-screen items-center">
      <form onSubmit={handleSubmit(onSubmit, onError)} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <ToastContainer />

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>

        <div className="flex items-center mb-4">
          <Phone className="h-5 w-5 text-purple-600 mr-3" />
          <p className="text-gray-700">+977 01-4567890</p>
        </div>

        <div className="flex items-center mb-6">
          <Mail className="h-5 w-5 text-purple-600 mr-3" />
          <p className="text-gray-700">info@GadgetGhar.com.np</p>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", {required: "Name is required"})}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Subject"
            {...register("subject", {required: "Subject is required"})}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="mb-4">
          <textarea
            rows="5"
            placeholder="Your Message"
            {...register("message", {required: "Message is required"})}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          ></textarea>
        </div>

        <button type="submit" className="w-full flex items-center justify-center h-10 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition duration-200">
          <Send className="h-5 w-5 text-gray-50 " />
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactSection;
