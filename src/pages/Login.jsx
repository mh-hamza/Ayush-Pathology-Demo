import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
import adminImg from "../assets/adminImage.jfif"

const Login = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test@123");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit");
    const result = await firebase.loginUser(email, password);
    console.log("Login user successfully" + result);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (firebase.isLoggedIn) {
      //navigate to home
      navigate("/admin/dashboard");
    }
  }, [firebase, navigate]);
  return (
    <>
      <Navbar />
      <div data-aos="fade-right" className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
        <div className="flex shadow-md">
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
            style={{ width: "24rem", height: "32rem" }}
          >
            <div className="w-72">
              <h1 className="text-xl font-semibold">Admin Login</h1>
              <small className="text-gray-400">
                Welcome back! Please enter your details
              </small>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border border-gray-300 focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="*****"
                    className="block w-full rounded-md border border-gray-300 focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700 py-1 px-1.5 text-gray-500"
                  />
                </div>
                <div className="mb-3 flex flex-wrap content-center">
                 
                   
                 
                  <a href="#" className="text-xs font-semibold text-blue-700">
                    Forgot password?
                  </a>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="mb-1.5 block w-full text-center text-white bg-blue-700 hover:bg-blue-900 px-2 py-1.5 rounded-md"
                  >
                    Click to Login
                  </button>
                </div>
              </form>
              
            </div>
          </div>
          <div
            className="hidden md:flex flex-wrap content-center justify-center rounded-r-md"
            style={{ width: "24rem", height: "32rem" }}
          >
            <img
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md object-cover"
              src={adminImg}
              alt="Login banner"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
