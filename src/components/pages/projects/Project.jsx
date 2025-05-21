/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Box, Typography } from "@mui/material";
import { useTheme } from "../../context/useTheme";

import "./projects.css";

const Project = ({ project }) => {
  const { theme } = useTheme();

  return (
    <Box>
      {/* img preview */}
      <a href={project.url} target="_blank">
        <img
          src={project.img}
          alt={project.title}
          className="project-preview"
        />
      </a>
      {/* content */}
      <Card
        className="project-card"
        sx={{
          backgroundColor: theme.palette.background.default,
          transition:
            "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
        }}
      >
        <CardContent>
          {/* title */}
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            className="card-title"
          >
            {project.title}
          </Typography>

          {/* technology */}
          <Typography variant="body2" className="gradientText">
            {project.technology}
          </Typography>

          {/* description */}
          <Typography variant="body1" className="project-description">
            {project.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Project;
