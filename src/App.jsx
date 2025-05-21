import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/routes/AppRouter";
import ProjectsContainer from "./components/pages/projects/ProjectsContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
        <ProjectsContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
