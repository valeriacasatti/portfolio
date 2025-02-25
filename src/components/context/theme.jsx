import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    background: {
      default: "#ccc3cc",
    },
    text: {
      primary: "#00171f",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000",
    },
    background: {
      default: "#00171f",
    },
    text: {
      primary: "#fff",
    },
  },
});
