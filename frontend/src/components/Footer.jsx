import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Products</h2>
          <ul className="space-y-2">
            {["Flutter", "React", "Android", "iOS"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Design */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">
            Design to Code
          </h2>
          <ul className="space-y-2">
            {["Figma Plugin", "Templates"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Comparison */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">
            Comparison
          </h2>
          <ul className="space-y-2">
            {[
              "DhiWise vs Anima",
              "DhiWise vs Appsmith",
              "DhiWise vs FlutterFlow",
              "DhiWise vs Retool",
              "DhiWise vs Bubble",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Company</h2>
          <ul className="space-y-2">
            {[
              "About Us",
              "Contact Us",
              "Career",
              "Terms of Service",
              "Privacy Policy",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-6 px-6 container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo */}
        <div className="text-xl font-semibold mb-2 md:mb-0">
          Cilli<span className="text-blue-500 font-bold">Blog</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mb-2 md:mb-0">
          © 2026 CilliBlog. All rights reserved
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition">
            <FaGithub size={20} />
          </a>
          <a href="#" className="hover:text-red-500 transition">
            <BsYoutube size={20} />
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;