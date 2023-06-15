import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import Forum from "./Pages/Forum";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CreateForum from "./components/CreateForum";
import DetailForum from "./Pages/DetailForum";

const App = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    let x = localStorage.getItem("UserToken");
    setToken(x);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Articles" element={<Articles />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Forum" element={<Forum />} />
      <Route path="/Forum/DetailForum/:forumId" element={<DetailForum />} />
      <Route path="/Forum/CreateForum" element={<CreateForum />} />
    </Routes>
  );
};

export default App;
