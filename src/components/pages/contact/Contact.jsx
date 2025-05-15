import { Box, Typography, TextField } from "@mui/material";
import Button from "../../common/button/Button";

import "./contact.css";

const Contact = () => {
  return (
    <Box>
      <Typography variant="h2" mb={3}>
        Contact
      </Typography>

      {/* form */}
      <Box
        component="form"
        noValidate
        className="contact-form"
        sx={{ "& .MuiTextField-root": { mb: 2 } }}
      >
        <Box>
          <Typography htmlFor="name" sx={{ mb: 1, textAlign: "left" }}>
            Name
          </Typography>
          <TextField
            fullWidth
            className="contact-textfield"
            id="name"
            placeholder="Your full name"
            sx={{
              "& .MuiOutlinedInput-root": {
                transition: "all 0.4s ease",
                "& fieldset": {
                  borderColor: "transparent !important",
                },
                "&:hover": {
                  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.5)",
                  borderRadius: "15px",
                },
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                transform: "scale(0.99)",
                boxShadow: "0px 6px 12px rgba(255, 255, 255, 0.6)",
                borderRadius: "15px",
              },
            }}
            slotProps={{
              input: {
                className: "gradientText",
                style: {
                  fontWeight: "bold",
                },
              },
            }}
          />
          <Typography htmlFor="email" sx={{ mb: 1, textAlign: "left" }}>
            Email
          </Typography>
          <TextField
            fullWidth
            className="contact-textfield"
            id="email"
            placeholder="me@company.com"
            sx={{
              "& .MuiOutlinedInput-root": {
                transition: "all 0.4s ease",
                "& fieldset": {
                  borderColor: "transparent !important",
                },
                "&:hover": {
                  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.5)",
                  borderRadius: "15px",
                },
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                transform: "scale(0.99)",
                boxShadow: "0px 6px 12px rgba(255, 255, 255, 0.6)",
                borderRadius: "15px",
              },
            }}
            slotProps={{
              input: {
                className: "gradientText",
                style: {
                  fontWeight: "bold",
                },
              },
            }}
          />
          <Typography htmlFor="message" sx={{ mb: 1, textAlign: "left" }}>
            Message
          </Typography>
          <TextField
            fullWidth
            className="contact-textfield"
            id="message"
            placeholder="Your message..."
            multiline
            rows={4}
            sx={{
              "& .MuiOutlinedInput-root": {
                transition: "all 0.4s ease",
                "& fieldset": {
                  borderColor: "transparent !important",
                },
                "&:hover": {
                  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.5)",
                  borderRadius: "15px",
                },
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                transform: "scale(0.99)",
                boxShadow: "0px 6px 12px rgba(255, 255, 255, 0.6)",
                borderRadius: "15px",
              },
            }}
            slotProps={{
              input: {
                className: "gradientText",
                style: {
                  fontWeight: "bold",
                },
              },
            }}
          />
        </Box>

        <Button className="contained-btn">send</Button>
      </Box>
    </Box>
  );
};
export default Contact;
