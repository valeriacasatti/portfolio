import data from "../../../data/projects.json";
import { useEffect, useState } from "react";
import ProjectList from "./ProjectList";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    return new Promise((resolve) => {
      resolve(data);
    });
  };

  useEffect(() => {
    getProjects().then((res) => {
      setProjects(res);
    });
  }, []);

  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
};

export default ProjectsContainer;
