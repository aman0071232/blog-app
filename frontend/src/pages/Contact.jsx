import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      access_key: "2730bf62-f131-439f-af7f-01244dbaeee6",
      name: data.username,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://api.web3forms.com/submit", userInfo);
      toast.success("Message sent successfully 🚀");
    } catch (error) {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      
      <div className="max-w-6xl w-full bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-10 grid md:grid-cols-2 gap-8">

        {/* LEFT SIDE - FORM */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Get in Touch ✨
          </h2>
          <p className="text-gray-500 mb-6">
            Have a question or want to work together? Send a message 🚀
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  Name is required
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  Email is required
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                rows="4"
                placeholder="Your Message..."
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  Message is required
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Send Message 🚀
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - INFO */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
          
          <h3 className="text-2xl font-semibold mb-6">
            Contact Info 📞
          </h3>

          <div className="space-y-5 text-lg">
            <div className="flex items-center gap-3">
              <FaPhone />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>help@cilliblog.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <span>Delhi, NCR, India</span>
            </div>
          </div>

          {/* Extra */}
          <p className="mt-8 text-sm opacity-80">
            We usually respond within 24 hours ⚡
          </p>
        </div>

      </div>
    </div>
  );
}

export default Contact;