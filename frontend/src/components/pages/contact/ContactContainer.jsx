import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import Contact from "./Contact";
import { useTranslation } from "react-i18next";

const ContactContainer = () => {
  const { t } = useTranslation();

  const formik = useFormik({
    // values
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    // validations
    validationSchema: Yup.object({
      name: Yup.string().required(t("contact_name_alert")),
      email: Yup.string()
        .email(t("contact_invalid_email"))
        .required(t("contact_email_alert")),
      message: Yup.string()
        .required(t("contact_message_alert"))
        .min(10, t("contact_message_length")),
    }),
    // submit
    onSubmit: async (values, actions) => {
      // messages
      const successMessage = t("send_success");
      const errorMessage = t("send_error");
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/contact`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          }
        );
        if (response.ok) {
          actions.setStatus(successMessage);
          actions.resetForm();
          toast(`${successMessage} ✨`);
        } else {
          actions.setStatus(errorMessage);
        }
      } catch (e) {
        actions.setStatus(errorMessage, e);
      } finally {
        actions.setSubmitting(false);
      }
    },
    validateOnChange: false,
  });

  return (
    <>
      <Contact formik={formik} />
    </>
  );
};

export default ContactContainer;
