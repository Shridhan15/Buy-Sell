import React from "react";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
