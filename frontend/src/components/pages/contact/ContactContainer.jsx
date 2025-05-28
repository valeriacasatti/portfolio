import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import Contact from "./Contact";

const ContactContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
      toast("Correo enviado exitosamente ✨");
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please fill in your name"),
      email: Yup.string()
        .email("Your email must be a valid email")
        .required("Please fill in your email"),
      message: Yup.string().required("Please type a message"),
    }),
    validateOnChange: false,
  });

  return (
    <>
      <Contact
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
      />
    </>
  );
};

export default ContactContainer;
