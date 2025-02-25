import { Button } from "@mui/material";
import { useTheme } from "./components/context/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Mi Aplicación</h1>
      <Button variant="contained" onClick={toggleTheme}>
        Cambiar Tema
      </Button>
    </div>
  );
}

export default App;
