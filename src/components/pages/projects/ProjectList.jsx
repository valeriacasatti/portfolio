/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

import Project from "./Project";
import "./projects.css";

const ProjectList = ({ projects }) => {
  return (
    <Box mb="5rem" textAlign="center">
      <Typography variant="h2" mb={5}>
        Projects
      </Typography>

      <Box className="projects-container">
        {projects.length > 0 &&
          projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
      </Box>
    </Box>
  );
};
export default ProjectList;
