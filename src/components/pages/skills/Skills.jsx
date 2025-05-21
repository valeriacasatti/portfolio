/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import "./skills.css";

const Skills = ({ skills }) => {
  return (
    <Box>
      <Typography variant="h2" mb={5}>
        Skills
      </Typography>

      <Box className="skills-container">
        {skills.length > 0 &&
          skills.map((skill) => {
            return <img key={skill.id} src={skill.img} alt={skill.name} />;
          })}

        {/* <img src={canva} alt="canva" />
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
        <img src={react} alt="react" /> */}
      </Box>
    </Box>
  );
};
export default Skills;
