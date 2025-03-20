import React from "react";
import FaceOne from "../public/assets/Face-1.jpeg";
import FaceTwo from "../public/assets/Face-2.jpeg";
import FaceThree from "../public/assets/Face.jpeg";

const Work = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 text-white flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center px-4 py-12">
        {/* Section Title */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-blue-500 mb-4">
            Work & Previous Experiences
          </h1>
          <h3 className="text-3xl text-gray-300">
            What they had to say about me...
          </h3>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Card 1 */}
          <div className="group w-72 p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-neutral-700 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-2xl font-bold text-blue-400">Gene Burbeck</h2>
              <img
                src={FaceOne}
                alt="Gene Burbeck"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              />
              <p className="text-lg text-gray-200 italic">
                "Indy's a good lad, very easy and relaxed to work with. His creativity is boundless!"
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group w-72 p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-neutral-700 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-2xl font-bold text-blue-400">Sjoerd Wielinga</h2>
              <img
                src={FaceTwo}
                alt="Sjoerd Wielinga"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              />
              <p className="text-lg text-gray-200 italic">
                "My man! One of the most forward-thinking creatives/designers I ever met!"
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group w-72 p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-neutral-700 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-2xl font-bold text-blue-400">Kei-lin Szuqing</h2>
              <img
                src={FaceThree}
                alt="Kei-lin Szuqing"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              />
              <p className="text-lg text-gray-200 italic">
                "Always ahead of the curve and never running out of inspiration nor energy, truly one of a kind."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;