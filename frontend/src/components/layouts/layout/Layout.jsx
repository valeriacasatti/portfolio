import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "../../context/useTheme";
import Navbar from "../navbar/Navbar";

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
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
      }}
    >
      <Navbar />
      <Outlet />
    </Box>
  );
};
export default Layout;
