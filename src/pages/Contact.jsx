import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions or need further information, please feel free to contact us. We are here to help!
                </p>
                <div className="space-y-4">
                  <a href="tel:9026137608" className="flex items-center text-gray-600 bg-gray-100 hover:bg-blue-500 hover:text-white p-3 rounded-md transition">
                    <FaPhoneAlt className="text-green-500 mr-3" />
                    <span>+91 9026137608</span>
                  </a>
                  <a href="mailto:sy90261376@gmail.com" className="flex items-center text-gray-600 bg-gray-100 hover:bg-red-500 hover:text-white p-3 rounded-md transition">
                    <FaEnvelope className="text-red-500 mr-3 hover:text-white" />
                    <span>sy90261376@gmail.com</span>
                  </a>
                  <a href="https://wa.me/919026137608" className="flex items-center text-gray-600 bg-gray-100 hover:bg-green-500 hover:text-white p-3 rounded-md transition">
                    <FaWhatsapp className="text-green-500 mr-3 hover:text-white"/>
                    <span>WhatsApp Us</span>
                  </a>
                 
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-blue-500 mr-3" />
                    <span className="text-gray-600">Near Block Suithakalan, Rudhauli, Jaunpur- 223105</span>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold">Message</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Your Message"
                      rows="5"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
