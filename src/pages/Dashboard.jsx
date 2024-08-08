import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useFirebase } from "../context/Firebase";
import { useNavigate, Link } from "react-router-dom";
import { FaStethoscope, FaPlusCircle } from "react-icons/fa"; // Import icons

function Dashboard() {
  const { isLoggedIn, logoutUser } = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login"); // Redirect to login page if not logged in
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            <FaStethoscope className="inline-block mr-2 text-blue-500" /> Admin
            Dashboard
          </h1>
          <p className="text-gray-600 mb-6">
            {" "}
            Welcome to the Ayush Pathology Admin Dashboard{" "}
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            to="/admin/createLFT"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center"
          >
            <FaPlusCircle className="mr-2" />
            Create LFT Report
          </Link>
          <Link
            to="/admin/createCBC"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center"
          >
            <FaPlusCircle className="mr-2" />
            Create CBC Report
          </Link>
          <Link
            to="/admin/createUrineTest"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center"
          >
            <FaPlusCircle className="mr-2" />
            Create Urine Test
          </Link>
          <Link
            to="/admin/createRFT"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center"
          >
            <FaPlusCircle className="mr-2" />
            Create RFT Report
          </Link>
          <Link
            to="/admin/createPregReport"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center"
          >
            <FaPlusCircle className="mr-2" />
            Create Preg Report
          </Link>
          <Link
            to="/admin/createWidal"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center"
          >
            <FaPlusCircle className="mr-2" />
            Create Widal Report
          </Link>
        </div>
        <hr className="my-4" />
        <div>
          <Link
            to="/admin/ListAllAppointments"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center"
          >
            List All Appointments
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
