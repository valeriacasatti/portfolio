import { Box, Container, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import Button from "../../common/button/Button";

//icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const About = () => {
  const pink600 = pink[600];

  // send email
  const emailURL =
    "https://mail.google.com/mail/?view=cm&fs=1&to=valeria.casatti@gmail.com&su=Interested%20in%20your%20services&body=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20work.";

  const handleSendEmail = () => {
    window.open(emailURL, "_blank");
  };

  return (
    <Box textAlign="center">
      <Container maxWidth="md">
        <Typography variant="h2">About</Typography>
        <Typography variant="body1" mt={3}>
          Recent graduate as a Full Stack Web Developer from Coderhouse, I am
          enthusiastic about launching a rewarding career in the field. Eager to
          join a team of experienced developers, I aim to build a strong career
          foundation through active participation in innovative projects. I
          recently attained certifications in Backend Development, React JS,
          JavaScript, and Web Design
        </Typography>
      </Container>

      {/* contact info */}
      <Box my={3} display="flex" justifyContent="center">
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
