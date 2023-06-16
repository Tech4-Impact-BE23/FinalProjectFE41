import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IsiAbout from "../components/Isiabout";

const About = () => {
  return (
    <div style={{ backgroundColor: '#DCDCDC' }}>
      <Navbar />
      <IsiAbout />
      <Footer />
    </div>
  );
};

export default About;
