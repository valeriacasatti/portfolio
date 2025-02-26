import Home from "../pages/home/Home";
import About from "./../pages/about/About";
import Skills from "./../pages/skills/Skills";
import Projects from "./../pages/projects/Projects";
import Contact from "./../pages/contact/Contact";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "about",
    path: "/about",
    Element: About,
  },
  {
    id: "skills",
    path: "/skills",
    Element: Skills,
  },
  {
    id: "projects",
    path: "/projects",
    Element: Projects,
  },
  {
    id: "contact",
    path: "/contact",
    Element: Contact,
  },
];
