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

const Skills = () => {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h2" mb={3}>
        Skills
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        gap={4}
        backgroundColor="rgba(255, 255, 255, 0.1)"
        padding={2}
      >
        <img src={canva} alt="canva" height="50px" />
        <img src={css} alt="css" height="50px" />
        <img src={figma} alt="figma" height="50px" />
        <img src={github} alt="github" height="50px" />
        <img src={html} alt="html" height="50px" />
        <img src={java} alt="java" height="50px" />
        <img src={js} alt="js" height="50px" />
        <img src={materialui} alt="materialui" height="50px" />
        <img src={mongodb} alt="mongodb" height="50px" />
        <img src={mysql} alt="mysql" height="50px" />
        <img src={node} alt="node" height="50px" />
        <img src={react} alt="react" height="50px" />
      </Box>
    </Box>
  );
};
export default Skills;
