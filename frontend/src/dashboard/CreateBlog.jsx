import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [blogImagePreview, setBlogImagePreview] = useState("");

  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBlogImagePreview(reader.result);
      setBlogImage(file);
    };
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("about", about);
    formData.append("blogImage", blogImage);

    try {
      const { data } = await axios.post(
        "http://localhost:4001/api/blogs/create",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(data.message || "Blog created successfully");
      setTitle("");
      setCategory("");
      setAbout("");
      setBlogImage(null);
      setBlogImagePreview("");
    } catch (error) {
      toast.error("Please fill all fields properly");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4">

      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          ✍️ Create New Blog
        </h2>

        <form onSubmit={handleCreateBlog} className="space-y-6">

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Select Category</option>
              <option value="Devotion">Devotion</option>
              <option value="Sports">Sports</option>
              <option value="Coding">Coding</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Business">Business</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Blog Image
            </label>

            <div className="flex justify-center mb-4">
              <div className="w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden border shadow-sm">
                <img
                  src={
                    blogImagePreview
                      ? blogImagePreview
                      : "https://via.placeholder.com/400x300?text=Preview"
                  }
                  alt="preview"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <input
              type="file"
              onChange={changePhotoHandler}
              className="w-full text-sm border border-gray-300 rounded-lg p-2 cursor-pointer"
            />
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              About
            </label>
            <textarea
              rows="5"
              placeholder="Write your blog..."
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-md"
          >
            🚀 Post Blog
          </button>

        </form>
      </div>
    </div>
  );
}

export default CreateBlog;