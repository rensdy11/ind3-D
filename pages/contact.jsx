import React from "react";
import GithubLogo from "../public/logo/githublogo.png";
import LinkedInLogo from "../public/logo/linkedinlogo.png";
import MailLogo from "../public/logo/maillogo.png";
import PhoneLogo from "../public/logo/phonelogo.png";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-black to-blue-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Title */}
        <h1 className="text-5xl text-blue-700 font-bold mb-12 ">
          Contact Me
        </h1>

        {/* Contact Items */}
        <div className="space-y-10">
          {/* LinkedIn */}
          <div className="group flex items-center justify-center space-x-10">
            <p className="text-xl text-gray-300 group-hover:text-amber-400 transition-colors duration-300">
              LinkedIn
            </p>
            <img
              src={LinkedInLogo}
              alt="LinkedIn Logo"
              className="w-24 h-14 group-hover:rotate-360 transition-transform duration-500"
            />
          </div>

          {/* GitHub */}
          <div className="group flex items-center justify-center space-x-14 pr-9">
            <p className="text-xl text-gray-300 group-hover:text-amber-400 transition-colors duration-300">
              GitHub
            </p>
            <img
              src={GithubLogo}
              alt="GitHub Logo"
              className="w-14 h-14 group-hover:rotate-360 transition-transform duration-500"
            />
          </div>

          {/* Email */}
          <div className="group flex items-center justify-center space-x-20 pr-1">
            <p className="text-xl text-gray-300 group-hover:text-amber-400 transition-colors duration-300">
              Email
            </p>
            <img
              src={MailLogo}
              alt="Email Logo"
              className="w-20 h-14 group-hover:rotate-360 transition-transform duration-500 "
            />
          </div>

          {/* Phone Number */}
          <div className="group flex items-center justify-center ">
            <p className="text-xl text-gray-300 group-hover:text-amber-400 transition-colors duration-300">
              Phone Number
            </p>
            <img
              src={PhoneLogo}
              alt="Phone Logo"
              className="w-20 h-14 group-hover:rotate-360 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;