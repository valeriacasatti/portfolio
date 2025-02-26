import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/layout/Layout";
import Error404 from "../pages/error404/Error404";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};
export default AppRouter;
