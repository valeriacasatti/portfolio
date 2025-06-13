import logo from "../../../assets/logo-footer.svg";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { Link } from "react-scroll";
import { useTheme } from "../../context/useTheme";
import { pink } from "@mui/material/colors";

// iconos
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  const pink600 = pink[600];
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const { t } = useTranslation();

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "rgba(212, 39, 166, 0.05)",
          padding: "2rem 6rem",
          marginTop: "3rem",
        }}
      >
        <Grid2 container>
          {/* logo and icons */}
          <Grid2
            size={{ xs: 12, lg: 2 }}
            sx={{
              textAlign: isSmallScreen ? "center" : "left",
              marginBottom: isSmallScreen ? "1rem" : 0,
            }}
          >
            <img src={logo} alt="logo" />

            <Box
              display="flex"
              justifyContent={isSmallScreen ? "center" : "flex-start"}
              marginTop="1rem"
              gap={{ xs: 2, lg: 3 }}
            >
              <a href="mailto:valeria.casatti@gmail.com" target="_blank">
                <MailIcon sx={{ color: pink600 }} className="icon" />
              </a>
              <a href="https://wa.me/5493516177344" target="_blank">
                <WhatsAppIcon sx={{ color: pink600 }} className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/valeriacasatti"
                target="_blank"
              >
                <LinkedInIcon sx={{ color: pink600 }} className="icon" />
              </a>
              <a href="https://github.com/valeriacasatti" target="_blank">
                <GitHubIcon sx={{ color: pink600 }} className="icon" />
              </a>
            </Box>
          </Grid2>

          {/* links */}
          <Grid2
            size={{ xs: 12, lg: 9 }}
            sx={{
              flexWrap: "wrap",
              textAlign: "center",
              marginBottom: isSmallScreen ? "1rem" : 0,
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              gap={isSmallScreen ? 2 : { lg: 10 }}
              sx={{ height: "100%" }}
            >
              <Link to="home" smooth={true} duration={500}>
                <Typography variant="body2">{t("home")}</Typography>
              </Link>
              <Link to="about" smooth={true} duration={500}>
                <Typography variant="body2">{t("about")}</Typography>
              </Link>
              <Link to="skills" smooth={true} duration={500}>
                <Typography variant="body2">{t("skills")}</Typography>
              </Link>
              <Link to="projects" smooth={true} duration={500}>
                <Typography variant="body2">{t("projects")}</Typography>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <Typography variant="body2">{t("contact")}</Typography>
              </Link>
            </Box>
          </Grid2>

          {/* theme icon */}
          <Grid2
            size={{ xs: 12, lg: 1 }}
            sx={{
              display: "flex",
              justifyContent: isSmallScreen ? "center" : "flex-end",
            }}
          >
            <IconButton
              onClick={toggleTheme}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              {theme.palette.mode === "light" ? (
                <DarkModeTwoToneIcon sx={{ color: pink600 }} />
              ) : (
                <LightModeTwoToneIcon sx={{ color: pink600 }} />
              )}
            </IconButton>
          </Grid2>
        </Grid2>
      </Box>
      <Box
        textAlign="center"
        flexWrap="wrap"
        backgroundColor="rgba(255, 255, 255, 0.1)"
      >
        <Typography variant="caption" align="center" sx={{ marginTop: "2rem" }}>
          Valeria Casatti © {new Date().getFullYear()} {t("rights")}
        </Typography>
      </Box>
    </>
  );
};
export default Footer;
