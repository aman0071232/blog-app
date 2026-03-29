import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../utlis";
function Detail() {
  const { id } = useParams();
  const [blogs, setblogs] = useState({});

  useEffect(() => {
    const fetchblogs = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/blogs/single-blog/${id}`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setblogs(data);
      } catch (error) {
        toast.error("Failed to load blog");
      }
    };
    fetchblogs();
  }, [id]);

  return (
    <div className="bg-gray-50 py-6"> {/* ✅ removed min-h-screen */}
      
      <section className="max-w-6xl mx-auto px-4">

        {/* Category */}
        <p className="text-blue-500 uppercase text-xs font-semibold tracking-wide mb-2">
          {blogs?.category}
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
          {blogs?.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={blogs?.adminPhoto}
            alt="author"
            className="w-12 h-12 rounded-full object-cover border"
          />
          <p className="text-gray-700 font-medium">{blogs?.adminName}</p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-6 items-start">

          {/* Image */}
          {blogs?.blogImage && (
            <div className="md:w-[45%] w-full">
              <div className="aspect-[4/3] max-h-[320px] rounded-xl overflow-hidden shadow-md border">
                <img
                  src={blogs?.blogImage?.url}
                  alt="blog"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          )}

          {/* Text */}
          <div className="md:w-[55%] w-full text-gray-700 leading-relaxed text-lg">
            <p>{blogs?.about}</p>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Detail;