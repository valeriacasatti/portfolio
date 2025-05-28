/* eslint-disable react/prop-types */
import { Box, Tooltip, Typography, Zoom } from "@mui/material";
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
            return (
              <Tooltip
                key={skill.id}
                title={skill.name}
                arrow
                slots={{
                  transition: Zoom,
                }}
              >
                <img src={skill.img} alt={skill.name} />
              </Tooltip>
            );
          })}
      </Box>
    </Box>
  );
};
export default Skills;
