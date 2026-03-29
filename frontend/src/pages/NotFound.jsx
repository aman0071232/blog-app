import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      
      {/* Big 404 */}
      <h1 className="text-[120px] font-extrabold text-blue-600 drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 text-center">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 text-center max-w-md mb-6">
        The page you're looking for doesn't exist or has been moved. 
        Don’t worry, let’s get you back on track.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
      >
        Go Back Home
      </Link>

      {/* Decorative floating circles */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>
    </div>
  );
};

export default NotFound;