import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  typography: {
    fontFamily: "M PLUS 2, sans-serif",
    h1: {
      fontWeight: 300,
      fontSize: "3.5rem",
    },
    h2: {
      fontWeight: 200,
      fontSize: "2.5rem",
    },
    h3: {
      fontWeight: 200,
      fontSize: "2rem",
    },
    body1: {
      fontWeight: 200,
      fontSize: "1rem",
    },
    body2: {
      fontWeight: 200,
      fontSize: "0.8rem",
    },
    caption: {
      fontWeight: 200,
    },
  },
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
  typography: {
    fontFamily: "M PLUS 2, sans-serif",
    h1: {
      fontWeight: 300,
      fontSize: "3.5rem",
    },
    h2: {
      fontWeight: 200,
      fontSize: "2.5rem",
    },
    h3: {
      fontWeight: 200,
      fontSize: "2rem",
    },
    body1: {
      fontWeight: 200,
      fontSize: "1rem",
    },
    body2: {
      fontWeight: 200,
      fontSize: "0.8rem",
    },
    caption: {
      fontWeight: 200,
    },
  },
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
