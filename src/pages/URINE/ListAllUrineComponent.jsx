import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useFirebase } from "../../context/Firebase";
import { toast } from "react-toastify";
import { MdDeleteSweep, MdPrint } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

const ListAllUrineComponent = () => {
  const { listAllUineReports, deleteUrineReport, viewUrineReport } = useFirebase();
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      setIsLoading(true);
      try {
        const fetchedReports = await listAllUineReports();
        setReports(fetchedReports);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, [listAllUineReports]);

  const navigate = useNavigate();

  const handleDeleteReport = async (reportId) => {
    if (window.confirm("Are you sure you want to delete this report?")) {
      try {
        await deleteUrineReport(reportId);
        const updatedReports = reports.filter((report) => report.id !== reportId);
        setReports(updatedReports);
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete report!");
      }
    }
  };

  const handleViewReport = async (reportId) => {
    const reportData = await viewUrineReport(reportId);
    if (reportData) {
      navigate(`/admin/listAllUrine/view/${reportId}`, { state: reportData });
    } else {
      toast.error("Report not found!");
    }
  };

  // Pagination ----------------------------------------------------------
  const itemsPerPage = 10;
  const totalPages = Math.ceil(reports.length / itemsPerPage);

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  // Search and Filter Functionality
  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-gray-800 font-bold">
            List All Urine Reports
          </h1>
          <div className="flex items-center justify-center relative w-[80%] mt-4 mb-6">
            <input
              type="text"
              placeholder="Search by name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-blue-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IoMdSearch className="absolute right-[20px] top-3 text-gray-400" />
          </div>
        </div>
        {isLoading && <p>Loading reports...</p>}
        {error && <p>Error fetching reports: {error.message}</p>}
        {filteredReports.length > 0 && (
          <ul>
            <li className="bg-blue-500 text-white p-2 m-2 flex justify-between rounded-lg ">
              <p className="w-[40%] font-bold ">Name</p>
              <p className="w-[25%] font-bold ">Date</p>
              <p className="w-[25%] font-bold ">Print</p>
              <p className="w-[10%] font-bold ">Delete</p>
            </li>
            {filteredReports
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((report, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-2 m-2 flex justify-between border border-gray-200 rounded-lg"
                >
                  <p className="w-[40%] font-semibold text-gray-800">
                    {report.name}
                  </p>
                  <p className="w-[25%] text-gray-800 font-semibold">
                    {report.date}
                  </p>
                  <button
                    className="w-[25%]"
                    onClick={() => handleViewReport(report.id)}
                  >
                    <MdPrint className="text-blue-600" />
                  </button>
                  <button
                    className="w-[10%]"
                    onClick={() => handleDeleteReport(report.id)}
                  >
                    <MdDeleteSweep className="text-red-600" />
                  </button>
                </li>
              ))}
          </ul>
        )}
        {filteredReports.length > 0 && (
          <div className="fixed bottom-2">
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
    </div>
  );
};

export default ListAllUrineComponent;
