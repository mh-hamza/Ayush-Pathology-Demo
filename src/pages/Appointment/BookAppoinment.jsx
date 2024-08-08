import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookAppoinmentComponent from "../../components/BookAppoinmentComponent"
function BookAppointment() {
 
  return (
    <>
      <Navbar />
      <BookAppoinmentComponent/>
      <Footer />
    </>
  );
}

export default BookAppointment;
