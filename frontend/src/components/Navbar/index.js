import "./index.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const variants = {
    open: { x: 0 },
    closed: { x: "-100px" },
  };

  const [isOpen, setIsOpen] = useState(false);

  function showSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div id="sidebar">
        <motion.header
          className="navbar"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <Link to="/skills" onClick={showSidebar}>
            Skills
          </Link>
          <Link to="/contact" onClick={showSidebar}>
            Contact
          </Link>
          <Link to="/projects" onClick={showSidebar}>
            Projects
          </Link>
        </motion.header>
      </div>

      <button className="hamburger" onClick={showSidebar}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </button>
    </>
  );
}
