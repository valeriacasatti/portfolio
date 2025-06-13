/* eslint-disable react/prop-types */
import { IconButton } from "@mui/material";
import { pink } from "@mui/material/colors";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";

const ThemeToggleButton = ({ theme, toggleTheme }) => {
  const pink600 = pink[600];
  return (
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
  );
};

export default ThemeToggleButton;
