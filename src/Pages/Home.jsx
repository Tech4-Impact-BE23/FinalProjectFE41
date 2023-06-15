import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      {/* Konten halaman Home */}
      <Footer />
    </div>
  );
}

export default Home;
