/* eslint-disable react/prop-types */
import { Box, Typography, TextField } from "@mui/material";
import Button from "../../common/button/Button";

import "./contact.css";
import { ToastContainer, Zoom } from "react-toastify";
import { useTranslation } from "react-i18next";

const Contact = ({ formik }) => {
  const { t } = useTranslation();

  return (
    <Box textAlign="center">
      <Typography variant="h2" mb={3}>
        {t("contact")}
      </Typography>
      {/* form */}
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        autoComplete="off"
        className="contact-form"
        sx={{ "& .MuiTextField-root": { mb: 2 } }}
      >
        <Box>
          {/* name */}
          <Typography
            variant="body2"
            htmlFor="name"
            sx={{ mb: 1, textAlign: "left" }}
          >
            <span>{t("contact_name_label")} *</span>
            {/* error message*/}
            <span className="error-message">{formik.errors.name}</span>
          </Typography>
          <TextField
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            className="contact-textfield"
            placeholder={t("contact_name_placeholder")}
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

          {/* email */}
          <Typography
            variant="body2"
            htmlFor="email"
            sx={{ mb: 1, textAlign: "left" }}
          >
            <span>Email *</span>
            {/* error message*/}
            <span className="error-message">{formik.errors.email}</span>
          </Typography>
          <TextField
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            className="contact-textfield"
            placeholder={t("contact_email_placeholder")}
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
          {/* message */}
          <Typography
            variant="body2"
            htmlFor="message"
            sx={{ mb: 1, textAlign: "left" }}
          >
            <span>{t("contact_message_label")} *</span>
            {/* error message*/}
            <span className="error-message">{formik.errors.message}</span>
          </Typography>
          <TextField
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            className="contact-textfield"
            placeholder={t("contact_message_placeholder")}
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

        <Button
          type="submit"
          disabled={formik.isSubmitting}
          className="contained-btn"
        >
          {formik.isSubmitting ? t("sending_button") : t("send_button")}
        </Button>
      </Box>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        closeButton={false}
        transition={Zoom}
        toastClassName="custom-toast"
      />
    </Box>
  );
};
export default Contact;
