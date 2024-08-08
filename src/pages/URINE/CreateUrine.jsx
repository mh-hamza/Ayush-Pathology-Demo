import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useFirebase } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";

function CreateUrine() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [drReff, setDrReff] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  // Physical Examination
  const [colour, setColour] = useState("");
  const [ reaction, setReaction ] = useState("");
  const [specificGravity, setSpecificGravity] = useState("");
  const [turbidity, setTurbidity] = useState("");
  const [deposits, setDeposits] = useState("");
  // Chemical Examination
  const [sugar, setSugar] = useState("");
  const [albumin, setAlbumin] = useState("");
  const [urobilinogen, seturobilinogen] = useState("");
  const [bileSalts, setBileSalts] = useState("");
  const [bilePigment, setBilePigment] = useState("");
  const [ketoneBodies, setKetoneBodies] = useState("");
  const [chyle, setChyle] = useState("");
  // Microscopic Examination
  const [pusCell, setPusCell] = useState("");
  const [rbc, setRbc] = useState("");

  const firebase = useFirebase();
  const navigate = useNavigate();
  const createReportHandler = (e) => {
    e.preventDefault();
    const result = firebase.createUrineTest(
      name,
      age,
      drReff,
      date,
      gender,
      colour,
      reaction,
      specificGravity,
      turbidity,
      deposits,
      sugar,
      albumin,
      urobilinogen,
      bileSalts,
      bilePigment,
      ketoneBodies,
      chyle,
      pusCell,
      rbc
    );
    

    if (result) {
      console.log("creating result object");
      navigate("/admin/listAllUrine");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-gray-900 my-5">
            Create Urine Report
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
              <thead>
                <tr className="bg-gray-50">
                  <td className="border-b border-gray-200 p-4 font-bold text-gray-800 ">
                    Physical Examination
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Colour
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      required
                      type="text"
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={colour}
                      onChange={(e) => setColour(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Reaction
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={reaction}
                      onChange={(e) => setReaction(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Specific gravity
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={specificGravity}
                      onChange={(e) => setSpecificGravity(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Turbidity
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={turbidity}
                      onChange={(e) => setTurbidity(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Deposits
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={deposits}
                      onChange={(e) => setDeposits(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border-b border-gray-200 p-4 font-bold text-gray-800 ">
                    Chemical Examination
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Sugar
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={sugar}
                      onChange={(e) => setSugar(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Albumin
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={albumin}
                      onChange={(e) => setAlbumin(e.target.value)}
                    />
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Urobilinogen
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={urobilinogen}
                      onChange={(e) => seturobilinogen(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Bile Salts
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={bileSalts}
                      onChange={(e) => setBileSalts(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Bile Pigment
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={bilePigment}
                      onChange={(e) => setBilePigment(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Ketone Bodies
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={ketoneBodies}
                      onChange={(e) => setKetoneBodies(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Chyle
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={chyle}
                      onChange={(e) => setChyle(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border-b border-gray-200 p-4 font-bold text-gray-800 ">
                    Microscopic Examination
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                    Pus Cell
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <input
                      type="text"
                      required
                      className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                      value={pusCell}
                      onChange={(e) => setPusCell(e.target.value)}
                    />
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
                      onChange={(e) => setRbc(e.target.value)}
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

export default CreateUrine;
