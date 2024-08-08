import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useFirebase } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";

function CreateWidal() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [drReff, setDrReff] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [malariya, setMalariya] = useState("");
  const [widalTest, setWidalTest] = useState("");
  const [one, setOne] = useState("+");
  const [two, setTwo] = useState("+");
  const [three, setThree] = useState("+");
  const [four, setFour] = useState("+");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("+");
  const [eight, setEight] = useState("+");
  const [nine, setNine] = useState("+");
  const [ten, setTen] = useState("+");
  const [eleven, setEleven] = useState("");
  const [twelve, setTwelve] = useState("");
  const [thirteen, setThirteen] = useState("+");
  const [fourteen, setFourteen] = useState("-");
  const [fifteen, setFifteen] = useState("-");
  const [sixteen, setSixteen] = useState("");
  const [seventeen, setSeventeen] = useState("");
  const [eighteen, setEighteen] = useState("");
  const [nineteen, setNineteen] = useState("-");
  const [twenty, setTwenty] = useState("-");
  const [twentyOne, setTwentyOne] = useState("-");
  const [twentyTwo, setTwentyTwo] = useState("");
  const [twentyThree, setTwentyThree] = useState("");
  const [twentyFour, setTwentyFour] = useState("");

  const firebase = useFirebase();
  const navigate = useNavigate();
  const createReportHandler = (e) => {
    e.preventDefault();
    const result = firebase.createWidalReport(
      name,
      age,
      drReff,
      date,
      gender,
      malariya,
      widalTest,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      ten,
      eleven,
      twelve,
      thirteen,
      fourteen,
      fifteen,
      sixteen,
      seventeen,
      eighteen,
      nineteen,
      twenty,
      twentyOne,
      twentyTwo,
      twentyThree,
      twentyFour,
    );

    if (result) {
      // console.log("creating result object");
      navigate("/admin/listAllWidal");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-gray-900 my-5">
            Create Widal Report
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
            <div className="flex flex-col mb-4 md:w-[650] lg:w-[800px]">
              <table>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800">
                      Malaria Parasite (Antigen Cord)
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        required
                        type="text"
                        className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                        value={malariya}
                        onChange={(e) => setMalariya(e.target.value)}
                        placeholder="Negative(-ve)"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 w-full">
                    <td className="px-4 py-2 whitespace-nowrap text-sm sm:text-base text-gray-800 font-bold ">
                      WIDAL TEST
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <input
                        placeholder="Positive (+ve)"
                        required
                        type="text"
                        className="border text-gray-800 border-gray-300 rounded-md p-2 w-full text-sm sm:text-base"
                        value={widalTest}
                        onChange={(e) => setWidalTest(e.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col mb-4 md:w-[650px] lg:w-[800px]">
              <table className="w-full border border-gray-400 border-collapse">
                <tbody>
                  <tr className="border-b border-gray-400">
                    <td className="p-1 w-[30%]">
                      <span
                        
                        className="w-full border border-gray-400 rounded-md p-1 block"
                      >0</span>
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        defaultValue="1:20"
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        defaultValue="1:40"
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        defaultValue="1:80"
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        defaultValue="1:160"
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        defaultValue="1:320"
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        defaultValue="1:640"
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="p-1 w-[30%]">
                      <span className=" block w-full border border-gray-400 rounded-md p-1">
                        S. Typhi "O"
                      </span>
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={one}
                        onChange={(e) => setOne(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={two}
                        onChange={(e) => setTwo(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={three}
                        onChange={(e) => setThree(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={four}
                        onChange={(e) => setFour(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={five}
                        onChange={(e) => setFive(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={six}
                        onChange={(e) => setSix(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="p-1 w-[30%]">
                      <span className=" block w-full border border-gray-400 rounded-md p-1">
                        S. Typhi "H"
                      </span>
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={seven}
                        onChange={(e) => setSeven(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={eight}
                        onChange={(e) => setEight(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={nine}
                        onChange={(e) => setNine(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={ten}
                        onChange={(e) => setTen(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={eleven}
                        onChange={(e) => setEleven(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={twelve}
                        onChange={(e) => setTwelve(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="p-1 w-[30%]">
                      <span className=" block w-full border border-gray-400 rounded-md p-1">
                        S. Paratyphi "AH"
                      </span>
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={thirteen}
                        onChange={(e) => setThirteen(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={fourteen}
                        onChange={(e) => setFourteen(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={fifteen}
                        onChange={(e) => setFifteen(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={sixteen}
                        onChange={(e) => setSixteen(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={seventeen}
                        onChange={(e) => setSeventeen(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={eighteen}
                        onChange={(e) => setEighteen(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-400">
                    <td className="p-1 w-[30%]">
                      <span className="block w-full border border-gray-400 rounded-md p-1">
                        {" "}
                        'S. Paratyphi "BH"
                      </span>
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={nineteen}
                        onChange={(e) => setNineteen(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={twenty}
                        onChange={(e) => setTwenty(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={twentyOne}
                        onChange={(e) => setTwentyOne(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={twentyTwo}
                        onChange={(e) => setTwentyTwo(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={twentyThree}
                        onChange={(e) => setTwentyThree(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                    <td className="p-1 w-[10%]">
                      <input
                        type="text"
                        value={twentyFour}
                        onChange={(e) => setTwentyFour(e.target.value)}
                        className="w-full border border-gray-400 rounded-md p-1"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

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

export default CreateWidal;
