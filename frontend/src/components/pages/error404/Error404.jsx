import error404 from "../../../assets/404.png";
import { Box } from "@mui/material";
import { useTheme } from "../../context/useTheme";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";

const Error404 = () => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <img src={error404} alt="error-404" />
      <Button className="contained-btn">
        <Link to="/">go to home page</Link>
      </Button>
    </Box>
  );
};
export default Error404;
