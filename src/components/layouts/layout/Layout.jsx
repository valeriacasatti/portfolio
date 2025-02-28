import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Box } from "@mui/material";
import { useTheme } from "../../context/useTheme";

const Layout = () => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};
export default Layout;
