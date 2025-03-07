import { Box } from "@mui/material";
import { pink } from "@mui/material/colors";

// icons
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  const pink600 = pink[600];

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
      {/* icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: "20px",
        }}
      >
        <a href="mailto:valeria.casatti@gmail.com" target="_blank">
          <MailIcon sx={{ color: pink600, fontSize: 20 }} />
        </a>

        <a href="https://wa.me/5493516177344" target="_blank">
          <WhatsAppIcon sx={{ color: pink600, fontSize: 20 }} />
        </a>

        <a href="https://www.linkedin.com/in/valeriacasatti" target="_blank">
          <LinkedInIcon sx={{ color: pink600, fontSize: 20 }} />
        </a>
        <a
          href="https://github.com/valeriacasatti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ color: pink600, fontSize: 20 }} />
        </a>
      </Box>
    </Box>
  );
};
export default Home;
