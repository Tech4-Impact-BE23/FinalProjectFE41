import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IsiHome from "../components/Isihome";

function Home() {
  return (
    <div style={{ backgroundColor: '#DCDCDC' }}>
      <Navbar />
      <IsiHome />
      <Footer />
    </div>
  );
}

export default Home;
