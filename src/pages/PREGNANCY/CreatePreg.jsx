import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useFirebase } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";

function CreatePreg() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [drReff, setDrReff] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [hemoglobin, setHemoglobin] = useState("");
  const [hbsag, sethbsag] = useState("");
  const [hiv, setHiv] = useState("");
  const [aborh, setAborh] = useState("");

  const firebase = useFirebase();
  const navigate = useNavigate();
  const createReportHandler = (e) => {
    e.preventDefault();
    const result = firebase.createPregReport(
      name,
      age,
      drReff,
      date,
      gender,
      hemoglobin,
      hbsag,
      hiv,
      aborh
    );

    if (result) {
      // console.log("creating result object");
      navigate("/admin/listAllPregReport");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-gray-900 my-5">
            Create Pregnancy Report
          </h1>
          <form onSubmit={createReportHandler}>
            <div className="flex flex-col mb-4 md:w-[650] lg:w-[800px]">
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
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    HBsAg
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={hbsag}
                      onChange={(e) => sethbsag(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    HIV
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={hiv}
                      onChange={(e) => setHiv(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    ABO RH
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={aborh}
                      onChange={(e) => setAborh(e.target.value)}
                    />
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

export default CreatePreg;
