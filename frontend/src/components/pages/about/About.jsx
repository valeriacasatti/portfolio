/* eslint-disable react/prop-types */
import { Box, Container, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import Button from "../../common/button/Button";

//icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useTranslation } from "react-i18next";

const About = ({ handleSendEmail }) => {
  const pink600 = pink[600];
  const { t } = useTranslation();

  return (
    <Box mb="5rem" textAlign="center">
      <Container maxWidth="lg">
        <Typography variant="h2" mb={5}>
          {t("about")}
        </Typography>
        <Typography variant="body1">{t("about_text")}</Typography>
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
        {t("hire_me")}
      </Button>
    </Box>
  );
};
export default About;
