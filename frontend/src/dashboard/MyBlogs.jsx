import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function MyBlogs() {
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4001/api/blogs/my-blog",
          { withCredentials: true }
        );
        setMyBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4001/api/blogs/delete/${id}`,
        { withCredentials: true }
      );
      toast.success(res.data.message || "Blog deleted successfully");
      setMyBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete blog"
      );
    }
  };

  return (
    <div className="px-4 py-4">
      {/* GRID */}
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myBlogs && myBlogs.length > 0 ? (
          myBlogs.map((element) => (
            <Link to={`/blog/${element._id}`}
              key={element._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              {/* IMAGE */}
              {element?.blogImage && (
                <img
                  src={element.blogImage.url}
                  alt="blog"
                  className="w-full h-48 object-cover"
                />
              )}

              {/* CONTENT */}
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-sm text-gray-500 capitalize">
                  {element.category}
                </span>

                <h4 className="text-lg font-semibold my-2 line-clamp-2">
                  {element.title}
                </h4>

                {/* BUTTONS */}
                <div className="flex justify-between mt-auto pt-3">
                  <Link
                    to={`/blog/update/${element._id}`}
                    className="text-blue-500 border border-gray-300 px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white transition"
                  >
                    UPDATE
                  </Link>

                  <button
                    onClick={() => handleDelete(element._id)}
                    className="text-red-500 border border-gray-300 px-3 py-1 rounded-md hover:bg-red-500 hover:text-white transition"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            You have not posted any blog yet!
          </p>
        )}
      </div>
    </div>
  );
}

export default MyBlogs;