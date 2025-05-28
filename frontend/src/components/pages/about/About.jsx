/* eslint-disable react/prop-types */
import { Box, Container, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import Button from "../../common/button/Button";

//icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const About = ({ handleSendEmail }) => {
  const pink600 = pink[600];

  return (
    <Box mb="5rem" textAlign="center">
      <Container maxWidth="lg">
        <Typography variant="h2" mb={5}>
          About
        </Typography>
        <Typography variant="body1">
          I’m a passionate Full Stack Web Developer with a focus on creating
          innovative and efficient web applications. With a solid foundation in
          both frontend and backend development, I thrive in collaborative
          environments where I can contribute to impactful projects. I have a
          keen interest in continuous learning and am always exploring new
          technologies to enhance my skill set. Currently, I’m focused on
          expanding my expertise in React, JavaScript, and backend technologies
          to build seamless and scalable web solutions.
        </Typography>
      </Container>

      {/* contact info */}
      <Box display="flex" justifyContent="center" my={5}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Box display="flex" alignItems="center" mb={2}>
            <LocationOnIcon sx={{ color: pink600, marginRight: 1 }} />
            <Typography variant="body2">Córdoba, Argentina</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <MailIcon sx={{ color: pink600, marginRight: 1 }} />
            <Typography variant="body2">valeria.casatti@gmail.com</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneIphoneIcon sx={{ color: pink600, marginRight: 1 }} />
            <Typography variant="body2">+54 9 3516-177344</Typography>
          </Box>
        </Box>
      </Box>

      <Button onClick={handleSendEmail} className="contained-btn">
        hire me
      </Button>
    </Box>
  );
};
export default About;
