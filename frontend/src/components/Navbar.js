import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </header>
  );
}
