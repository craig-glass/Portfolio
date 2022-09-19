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
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
        </motion.header>
      </div>

      <a href="#" className="hamburger" onClick={showSidebar}>
        this
      </a>
    </>
  );
}
