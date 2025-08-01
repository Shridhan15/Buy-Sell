import React from "react";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import About from "./pages/About.jsx";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {<Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
