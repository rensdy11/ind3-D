import React from "react";
import Logo1 from "../public/assets/react.svg";
import Logo2 from "../public/assets/tailwindlogo.png";
import Logo3 from "../public/assets/threejs.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4 py-12">
        {/* About Me Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-8 relative group">
            About Me
          </h1>  

          {/* Introduction */}
          <div className="text-lg text-gray-200 space-y-4">
            <p>My name is Indy Erens</p>
            <p>I live in Brussels/BXL</p>
            <p>
              I made this website as my final solo project. I hope you find it as
              enjoyable as it was for me to create this!
            </p>
          </div>
        </div>

        {/* Tools and Libraries Section */}
        <div className="text-gray-200">
          <h2 className="text-2xl font-bold mb-8">Tools and Libraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* React.js Card */}
            <div className="group flex flex-col items-center space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full p-4 transform transition-transform duration-500 group-hover:rotate-y-360">
                <img
                  src={Logo1}
                  alt="React.js Logo"
                  className="w-16 h-16"
                />
              </div>
              <p className="text-lg font-semibold hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                React.js
              </p>
            </div>

            {/* THREE.js Card */}
            <div className="group flex flex-col items-center space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full p-4 transform transition-transform duration-500 group-hover:rotate-y-360">
                <img
                  src={Logo3}
                  alt="THREE.js Logo"
                  className="w-16 h-16 filter brightness-110 contrast-110"
                />
              </div>
              <p className="text-lg font-semibold hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                THREE.js
              </p>
            </div>

            {/* Tailwind CSS Card */}
            <div className="group flex flex-col items-center space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full p-4 transform transition-transform duration-500 group-hover:rotate-y-360">
                <img
                  src={Logo2}
                  alt="Tailwind CSS Logo"
                  className="w-16 h-16 filter brightness-110 contrast-110"
                />
              </div>
              <p className="text-lg font-semibold hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;