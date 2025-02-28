import { Box, Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-footer.svg";
import { useTheme } from "../../context/useTheme";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { pink } from "@mui/material/colors";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  const pink600 = pink[600];
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(212, 39, 166, 0.05)",
        padding: "4rem 6rem",
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        {/* logo and icons */}
        <Grid item xs={2}>
          <img src={logo} alt="logo" />
          <Box sx={{ display: "flex", gap: 3, marginTop: "20px" }}>
            <a href="mailto:valeria.casatti@gmail.com" target="_blank">
              <MailIcon sx={{ color: pink600, fontSize: 20 }} />
            </a>

            <a href="https://wa.me/5493516177344" target="_blank">
              <WhatsAppIcon sx={{ color: pink600, fontSize: 20 }} />
            </a>

            <a
              href="https://www.linkedin.com/in/valeriacasatti"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: pink600, fontSize: 20 }} />
            </a>
            <a
              href="https://github.com/valeriacasatti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ color: pink600, fontSize: 20 }} />
            </a>
          </Box>
        </Grid>

        {/* links */}
        <Grid item xs={9} display="flex" justifyContent="center">
          <Box display="flex" gap={10}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Box>
        </Grid>

        {/* theme icon */}
        <Grid item xs={1} display="flex" justifyContent="flex-end">
          <IconButton onClick={toggleTheme}>
            {theme.palette.mode === "light" ? (
              <DarkModeTwoToneIcon sx={{ color: pink600 }} />
            ) : (
              <LightModeTwoToneIcon sx={{ color: pink600 }} />
            )}
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
