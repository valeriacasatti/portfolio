import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/routes/AppRouter";

function App() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
