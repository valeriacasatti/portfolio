import { Box, Typography } from "@mui/material";

// imgs
import canva from "../../../assets/skills/CANVA.png";
import css from "../../../assets/skills/CSS.png";
import figma from "../../../assets/skills/FIGMA.png";
import github from "../../../assets/skills/GITHUB.png";
import html from "../../../assets/skills/HTML.png";
import java from "../../../assets/skills/JAVA.png";
import js from "../../../assets/skills/JS.jpg";
import materialui from "../../../assets/skills/MATERIALUI.png";
import mongodb from "../../../assets/skills/MONGODB.png";
import mysql from "../../../assets/skills/MySQL.png";
import node from "../../../assets/skills/NODE.png";
import react from "../../../assets/skills/REACT.png";

import "./skills.css";

const Skills = () => {
  return (
    <Box>
      <Typography variant="h2" mb={5}>
        Skills
      </Typography>

      <Box className="skills-container">
        <img src={canva} alt="canva" />
        <img src={css} alt="css" />
        <img src={figma} alt="figma" />
        <img src={github} alt="github" />
        <img src={html} alt="html" />
        <img src={java} alt="java" />
        <img src={js} alt="js" />
        <img src={materialui} alt="materialui" />
        <img src={mongodb} alt="mongodb" />
        <img src={mysql} alt="mysql" />
        <img src={node} alt="node" />
        <img src={react} alt="react" />
      </Box>
    </Box>
  );
};
export default Skills;
