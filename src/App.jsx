import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
// ALL LFT Report Routes here
import CreateLFT from "./pages/LFT/CreateLFT.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx"; 
import ListAllLFT from "./pages/LFT/ListAllLFT.jsx";
import View from "./pages/LFT/ViewLFT.jsx";

// ALL CBC Report Routes here
import CreateCBC from "./pages/CBC/CreateCBC.jsx"
import ListAllCBC from "./pages/CBC/ListAllCBC.jsx";
import ViewCBC from "./pages/CBC/ViewCBC.jsx";
// ALL Urine routes here
import CreateUrine from "./pages/URINE/CreateUrine.jsx"
import ListAllUrine from "./pages/URINE/ListAllUrineComponent.jsx";
import ViewUrine from "./pages/URINE/ViewUrine.jsx";
// All RFT routes here
import CreateRFT from "./pages/RFT/CreateRFT.jsx"
import ListAllRFT from "./pages/RFT/ListAllRFTComponent.jsx";
import ViewRFT from "./pages/RFT/ViewRFT.jsx";
// All PREGNANCY ROUTES
import CreatePreg from "./pages/PREGNANCY/CreatePreg.jsx";
import ListAllPreg from "./pages/PREGNANCY/ListAllPreg.jsx";
import ViewPreg from "./pages/PREGNANCY/ViewPreg.jsx";
// All WIDAL ROUTES
import CreateWidal from "./pages/WIDAL/CreateWidal.jsx";
import ListAllWidal from "./pages/WIDAL/ListAllWidal.jsx";
import ViewWidal from "./pages/WIDAL/ViewWidal.jsx";
// Appoinment 
import BookAppointment from "./pages/Appointment/BookAppoinment.jsx";
import LListAllAppoinments from "./pages/Appointment/LListAllAppoinments.jsx";
// AOS for Animation
import AOS from "aos";
import "aos/dist/aos.css"
function App() {
  React.useEffect(()=>{
    AOS.init(
      {
        duration:1200,
        easing: "ease-in-out"
      }
    );
  })

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<ProtectedRoute/>}>
         <Route exact path="dashboard" element={<Dashboard />} />
         {/* Create LFT REPORT ROUTES */}
         <Route exact path="createLFT" element={<CreateLFT />} />
         <Route exact path="listAllReports" element={<ListAllLFT />}/>
         <Route exact path="listAllReports/view/:reportId" element={<View />}/>
         {/* Create CBC REPORT ROUTES */}
         <Route exact path="createCBC" element={<CreateCBC />} />
         <Route exact path="listAllCBC" element={<ListAllCBC />}/>
         <Route exact path="listAllCBC/view/:cbcId" element={<ViewCBC />}/>
          {/* Create Urine REPORT ROUTES */}
          <Route exact path="createUrineTest" element={<CreateUrine />} />
          <Route exact path="listAllUrine" element={<ListAllUrine />} />
          <Route exact path="listAllUrine/view/:urineId" element={<ViewUrine />} />
          {/* Create RFT REPORT ROUTES */}
          <Route exact path="createRFT" element={<CreateRFT />} />
          <Route exact path="listAllRFT" element={<ListAllRFT />}/>
          <Route exact path="listAllRFT/view/:rftId" element={<ViewRFT />}/>
          {/* PREGNANCY REPORT ROUTES */}
          <Route exact path="createPregReport" element={<CreatePreg />} />
          <Route exact path="listAllPregReport" element={<ListAllPreg />}/>
          <Route exact path="listAllPregReport/view/:pregId" element={<ViewPreg />}/>
          {/* WIDAL REPORT ROUTES */}
          <Route exact path="createWidal" element={<CreateWidal />} />
          <Route exact path="listAllWidal" element={<ListAllWidal />}/>
          <Route exact path="listAllWidal/view/:widalId" element={<ViewWidal />}/>
          {/* Appointment Routes */}
          <Route exact path="ListAllAppointments" element={<LListAllAppoinments />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="/book_appointment" element={<BookAppointment />} />
      </Routes>
    </>
  );
}

export default App;
