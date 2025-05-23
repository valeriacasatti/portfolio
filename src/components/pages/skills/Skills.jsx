/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import "./skills.css";

const Skills = ({ skills }) => {
  return (
    <Box mb="5rem" textAlign="center">
      <Typography variant="h2" mb={5}>
        Skills
      </Typography>

      <Box className="skills-container">
        {skills.length > 0 &&
          skills.map((skill) => {
            return <img key={skill.id} src={skill.img} alt={skill.name} />;
          })}
      </Box>
    </Box>
  );
};
export default Skills;
