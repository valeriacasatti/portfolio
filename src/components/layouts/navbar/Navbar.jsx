import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../../assets/logo.svg";

const Navbar = () => {
  const location = useLocation(); // Obtiene la ruta actual

  return (
    <Box>
      <nav>
        <img src={logo} alt="logo" />
        <div className="navbar-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            to="/skills"
            className={location.pathname === "/skills" ? "active" : ""}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </div>
      </nav>
    </Box>
  );
};
export default Navbar;
