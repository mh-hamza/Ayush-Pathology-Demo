import React from "react";
import homeBg from "../assets/home-bg.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import OurServices from "../components/OurServices";
import BookAppoinmentComponent from "../components/BookAppoinmentComponent";
import { FaUserMd } from "react-icons/fa";
import doctorImage from "../assets/doctor-img.png";
function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 20px",
        }}
      >
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="h-[400px] max-w-5xl w-full rounded-lg shadow-lg p-8 flex flex-col lg:flex-row items-center justify-between backdrop-filter backdrop-blur-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
          }}
        >
          <div
            className="hidden lg:block lg:w-1/3 lg:ml-8 sm:hidden py-2 h-[400px]"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={doctorImage}
              alt="Doctor"
              className="h-full rounded-lg shadow-lg object-cover object-center bg-cover"
            />
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
            className="lg:text-left"
          >
            <h1
              style={{
                fontWeight: "800",
                marginBottom: "20px",
              }}
              className="text-gray-800 uppercase text-[1.5rem] sm:text-2xl md:text-4xl lg:text-4xl w-[90%]"
            >
              Your Trusted Partner for Accurate Pathology Results
            </h1>
            <p
              style={{ marginBottom: "20px" }}
              className="text-gray-600 max-w-[80%] mb-6 leading-6 md:leading-7 text-[14px] md:text-lg"
            >
              Trust us to prioritize your well-being and deliver peace of mind
              through our comprehensive pathology services. With a steadfast
              commitment to excellence.
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-col items-center lg:flex-row gap-4 lg:justify-start"
            >
              <Link
                to="/book_appointment"
                className="bg-blue-500 rounded-full py-2 px-6 text-white font-medium mt-2 lg:mt-0 hover:bg-blue-600 transition duration-200"
              >
                Book an Appointment
              </Link>
              <Link
                to="/contact"
                className="bg-gray-500 rounded-full py-2 px-6 text-white font-medium mt-2 lg:mt-0 hover:bg-gray-600 transition duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BookAppoinmentComponent />
      <OurServices />
      <Footer />
    </>
  );
}

export default Home;
