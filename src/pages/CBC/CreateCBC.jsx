import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useFirebase } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";


function CreateCBC() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [drReff, setDrReff] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [hemoglobin, setHemoglobin] = useState("");
  const [wbc, setWbc] = useState("");
  const [rbc, setRbc] = useState("");
  const [hct, setHct] = useState("");
  const [mcv, setMcv] = useState("");
  const [mch, setMch] = useState("");
  const [mchc, setMchc] = useState("");
  // Deffrent Leucocytes Count.
  const [neutrophils, setNeutrophils] = useState("");
  const [lymphocytes, setLymphocytes] = useState("");
  const [eosinophils, setEosinophils] = useState("");
  const [monocytes, setMonocytes] = useState("");
  const [basophils, setBasophils] = useState("");
  const [platelets, setPlatelets] = useState("");

  const firebase = useFirebase();
  const navigate = useNavigate()
  const createReportHandler = (e) => {
     e.preventDefault();
    const result = firebase.createCBC(
      name,
      age,
      drReff,
      date,
      gender,
      hemoglobin,
      wbc,
      rbc,
      hct,
      mcv,
      mch,
      mchc,
      neutrophils,
      lymphocytes,
      eosinophils,
      monocytes,
      basophils,
      platelets
    );

    if(result){
      console.log("creating result object")
      navigate("/admin/listAllCBC")
    }
  };
  

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-gray-900 my-5">
            Create CBC Report
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
                    Hemoglobin
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      required
                      type="text"
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={hemoglobin}
                      onChange={(e) => setHemoglobin(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (12.0-16.0) g/dl
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    WBC
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={wbc}
                      onChange={(e) => setWbc(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (4000-11000) 10<sup>3</sup>/ul
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    RBC
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={rbc}
                      onChange={(e) =>
                        setRbc(e.target.value)
                      }
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (4.0-5.5) 10<sup>4</sup>/ul
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    HCT
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={hct}
                      onChange={(e) =>
                        setHct(e.target.value)
                      }
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (40.0-54.0) %
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    MCV
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={mcv}
                      onChange={(e) => setMcv(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (80.0-100.0) fl
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    MCH
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={mch}
                      onChange={(e) => setMch(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (27.0-34.0) pg
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    MCHC
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={mchc}
                      onChange={(e) => setMchc(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (32.0-36.0) g/dl
                  </td>
                </tr>
                <tr className="border-b border-gray-200 p-4 font-bold text-gray-800">
                   Differential Leucocytes Count.
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Neutrophils
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={neutrophils}
                      onChange={(e) => setNeutrophils(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (57-70) %
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Lymphocytes
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={lymphocytes}
                      onChange={(e) => setLymphocytes(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (20-40) %
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Ecosinophils
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={eosinophils}
                      onChange={(e) => setEosinophils(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (0-6) %
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Monocytes
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={monocytes}
                      onChange={(e) => setMonocytes(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (1-3) %
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Basophils
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={basophils}
                      onChange={(e) => setBasophils(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (0-1) %
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Platelets
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={platelets}
                      onChange={(e) => setPlatelets(e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    (150000-450000) Cells/mm<sup>3</sup>
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

export default CreateCBC;
