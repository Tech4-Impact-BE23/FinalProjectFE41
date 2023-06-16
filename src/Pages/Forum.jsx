import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IsiForum from "../components/IsiForum";

const Forum = () => {

    return (
        <div style={{ backgroundColor: '#DCDCDC' }}>
            <Navbar />
            <IsiForum />
            <Footer />
        </div>
        
    );    

};

export default Forum;
