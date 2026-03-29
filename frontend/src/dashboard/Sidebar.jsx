import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import {
  FaHome,
  FaUser,
  FaBlog,
  FaPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../utlis";
function Sidebar({ setComponent }) {
  const { profile, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();
  const [show, setShow] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${BACKEND_URL}/api/users/logout`,
        { withCredentials: true }
      );
      toast.success(data.message);
      localStorage.removeItem("jwt");
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  const menuItems = [
    {
      name: "My Blogs",
      icon: <FaBlog />,
      action: () => setComponent("My Blogs"),
    },
    {
      name: "Create Blog",
      icon: <FaPlus />,
      action: () => setComponent("Create Blog"),
    },
    {
      name: "My Profile",
      icon: <FaUser />,
      action: () => setComponent("My Profile"),
    },
    {
      name: "Home",
      icon: <FaHome />,
      action: () => navigateTo("/"),
    },
    {
      name: "Logout",
      icon: <FaSignOutAlt />,
      action: handleLogout,
    },
  ];

  return (
    <>
      {/* 🌐 White Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

      {/* 📱 Mobile Menu Button */}
      <div
        className="sm:hidden fixed top-4 left-4 z-50 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <CiMenuBurger className="text-3xl text-gray-800" />
      </div>

      {/* 📌 Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl border-r p-6 transition-transform duration-300 z-40
        ${show ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        {/* ❌ Close Button */}
        <div
          className="sm:hidden absolute top-4 right-4 cursor-pointer"
          onClick={() => setShow(false)}
        >
          <BiSolidLeftArrowAlt className="text-2xl text-gray-800" />
        </div>

        {/* 👤 Profile Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="p-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
            <img
              src={profile?.user?.photo?.url}
              alt=""
              className="w-24 h-24 rounded-full object-cover border-4 border-white"
            />
          </div>
          <h2 className="mt-3 text-xl font-bold text-gray-800">
            {profile?.user?.name}
          </h2>
        </div>

        {/* 📋 Menu Items */}
        <div className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="flex items-center gap-4 px-5 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium 
              hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 
              hover:text-white hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;