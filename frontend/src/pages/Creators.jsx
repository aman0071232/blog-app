import axios from "axios";
import React, { useEffect, useState } from "react";

function Creators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4001/api/users/admins",
          {
            withCredentials: true,
          }
        );
        setCreators(data.admins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreators();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        ⭐ Meet Our Creators
      </h1>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {creators.map((creator) => (
          <div
            key={creator._id}
            className="bg-white border border-gray-200 
            rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 
            transition-all duration-300 overflow-hidden text-center"
          >

            {/* Light Blue Gradient */}
            <div className="h-24 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500"></div>

            {/* Profile Image */}
            <div className="-mt-12 flex justify-center">
              <div className="p-1 rounded-full bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500">
                <img
                  src={creator.photo.url}
                  alt="avatar"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white"
                />
              </div>
            </div>

            {/* Info */}
            <div className="px-4 py-6">

              <h2 className="text-lg font-semibold text-gray-800">
                {creator.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {creator.email}
              </p>

              <p className="text-sm text-gray-500">
                {creator.phone}
              </p>

              <p className="text-sm text-blue-600 font-medium mt-2 capitalize">
                {creator.role}
              </p>

              {/* Divider */}
              <div className="w-10 h-1 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500 mx-auto my-3 rounded-full"></div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Creators;