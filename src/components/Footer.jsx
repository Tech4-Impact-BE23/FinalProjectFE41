import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/style.css'
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import github from '../assets/github.png';
import telegram from '../assets/telegram.png';
import instagram from '../assets/instagram.png';
import figma from '../assets/figma.png';

const Footer = () => {
return (
    <div className="bg-update my-5">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-3">
            <img src={logo} alt="Logo" />
            <p>
              Kami menyadari akan kebutuhan kolaborasi dengan berbagai pihak
              lain untuk menjadikan jejaring ini sebagai pemacu dan pengungkit
              ekosistem keberdayaan warga, lebih dari sekedar platform
              penggalangan sumber daya.
            </p>
          </div>

          <div className="col-md-3 text-center">
            <h5 className="mb-5">Key</h5>
            <p>Youth</p>
            <p>Connect</p>
            <p>Communication</p>
            <p>Blend</p>
          </div>

          <div className="col-md-3 text-center">
            <h5 className="mb-5">Company</h5>
            <p>Home</p>
            <p>About</p>
            <p>Article</p>
            <p>Community</p>
          </div>

          <div className="col-md-3 text-center">
            <h5 className="mb-5">Follow Us</h5>
            <img className="pe-2" src={facebook} alt="facebook"/>
            <img className="pe-2" src={github} alt="github" />
            <img className="pe-2" src={telegram} alt="telegram"/>
            <img className="pe-2" src={instagram} alt="Logo" />
            <img src={figma} alt="figma"/>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;