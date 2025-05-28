import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import Contact from "./Contact";

const ContactContainer = () => {
  const formik = useFormik({
    // values
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    // validations
    validationSchema: Yup.object({
      name: Yup.string().required("Please fill in your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please fill in your email"),
      message: Yup.string()
        .required("Please type a message")
        .min(10, "Message should be at least 10 characters"),
    }),
    // submit
    onSubmit: async (values, actions) => {
      // messages
      const successMessage = "Email sent successfully";
      const errorMessage = "Something went wrong. Please try again";
      try {
        const response = await fetch("http://localhost:8080/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
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
