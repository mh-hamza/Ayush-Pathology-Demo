import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useFirebase } from "../../context/Firebase";
import { toast } from "react-toastify";
import { MdDeleteSweep, MdAccessTime, MdDateRange, MdPerson, MdPhone, MdDescription } from 'react-icons/md';
import { MdPrint } from "react-icons/md";

const LListAllAppoinments = () => {
  const { listAllAppointmentsHandler, deleteAppointmentHandler } =
    useFirebase();
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchReports = async () => {
      setIsLoading(true);
      try {
        const fetchedReports = await listAllAppointmentsHandler();
        setReports(fetchedReports);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, [listAllAppointmentsHandler]);

  const navigate = useNavigate();

  const handleDeleteReport = async (reportId) => {
    if (window.confirm("Are you sure you want to delete this Appointment?")) {
      try {
        await deleteAppointmentHandler(reportId);
        const updatedReports = reports.filter(
          (report) => report.id !== reportId
        );
        setReports(updatedReports);
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete report!");
      }
    }
  };

  // Pagination ----------------------------------------------------------
  const itemsPerPage = 10;
  const totalPages = Math.ceil(reports.length / 10);
  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
      // console.log("Page changed to", selectedPage);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-gray-800 font-bold mb-7">Appointments</h1>
        </div>
        {isLoading && <p>Loading reports...</p>}
        {error && <p>Error fetching reports: {error.message}</p>}
       
          {reports.length > 0 && (
           <div className="flex flex-wrap gap-4 max-w-[880px] justify-center">
           {reports
             .slice((page - 1) * itemsPerPage, page * itemsPerPage)
             .map((report, index) => (
               <div key={index} className="bg-gray-200 flex flex-col w-[250px] rounded-2xl relative h-[180px] justify-between ">
                 <div className="flex items-center bg-green-500 text-white p-2 rounded-t-2xl justify-center">
                   <h2 className="text-lg font-semibold">Appointment</h2>
                 </div>
                 <button
                   className="absolute top-[12px] right-[12px] text-[20px]"
                   onClick={() => handleDeleteReport(report.id)}
                 >
                   <MdDeleteSweep className="text-red-600" />
                 </button>
                 <div className="flex items-center px-2">
                   <MdPerson className="text-blue-600 text-xl mr-2" />
                   <p className="font-semibold text-sm uppercase text-blue-700"> {report.name}</p>
                 </div>
                 <div className="flex items-center px-2">
                   <MdDescription className="text-teal-600 text-xl mr-2 " />
                   <p className="font-semibold text-sm  text-teal-700"> TEST: {report.test}</p>
                 </div>
                 <div className="flex items-center px-2">
                   <MdPhone className="text-yellow-600 text-xl mr-2" />
                   <p className="text-sm font-semibold text-gray-700 "> MOB: {report.phoneNumber}</p>
                 </div>
                 <div className="flex justify-between text-gray-800 px-2 mb-2">
                   <div className="flex items-center">
                     <MdDateRange className="text-sm mr-1  text-gray-700" />
                     <p className=" text-gray-700">{report.date}</p>
                   </div>
                   <div className="flex items-center">
                     <MdAccessTime className="text-sm mr-1  text-gray-700" />
                     <p className=" text-gray-700">{report.time}</p>
                   </div>
                 </div>
               </div>
             ))}
         </div>
          )}
        </div>
        {reports.length > 0 && (
          <div className="fixed bottom-2 left-2 p-4 sm:ml-64">
            {page > 1 && (
              <span
                className="bg-blue-600 text-white rounded-md cursor-pointer px-4 py-2"
                onClick={() => selectedPageHandler(page - 1)}
              >
                Previous
              </span>
            )}
            {page < totalPages && (
              <span
                className="bg-blue-600 text-white rounded-md cursor-pointer px-4 py-2"
                onClick={() => selectedPageHandler(page + 1)}
              >
                Next
              </span>
            )}
          </div>
        )}
      </div>
  );
};

export default LListAllAppoinments;
