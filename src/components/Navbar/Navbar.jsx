import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { assests } from "../../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <img
        onClick={() => navigate("/")}
        src={assests.logo}
        alt="Logo"
        className="logo"
      />
      <ul className="nav-links">
        <li onClick={() => navigate("/")} className="nav-item">
          Home
        </li>
        <li onClick={() => navigate("/about")} className="nav-item">
          About
        </li>
        <li onClick={() => navigate("/login")} className="nav-item login-btn">
          Login
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
