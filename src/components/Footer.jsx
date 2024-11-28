import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-6">
          {/* About Section */}
          <div className="flex-1 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Prathamesh Gaikwad</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in India, specializing in web and
              software development.
            </p>
          </div>
          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center lg:mr-96">
              <FaFacebook className="text-blue-600 text-lg mr-2" />
              <a
                href="https://www.facebook.com/prathamesh.gaikwad.547389"
                className="text-gray-400 hover:text-white"
              >
                Facebook | Prathamesh Gaikwad
              </a>
            </div>
            <div className="flex items-center">
              <FaInstagram className="text-orange-500 text-lg mr-2" />
              <a
                href="https://www.instagram.com/prathame1203"
                className="text-gray-400 hover:text-white"
              >
                Instagram | prathame1203
              </a>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="text-blue-700 text-lg mr-2" />
              <a
                href="https://www.linkedin.com/in/prathamesh-gaikwad-4a02921a2"
                className="text-gray-400 hover:text-white"
              >
                LinkedIn | prathamesh-gaikwad
              </a>
            </div>
            <div className="flex items-center">
              <FaGithub className="text-gray-400 text-lg mr-2" />
              <a
                href="https://github.com/Prathame1220"
                className="text-gray-400 hover:text-white"
              >
                GitHub | Prathame1220
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Prathamesh. All rights reserved.
          </p>
          {/* Icon Links */}
          <div className="flex justify-center md:justify-start space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/prathamesh.gaikwad.547389"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/prathame1203"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/prathamesh-gaikwad-4a02921a2"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Prathame1220"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
          {/* Privacy Links */}
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="/" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
