/* eslint-disable react/prop-types */
import { Box, Container, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import Button from "../../common/button/Button";

// icons
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// pages
import AboutContainer from "../about/AboutContainer";
import SkillsContainer from "../skills/SkillsContainer";
import ProjectsContainer from "../projects/ProjectsContainer";
import ContactContainer from "../contact/ContactContainer";
import Footer from "../../layouts/footer/Footer";

const Home = ({ handleOpenCV, handleSendEmail, emailURL }) => {
  const pink600 = pink[600];

  return (
    <>
      <div id="home">
        <Box mt="10rem" mb="5rem" textAlign="center">
          <Container maxWidth="lg">
            <Typography variant="h3" className="gradientText" mb={2}>
              Hi there!
            </Typography>
            <Typography variant="h2">I’m Valeria Casatti</Typography>
            <Typography variant="h1" className="gradientText">
              Junior Full Stack Developer
            </Typography>
            <Typography variant="body1" mt={2}>
              Passionate about advancing my expertise in web development, eager
              to embark on a continuous learning journey and further
              professionalize in the dynamic tech industry.
            </Typography>
          </Container>

          {/* buttons */}
          <Box display="flex" justifyContent="center" mt={4} gap={4}>
            <Button onClick={handleOpenCV} className="contained-btn">
              view cv
            </Button>
            <Button onClick={handleSendEmail} className="outlined-btn">
              hire me
            </Button>
          </Box>

          {/* icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginTop: "2rem",
            }}
          >
            <a href={emailURL} target="_blank">
              <MailIcon sx={{ color: pink600 }} className="icon" />
            </a>

            <a href="https://wa.me/5493516177344" target="_blank">
              <WhatsAppIcon sx={{ color: pink600 }} className="icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/valeriacasatti"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: pink600 }} className="icon" />
            </a>
            <a href="https://github.com/valeriacasatti" target="_blank">
              <GitHubIcon sx={{ color: pink600 }} className="icon" />
            </a>
          </Box>
        </Box>
      </div>
      {/* pages */}
      <div id="about">
        <AboutContainer />
      </div>
      <div id="skills">
        <SkillsContainer />
      </div>
      <div id="projects">
        <ProjectsContainer />
      </div>
      <div id="contact">
        <ContactContainer />
      </div>
      <Footer />
    </>
  );
};
export default Home;
