import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-scroll";
import { useState } from "react";
import { useTheme } from "../../context/useTheme";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const { theme } = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <AppBar
      className="navbar"
      sx={{
        backgroundColor: theme.palette.background.default,
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
      }}
    >
      <Toolbar disableGutters className="toolbar">
        {/* logo */}
        <img src={logo} alt="logo" />

        {/* desktop navbar */}
        <Box
          className="navbar-links"
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-180}
              activeClass="active"
            >
              {link.label}
            </Link>
          ))}
        </Box>

        {/* mobile menu button */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", lg: "none" } }}
        >
          <MenuIcon className="mobile-menu-icon" />
        </IconButton>

        {/* mobile menu */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          slotProps={{
            paper: {
              sx: {
                backgroundColor: theme.palette.background.default,
                transition:
                  "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
              },
              className: "mobile-menu",
            },
          }}
        >
          <List>
            <img src={logo} alt="logo" />

            {navLinks.map((link) => (
              <ListItem
                key={link.to}
                onClick={handleDrawerToggle}
                className="mobile-menu-list"
              >
                <ListItemText>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-180}
                    activeClass="active"
                  >
                    {link.label}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
