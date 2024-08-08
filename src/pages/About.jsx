import React from "react";
import { FaMicroscope, FaUserMd, FaFlask } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImg from "../assets/aboutImg.jpg"
const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div data-aos="fade-right" className="md:flex-shrink-0">
                <img
                  className="w-full h-64 max-h-[600px] object-cover md:h-full"
                  src={AboutImg} alt="img"
                />
              </div>
              <div data-aos="fade-left" className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaMicroscope className="text-blue-500 mr-2" /> Our Mission
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our mission is to provide accurate and timely diagnostic
                    services with the highest level of integrity and
                    professionalism. We strive to support healthcare providers
                    with reliable lab results to improve patient outcomes.
                  </p>
                </div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaUserMd className="text-blue-500 mr-2" /> Our Team
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our team consists of experienced pathologists, laboratory
                    technicians, and support staff who are dedicated to
                    delivering high-quality diagnostic services. We are
                    committed to continuous education and staying at the
                    forefront of medical advancements.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaFlask className="text-blue-500 mr-2" /> Our Services
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We offer a wide range of pathology services, including
                    histopathology, cytology, and molecular diagnostics. Our
                    state-of-the-art laboratory is equipped with the latest
                    technology to ensure accurate and timely results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
