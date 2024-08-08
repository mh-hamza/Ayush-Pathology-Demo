import React, { useState } from "react";

import { FaFileMedicalAlt } from "react-icons/fa";

import { GiMicroscope } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { GiLiver } from "react-icons/gi";
import { IoExitOutline } from "react-icons/io5";
import { GiKidneys } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { BiDna } from "react-icons/bi";
import { FaPersonPregnant } from "react-icons/fa6";

import { useFirebase } from "../context/Firebase";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const { logoutUser } = useFirebase();
  const logoutHandler =()=>{
    logoutUser();
  }
  return (
    <>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        className="fixed top-4 left-4 z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="cta-button-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full border-r-2"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100">
          <div className="flex items-center gap-2   mb-5">
            <GiMicroscope size="70" className="" />
            <h1 className=" text-gray-800 font-bold text-2xl">
              AYUSH <span className="text-blue-600">PATHOLOGY</span>
            </h1>
          </div>
          <ul className="space-y-2 font-medium ">
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "text-blue-600 bg-gray-300"
                      : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                  }`
                }
              >
                <MdSpaceDashboard className="w-5 h-5 transition duration-75" />
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>
           
            <li>
              <NavLink
                to="/admin/listAllReports"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "text-blue-600 bg-gray-300"
                      : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                  }`
                }
              >
                <GiLiver className="w-5 h-5 transition duration-75" />
                <span className="ms-3">LFT REPORTS</span>
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/admin/listAllCBC"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "text-blue-600 bg-gray-300"
                      : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                  }`
                }
              >
                <MdBloodtype className="w-5 h-5 transition duration-75" />
                <span className="ms-3">CBC REPORTS</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/listAllWidal"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "text-blue-600 bg-gray-300"
                      : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                  }`
                }
              >
                <FaFileMedicalAlt className="w-5 h-5 transition duration-75" />
                <span className="ms-3">WIDAL REPORTS</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/listAllUrine"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "text-blue-600 bg-gray-300"
                      : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                  }`
                }
              >
                <BiDna className="w-5 h-5 transition duration-75" />
                <span className="ms-3">URINE REPORTS</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/listAllRFT"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "text-blue-600 bg-gray-300"
                      : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                  }`
                }
              >
                <GiKidneys className="w-5 h-5 transition duration-75" />
                <span className="ms-3">RFT REPORTS</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/listAllPregReport"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "text-blue-600 bg-gray-300"
                      : "text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                  }`
                }
              >
                <FaPersonPregnant className="w-5 h-5 transition duration-75" />
                <span className="ms-3">PREG REPORTS</span>
              </NavLink>
            </li>
            <li>
              <button onClick={logoutHandler} className=" flex items-center p-2 rounded-lg mt-5 bg-blue-500 text-white ">
                <IoExitOutline  className="w-5 h-5 transition duration-75" />
                <span className="ms-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
