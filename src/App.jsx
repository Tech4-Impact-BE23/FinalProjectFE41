import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Articles from './Pages/Articles';
import Forum from './Pages/Forum';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
