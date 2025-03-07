import { Box } from "@mui/material";
import { pink } from "@mui/material/colors";

// icons
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "../../common/button/Button";

import "./home.css";

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
    <Box textAlign="center">
      <h3>Hi there!</h3>
      <h2>I’m Valeria Casatti</h2>
      <h1>Junior Full Stack Developer</h1>
      <p>
        Passionate about advancing my expertise in web development, eager to
        embark on a continuous learning journey and further professionalize in
        the dynamic tech industry.
      </p>

      {/* buttons */}
      <Box display="flex" justifyContent="center" mt="2rem" gap={4}>
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

        <a href="https://www.linkedin.com/in/valeriacasatti" target="_blank">
          <LinkedInIcon sx={{ color: pink600, fontSize: 20 }} />
        </a>
        <a href="https://github.com/valeriacasatti" target="_blank">
          <GitHubIcon sx={{ color: pink600, fontSize: 20 }} />
        </a>
      </Box>
    </Box>
  );
};
export default Home;
