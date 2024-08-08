import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useFirebase } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";

function CreateRFT() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [drReff, setDrReff] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [serumUrea, setSerumUrea] = useState("");
  const [serumCreatinine, setSerumCreatinine] = useState("");
  const [serumSodium, setSerumSodium] = useState("");
  const [serumPotassium, setSerumPotassium] = useState("");
  const [serumProtein, setSerumProtein] = useState("");
  const [serumUricAcid, setSerumUricAcid] = useState("");

  const firebase = useFirebase();
  const navigate = useNavigate();
  const createReportHandler = (e) => {
    e.preventDefault();
    const result = firebase.createRFTReport(
      name,
      age,
      drReff,
      date,
      gender,
      serumUrea,
      serumCreatinine,
      serumSodium,
      serumPotassium,
      serumProtein,
      serumUricAcid
    );

    if (result) {
      console.log("creating result object");
      navigate("/admin/listAllRFT");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-gray-900 my-5">
            Create RFT Report
          </h1>
          <form onSubmit={createReportHandler}>
            <div className="flex flex-col mb-4 lg:w-[800px]">
              <table>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2 whitespace-nowrap text-xl font-bold text-gray-800">
                      Name:
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        type="text"
                        required
                        className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2 whitespace-nowrap text-xl font-bold text-gray-800">
                      Dr Reff:
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        required
                        type="text"
                        className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                        value={drReff}
                        onChange={(e) => setDrReff(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2 whitespace-nowrap text-xl font-bold text-gray-800">
                      Age:
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        required
                        type="number"
                        className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2 whitespace-nowrap text-xl font-bold text-gray-800">
                      Date:
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        required
                        type="text"
                        className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 mb-6">
                    <td className="px-4 py-2 whitespace-nowrap text-xl font-bold text-gray-800">
                      Gender:
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <input
                          required
                          type="radio"
                          id="male"
                          name="gender"
                          value="M"
                          checked={gender === "M"}
                          onChange={(e) => setGender(e.target.value)}
                          className="mr-2"
                        />
                        <label htmlFor="male">Male</label>
                        <input
                          required
                          type="radio"
                          id="female"
                          name="gender"
                          value="F"
                          checked={gender === "F"}
                          onChange={(e) => setGender(e.target.value)}
                          className="mr-2"
                        />
                        <label htmlFor="female">Female</label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <table className="w-full sm:w-full overflow-hidden border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Label
                  </th>
                  <th className="px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                  <th className="px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Range
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Serum Urea
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      required
                      type="text"
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={serumUrea}
                      onChange={(e) => setSerumUrea(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (13-44) mg/dl
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Serum Creatinine
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={serumCreatinine}
                      onChange={(e) => setSerumCreatinine(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (0.6-1.4) mg/dl
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Serum Sodium
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={serumSodium}
                      onChange={(e) => setSerumSodium(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (135-145) m.Eq/lt
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Serum Potassium
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={serumPotassium}
                      onChange={(e) => setSerumPotassium(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (3.5-5.0) m.Eq/lt
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Serum Protein
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={serumProtein}
                      onChange={(e) => setSerumProtein(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (6.0-8.0) g/dl
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Serum Uric Acid
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={serumUricAcid}
                      onChange={(e) => setSerumUricAcid(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (3.5-7.2) mg/dl
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="submit"
              className="ml-[45%] px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateRFT;
