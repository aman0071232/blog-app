import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Trending() {
  const { blogs } = useAuth();

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Trending</h1>

      <Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={20}
  slidesPerView={3}
  navigation
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  loop={true}
  breakpoints={{
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  }}
>
        {blogs?.length > 0 ? (
          blogs.slice(0, 15).map((element) => (
            <SwiperSlide key={element._id}>
              <div className="p-4 bg-white border border-gray-400 rounded-lg shadow-md">
                <Link to={`/blog/${element._id}`}>
                  <div className="relative">
                    <img
                      src={
                        element.blogImage?.url ||
                        "https://via.placeholder.com/300"
                      }
                      alt="blog"
                      className="w-full h-56 object-cover rounded-t-lg"
                    />

                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {element.category || "General"}
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-b-lg h-36 flex flex-col justify-between">
                    <h1 className="text-lg font-bold mb-2 truncate">
                      {element.title || "No Title"}
                    </h1>

                    <div className="flex items-center">
                      <img
                        src={
                          element.adminPhoto ||
                          "https://via.placeholder.com/50"
                        }
                        alt="author"
                        className="w-10 h-10 rounded-full"
                      />
                      <p className="ml-3 text-gray-400 text-sm">
                        {element.adminName || "Admin"}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="flex h-40 items-center justify-center">
            Loading...
          </div>
        )}
      </Swiper>
    </div>
  );
}

export default Trending;