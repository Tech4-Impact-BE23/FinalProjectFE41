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

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    let x = localStorage.getItem("UserToken");
    setToken(x);
    console.log(token);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Articles" element={<Articles />} />
      <Route
        path="/Login"
        element={
          <>
            {token === "" || token === undefined || token === null ? (
              <Login />
            ) : (
              <></>
            )}
          </>
        }
      />
      <Route path="/Register" element={<Register />} />
      <Route
        path="/Forum"
        element={<>{token !== "" ? <Forum /> : <>no access</>}</>}
      />
      <Route
        path="/Forum/DetailForum/:forumId"
        element={<>{token !== "" ? <DetailForum /> : <>no access</>}</>}
      />
      <Route
        path="/Forum/CreateForum"
        element={<>{token !== "" ? <CreateForum /> : <>no access</>}</>}
      />
    </Routes>
  );
}

export default App;
