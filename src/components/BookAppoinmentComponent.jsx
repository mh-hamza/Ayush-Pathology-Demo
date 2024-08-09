import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaStethoscope,
  FaCalendarAlt,
  FaClock,
  FaUserMd,
} from "react-icons/fa";
import doctorImg from "../assets/doctorimg.jpg";
function BookAppoinmentComponent() {
  const [fullName, setFullName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedTest, setSelectedTest] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { bookAppointmentHandler } = useFirebase();
  const [verified, setVerified] = useState(false);

  function onChange(value) {
    setVerified(true);
  }

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!verified) {
      toast.error("Please verify that you are not a robot.");
      return;
    }
    const result = await bookAppointmentHandler(
      fullName,
      selectedDate,
      selectedTest,
      time,
      phoneNumber
    );
    setFullName("");
    setSelectedDate("");
    setTime("");
    setSelectedTest("");
    setPhoneNumber("");
  };

  return (
    <div className="w-full">
      <div className="min-h-[700px] flex flex-col items-center justify-center bg-gray-100 p-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700 flex items-center justify-center my-6">
          <FaStethoscope className="mr-2 text-blue-500" /> Book Appointment
        </h2>
        <div className="w-full lg:max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center lg:space-x-8">
          <div data-aos="zoom-in" className="w-full lg:w-1/2">
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label
                  className="block mb-1 font-semibold text-gray-700"
                  htmlFor="fullName"
                >
                  Full Name:
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-1 font-semibold text-gray-700"
                  htmlFor="phoneNumber"
                >
                  Phone No:
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  maxLength="10"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-1 font-semibold text-gray-700"
                  htmlFor="selectedDate"
                >
                  <FaCalendarAlt className="inline mr-2" /> Select Date:
                </label>
                <input
                  id="selectedDate"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-1 font-semibold text-gray-700"
                  htmlFor="time"
                >
                  <FaClock className="inline mr-2" /> Select Time:
                </label>
                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-1 font-semibold text-gray-700"
                  htmlFor="selectedTest"
                >
                  Select Test:
                </label>
                <select
                  id="selectedTest"
                  value={selectedTest}
                  onChange={(e) => setSelectedTest(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                  required
                >
                  <option value="">Select Test</option>
                  <option value="LFT">LFT (Liver Function Test)</option>
                  <option value="CBC">CBC (Complete Blood Count)</option>
                  <option value="RFT">RFT (Renal Function Test)</option>
                  <option value="URINE">Urine Test</option>
                  <option value="PREGNANCY">Pregnancy Test</option>
                </select>
              </div>
              <ReCAPTCHA
                sitekey="6Leg-SIqAAAAAKLmX-3HB0ZlgBVZwl6kd9srkNHy"
                onChange={onChange}
              />
              <div>
                <button
                  type="submit"
                  onSubmit={handleBooking}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
          <div data-aos="zoom-in"  className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center items-center">
            <img
              src={doctorImg}
              className="w-full h-auto max-w-xs lg:max-w-sm rounded-lg shadow-lg object-cover object-center bg-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAppoinmentComponent;
