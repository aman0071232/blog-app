import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Blogs() {
  const { blogs } = useAuth();

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-6 px-4">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          ✨ Explore Blogs
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Discover ideas, stories, and insights from different cultures,
          religions, and perspectives.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid 
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
        gap-4 items-start">

        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link
              to={`/blog/${blog._id}`}
              key={blog._id}
              className="group relative rounded-2xl overflow-hidden shadow-md 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
            >

              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-xs uppercase tracking-wide opacity-80">
                  {blog?.category}
                </p>

                <h2 className="text-sm md:text-base font-semibold leading-tight line-clamp-2">
                  {blog?.title}
                </h2>
              </div>

            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No blogs available yet 🚀
          </p>
        )}

      </div>
    </div>
  );
}

export default Blogs;