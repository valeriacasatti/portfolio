import { AppBar, Box, Drawer, IconButton, List, Toolbar } from "@mui/material";
import { useTheme } from "../../context/useTheme";
import { useState } from "react";
import ThemeToggleButton from "../../common/themeToggleButton/ThemeToggleButton";
import NavLinksContainer from "../../common/navLinks/NavLinksContainer";
import LanguageSelectorContainer from "../../common/languageSelector/LanguageSelectorContainer";
import logo from "../../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

const Navbar = () => {
  // theme
  const { theme, toggleTheme } = useTheme();

  // navbar mobile
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <AppBar
      className="navbar"
      sx={{
        backgroundColor: theme.palette.background.default,
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
      }}
    >
      <Toolbar disableGutters className="toolbar">
        <img src={logo} alt="logo" />

        {/* desktop navbar */}
        <Box
          className="navbar-links"
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          {/* nav items */}
          <NavLinksContainer />

          {/* theme button */}
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />

          {/* language buttons */}
          <LanguageSelectorContainer />
        </Box>

        {/* mobile menu button */}
        <IconButton
          onClick={handleDrawerOpen}
          sx={{
            display: { xs: "block", lg: "none" },
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&:focus": {
              backgroundColor: "transparent",
            },
          }}
        >
          <MenuIcon className="mobile-menu-icon" />
        </IconButton>

        {/* mobile menu */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerClose}
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
            <img src={logo} alt="logo" className="mobile-logo" />

            {/* nav items mobile */}
            <NavLinksContainer
              isMobile={true}
              handleClose={handleDrawerClose}
            />

            {/* theme button mobile */}
            <Box width="100%" marginTop="1rem" textAlign="center">
              <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
            </Box>

            {/* language buttons mobile */}
            <Box width="100%" marginTop="1rem" textAlign="center">
              <LanguageSelectorContainer />
            </Box>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
