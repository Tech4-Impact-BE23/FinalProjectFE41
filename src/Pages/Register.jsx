import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormRegister from '../components/FormRegister'

const Register = () => {
  return ( 
    <div style={{ backgroundColor: '#DCDCDC' }}>
        <Navbar />
        <FormRegister />
        <Footer />
    </div>
);
};

export default Register;