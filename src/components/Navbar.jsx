import React from "react";
import { motion } from "framer-motion";

import "./Navbar.css";
import assests from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        onClick={() => navigate("/")}
        src={assests.logo}
        alt="Logo"
        className="logo"
      />
      <ul className="nav-links">
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Home
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          About
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Contact
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
