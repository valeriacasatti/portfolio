// import { useState } from "react";

import Contact from "./Contact";

const ContactContainer = () => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;

  //     setFormData({ ...formData, [name]: value });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (!formData.name || !formData.email || !formData.message) {
  //       alert("please fill in all fields");
  //       return;
  //     }

  //     try {
  //       const response = await fetch("/api/contact", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       });

  //       if (!response.ok) {
  //         throw new Error("algo salio mal");
  //       }

  //       alert("mensaje enviado con exito");
  //       setFormData({ name: "", email: "", message: "" });
  //     } catch (error) {
  //       console.log("error al enviar el mensaje", error);
  //       alert("error al enviar el mensaje");
  //     }
  //   };

  return (
    <>
      <Contact />
    </>
  );
};

export default ContactContainer;
