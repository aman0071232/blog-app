import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10 space-y-8">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
          <p className="text-gray-500 mt-2">
            Get to know more about me and my journey
          </p>
        </div>

        {/* Intro */}
        <div className="text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            This is{" "}
            <span className="text-blue-600 font-semibold text-xl">
              {profile?.user?.name || "Aman Gupta"}
            </span>
            , a passionate full stack developer skilled in building modern,
            responsive, and user-friendly web applications.
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              Frontend
            </h2>
            <p className="text-gray-600">
              React.js, HTML5, CSS3, Tailwind, modern UI/UX, responsive design.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              Backend
            </h2>
            <p className="text-gray-600">
              Node.js, Express.js, REST APIs, MongoDB, MySQL.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              DevOps & Cloud
            </h2>
            <p className="text-gray-600">
              Docker, CI/CD, AWS, scalable deployments.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              Experience
            </h2>
            <p className="text-gray-600">
              Built multiple full-stack apps with strong problem-solving and
              clean UI focus.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            Professional Highlights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Developed and deployed multiple full-stack applications. Worked in
            teams to deliver high-quality solutions. Constantly learning new
            technologies to stay updated with industry trends.
          </p>
        </div>

        {/* Personal */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            Personal Interests
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A cricket enthusiast and a big fan of <strong>MS Dhoni</strong>. My
            biggest inspiration comes from my parents, whose support and
            motivation have shaped my journey.
          </p>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm">
          Passionate about building impactful digital experiences 🚀
        </div>
      </div>
    </div>
  );
}

export default About;