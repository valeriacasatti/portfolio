import { Box, Container, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import Button from "../../common/button/Button";

// icons
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// pages
import About from "../about/About";
import Contact from "../contact/Contact";
import Footer from "../../layouts/footer/Footer";
import ProjectsContainer from "../projects/ProjectsContainer";
import SkillsContainer from "../skills/SkillsContainer";

const Home = () => {
  const pink600 = pink[600];

  // view CV
  const handleOpenCV = () => {
    window.open(
      "https://drive.google.com/file/d/1HhufSxW5p8dEQUTKweb3JOcFWlRnLz4C/view?usp=sharing"
    );
  };

  // send email
  const emailURL =
    "https://mail.google.com/mail/?view=cm&fs=1&to=valeria.casatti@gmail.com&su=Interested%20in%20your%20services&body=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20work.";

  const handleSendEmail = () => {
    window.open(emailURL, "_blank");
  };

  return (
    <>
      <div id="home">
        <Box mt="3rem">
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
              <MailIcon sx={{ color: pink600, fontSize: 20 }} />
            </a>

            <a href="https://wa.me/5493516177344" target="_blank">
              <WhatsAppIcon sx={{ color: pink600, fontSize: 20 }} />
            </a>

            <a
              href="https://www.linkedin.com/in/valeriacasatti"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: pink600, fontSize: 20 }} />
            </a>
            <a href="https://github.com/valeriacasatti" target="_blank">
              <GitHubIcon sx={{ color: pink600, fontSize: 20 }} />
            </a>
          </Box>
        </Box>
      </div>
      {/* pages */}
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <SkillsContainer />
      </div>
      <div id="projects">
        <ProjectsContainer />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};
export default Home;
