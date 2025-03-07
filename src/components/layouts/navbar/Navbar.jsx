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
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../context/useTheme";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const { theme } = useTheme();
  const location = useLocation(); // Obtiene la ruta actual

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.default,
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* logo */}
        <Box component={Link} to="/">
          <img src={logo} alt="logo" />
        </Box>
        {/* desktop navbar */}
        <Box
          className="navbar-links"
          sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={location.pathname === link.to ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </Box>
        {/* mobile menu button */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* mobile menu */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: theme.palette.background.default,
              transition:
                "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
            },
          }}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.to} onClick={handleDrawerToggle}>
                <ListItemText>
                  <Link
                    to={link.to}
                    className={location.pathname === link.to ? "active" : ""}
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
