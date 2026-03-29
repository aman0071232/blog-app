import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../utlis";

function Navbar() {
  const [show, setShow] = useState(false);

  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/users/logout",
        { withCredentials: true }
      );
      localStorage.removeItem("jwt");
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 shadow-sm">

      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        {/* LOGO */}
        <div className="font-bold text-2xl tracking-wide">
          Cilli<span className="text-blue-500">Blog</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {["/", "/blogs", "/creators", "/about", "/contact"].map((path, i) => {
            const names = ["HOME", "BLOGS", "CREATORS", "ABOUT", "CONTACT"];
            return (
              <Link
                key={i}
                to={path}
                className="relative group"
              >
                <span className="group-hover:text-blue-600 transition">
                  {names[i]}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </ul>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-3">

          {isAuthenticated && profile?.user?.role === "admin" && (
            <Link
              to="/dashboard"
              className="px-4 py-2 rounded-full text-sm font-semibold text-white 
              bg-gradient-to-r from-sky-400 to-blue-600 
              hover:scale-105 transition duration-300 shadow-md"
            >
              Dashboard
            </Link>
          )}

          {!isAuthenticated ? (
            <Link
              to="/login"
              className="px-4 py-2 rounded-full text-sm font-semibold text-white 
              bg-gradient-to-r from-red-400 to-red-600 
              hover:scale-105 transition duration-300 shadow-md"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full text-sm font-semibold text-white 
              bg-gradient-to-r from-red-500 to-red-700 
              hover:scale-105 transition duration-300 shadow-md"
            >
              Logout
            </button>
          )}
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden cursor-pointer" onClick={() => setShow(!show)}>
          {show ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
        </div>

      </div>

      {/* MOBILE MENU */}
      {show && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col items-center py-6 gap-6 text-lg font-medium text-gray-700">

            <Link to="/" onClick={() => setShow(false)} className="hover:text-blue-600">
              HOME
            </Link>
            <Link to="/blogs" onClick={() => setShow(false)} className="hover:text-blue-600">
              BLOGS
            </Link>
            <Link to="/creators" onClick={() => setShow(false)} className="hover:text-blue-600">
              CREATORS
            </Link>
            <Link to="/about" onClick={() => setShow(false)} className="hover:text-blue-600">
              ABOUT
            </Link>
            <Link to="/contact" onClick={() => setShow(false)} className="hover:text-blue-600">
              CONTACT
            </Link>

            {/* MOBILE BUTTONS */}
            {isAuthenticated && profile?.user?.role === "admin" && (
              <Link
                to="/dashboard"
                className="px-6 py-2 rounded-full bg-blue-500 text-white"
              >
                Dashboard
              </Link>
            )}

            {!isAuthenticated ? (
              <Link
                to="/login"
                className="px-6 py-2 rounded-full bg-red-500 text-white"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="px-6 py-2 rounded-full bg-red-600 text-white"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;