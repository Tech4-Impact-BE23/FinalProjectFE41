import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormLogin from '../components/FormLogin'

const Login = () => {
  return ( 
    <div>
        <Navbar />
        <FormLogin />
        <Footer />
    </div>
);
};

export default Login;