import React from 'react';

import {
  FaVials,
  FaMicroscope,
  FaDna,
  FaHeartbeat,
  FaFlask,
  FaNotesMedical,
} from 'react-icons/fa';

function OurServices() {


  return (
    <div className="bg-gray-100 p-8" >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              aosDelay={service.aosDelay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ServiceCard component
function ServiceCard({ icon, title, description, aosDelay }) {
  return (
    <div
     data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="bg-white shadow-lg rounded-lg p-6 text-center transition duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-100"
    >
      {icon}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Service data
const services = [
  {
    icon: <FaVials className="text-blue-500 text-4xl mb-4 mx-auto" />,
    title: "LFT Reports",
    description:
      "Liver Function Test (LFT) reports to assess liver health and function.",
    aosDelay: "100",
  },
  {
    icon: <FaMicroscope className="text-blue-500 text-4xl mb-4 mx-auto" />,
    title: "CBC Reports",
    description:
      "Complete Blood Count (CBC) reports to evaluate overall health and detect disorders.",
    aosDelay: "200",
  },
  {
    icon: <FaFlask className="text-blue-500 text-4xl mb-4 mx-auto" />,
    title: "Urine Reports",
    description:
      "Analysis of urine samples to diagnose urinary tract infections and other conditions.",
    aosDelay: "300",
  },
  {
    icon: <FaHeartbeat className="text-blue-500 text-4xl mb-4 mx-auto" />,
    title: "RFT Reports",
    description:
      "Renal Function Test (RFT) reports to assess kidney function and health.",
    aosDelay: "100",
  },
  {
    icon: <FaNotesMedical className="text-blue-500 text-4xl mb-4 mx-auto" />,
    title: "Pregnancy Reports",
    description: "Reports related to pregnancy tests and prenatal health.",
    aosDelay: "200",
  },
  {
    icon: <FaFlask className="text-blue-500 text-4xl mb-4 mx-auto" />,
    title: "Microbiology",
    description:
      "Study of microorganisms to diagnose infections and guide treatment plans.",
    aosDelay: "300",
  },
];

export default OurServices;
