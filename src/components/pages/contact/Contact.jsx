/* eslint-disable react/prop-types */
import { Box, Typography, TextField } from "@mui/material";
import Button from "../../common/button/Button";

import "./contact.css";

const Contact = ({ handleChange, handleSubmit }) => {
  return (
    <Box>
      <Typography variant="h2" mb={3}>
        Contact
      </Typography>

      {/* form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        className="contact-form"
        sx={{ "& .MuiTextField-root": { mb: 2 } }}
      >
        <Box>
          <Typography
            variant="body2"
            htmlFor="name"
            sx={{ mb: 1, textAlign: "left" }}
          >
            Name *
          </Typography>
          <TextField
            id="name"
            name="name"
            // value={formData.name}
            onChange={handleChange}
            fullWidth
            className="contact-textfield"
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

          <Typography
            variant="body2"
            htmlFor="email"
            sx={{ mb: 1, textAlign: "left" }}
          >
            Email *
          </Typography>
          <TextField
            id="email"
            name="email"
            // value={formData.email}
            onChange={handleChange}
            fullWidth
            className="contact-textfield"
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

          <Typography
            variant="body2"
            htmlFor="message"
            sx={{ mb: 1, textAlign: "left" }}
          >
            Message *
          </Typography>
          <TextField
            id="message"
            name="message"
            // value={formData.message}
            onChange={handleChange}
            fullWidth
            className="contact-textfield"
            placeholder="Your message..."
            multiline
            rows={3}
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

        <Button type="submit" className="contained-btn">
          send
        </Button>
      </Box>
    </Box>
  );
};
export default Contact;
