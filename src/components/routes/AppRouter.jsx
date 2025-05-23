import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout/Layout";
import Error404 from "../pages/error404/Error404";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "../context/useTheme";
import HomeContainer from "../pages/home/HomeContainer";

const AppRouter = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomeContainer />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </ThemeProvider>
  );
};
export default AppRouter;
