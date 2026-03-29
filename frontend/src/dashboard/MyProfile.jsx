import React from "react";
import { useAuth } from "../context/AuthProvider";

function MyProfile() {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl overflow-hidden">

        {/* Cover Image */}
        <div className="relative">
          <img
            src={profile?.user?.photo?.url}
            alt="cover"
            className="w-full h-40 object-cover"
          />

          {/* Profile Image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="p-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
              <img
                src={profile?.user?.photo?.url}
                alt="avatar"
                className="w-24 h-24 rounded-full object-cover border-4 border-white"
              />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="pt-16 pb-8 px-6 text-center">

          <h2 className="text-2xl font-bold text-gray-800">
            {profile?.user?.name}
          </h2>

          <p className="text-gray-500 mt-1 text-sm">
            @{profile?.user?.role}
          </p>

          {/* Divider */}
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-4 rounded-full"></div>

          {/* Details */}
          <div className="space-y-3 text-gray-600 text-sm">

            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-sm">
              📧 {profile?.user?.email}
            </p>

            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-sm">
              📱 {profile?.user?.phone}
            </p>

            <p className="bg-gray-100 py-2 px-3 rounded-lg shadow-sm capitalize">
              🧑‍💼 {profile?.user?.role}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default MyProfile;