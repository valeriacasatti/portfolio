import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { useTheme } from "../../context/useTheme";

import ecommerceReact from "../../../assets/projects/ecommerce-react.png";
import ecommerceBackend from "../../../assets/projects/ecommerce-backend.png";
import ecommerceJs from "../../../assets/projects/ecommerce-js.png";

import "./projects.css";

const Projects = () => {
  const { theme } = useTheme();
  return (
    <Box>
      <Typography variant="h2" mb={5}>
        Projects
      </Typography>

      <Box className="projects-container">
        {/* ecommerce-react */}
        <Box>
          {/* preview */}
          <a href="https://ecommerce-casatti.vercel.app/" target="_blank">
            <img
              src={ecommerceReact}
              alt="ecommerce-react"
              className="project-preview"
            />
          </a>
          {/* text */}
          <Card
            className="project-card"
            sx={{
              backgroundColor: theme.palette.background.default,
              transition:
                "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                className="card-title"
              >
                Frontend E-commerce
              </Typography>
              <Typography variant="body2" className="gradientText">
                React JS + Vite | Material UI
              </Typography>
              <Typography variant="body1" className="project-description">
                An e-commerce app built with React and Material UI. Designed for
                a course project, it demonstrates core e-commerce
                functionalities.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* ecommerce-backend */}
        <Box>
          {/* preview */}
          <a
            href="https://proyecto-final-casatti-production.up.railway.app/"
            target="_blank"
          >
            <img
              src={ecommerceBackend}
              alt="ecommerce-backend"
              className="project-preview"
            />
          </a>
          {/* text */}
          <Card
            className="project-card"
            sx={{
              maxWidth: 345,
              backgroundColor: theme.palette.background.default,
              transition:
                "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                className="card-title"
              >
                Backend E-commerce
              </Typography>
              <Typography variant="body2" className="gradientText">
                NodeJS | MongoDB | ExpressJS
              </Typography>
              <Typography variant="body1" className="project-description">
                A backend for an e-commerce site using Node and MongoDB.
                Includes user auth, product APIs, and secure data handling for a
                full-stack app.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* ecommerce-js */}
        <Box>
          {/* preview */}
          <a
            href="https://proyecto-final-js-casatti.vercel.app/"
            target="_blank"
          >
            <img
              src={ecommerceJs}
              alt="ecommerce-js"
              className="project-preview"
            />
          </a>
          {/* text */}
          <Card
            className="project-card"
            sx={{
              maxWidth: 345,
              backgroundColor: theme.palette.background.default,
              transition:
                "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                className="card-title"
              >
                Frontend E-commerce
              </Typography>
              <Typography variant="body2" className="gradientText">
                Javascript
              </Typography>
              <Typography variant="body1" className="project-description">
                A basic e-commerce interface built with vanilla JavaScript. This
                project simulates key features like a dynamic cart and product
                catalog.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};
export default Projects;
