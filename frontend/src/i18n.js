import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// traslates
const resources = {
  en: {
    translation: {
      // nav items
      home: "Home",
      about: "About me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      // home page
      hi_there: "Hi there!",
      greeting: "I’m Valeria Casatti",
      developer: "Junior Full Stack Developer",
      home_text:
        "Passionate about advancing my expertise in web development and eager to embark on a journey of continuous learning and further professionalization in the tech industry.",
      view_cv: "view cv",
      hire_me: "hire me",
      // about page
      about_text:
        "I’m a passionate Full Stack Web Developer with a focus on creating innovative and efficient web applications. With a solid foundation in both Frontend and Backend development, I thrive in collaborative environments where I can contribute to impactful projects. I have a keen interest in continuous learning and am always exploring new technologies to enhance my skill set.",
      // projects page
      project1_description:
        "E-commerce application built with React and Material UI, designed for a course project. It implements core e-commerce functionalities.",
      project2_description:
        "Innovative system designed to optimize and simplify technical assistance and remote maintenance monitoring of equipment efficiently.",
      project3_description:
        "A basic e-commerce interface built with vanilla JavaScript. This project simulates key features like a dynamic cart and product catalog.",
      project4_description:
        "A backend for an e-commerce site using Node and MongoDB. Includes user auth, product APIs, and secure data handling for a full-stack app.",
      // contact page
      contact_name_label: "Name",
      contact_name_placeholder: "Your full name",
      contact_email_placeholder: "me@company.com",
      contact_message_label: "Message",
      contact_message_placeholder: "Your message",
      send_button: "send",
      sending_button: "sending...",
      send_success: "Email sent successfully",
      send_error: "Something went wrong. Please try again",
      contact_name_alert: "Please fill in your name",
      contact_email_alert: "Please fill in your email",
      contact_invalid_email: "Invalid email address",
      contact_message_alert: "Please type a message",
      contact_message_length: "Message should be at least 10 characters",
      // footer
      rights: "All rights reserved",
    },
  },
  es: {
    translation: {
      // nav items
      home: "Inicio",
      about: "Acerca de mi",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      // home page
      hi_there: "Hola!",
      greeting: "Soy Valeria Casatti",
      developer: "Desarrolladora Full Stack Junior",
      home_text:
        "Apasionada por avanzar en mi experiencia en desarrollo web y ansiosa por embarcarme en un viaje de aprendizaje continuo y profesionalizarme aún más en la industria tecnológica.",
      view_cv: "ver cv",
      hire_me: "contratame",
      // about page
      about_text:
        "Soy una apasionada Desarrolladora Full Stack, centrada en la creación de aplicaciones web innovadoras y eficientes. Con una sólida base en desarrollo Frontend y Backend, me desenvuelvo en entornos colaborativos donde puedo contribuir a proyectos de gran impacto. Me interesa mucho el aprendizaje continuo y siempre estoy explorando nuevas tecnologías para mejorar mis habilidades.",
      // projects page
      project1_description:
        "Aplicación e-commerce desarrollada con React y Material UI, diseñada para un proyecto de curso. Implementa las principales funcionalidades de un e-commerce.",
      project2_description:
        "Sistema innovador diseñado para optimizar y simplificar la asistencia técnica y el monitoreo remoto de mantenimiento de equipos de manera eficiente.",
      project3_description:
        "Interfaz básica de e-commerce creada con vanilla JavaScript. Este proyecto simula funciones clave como un carrito dinámico y un catálogo de productos.",
      project4_description:
        "Aplicación backend para un sitio e-commerce que utiliza Node y MongoDB. Incluye autenticación de usuarios, API de productos y gestión segura de datos para una aplicación integral.",
      // contact page
      contact_name_label: "Nombre",
      contact_name_placeholder: "Tu nombre completo",
      contact_email_placeholder: "yo@empresa.com",
      contact_message_label: "Mensaje",
      contact_message_placeholder: "Tu mensaje",
      send_button: "Enviar",
      sending_button: "Enviando...",
      send_success: "Email enviado exitosamente",
      send_error: "Algo salió mal. Por favor intente de nuevo",
      contact_name_alert: "Por favor, ingrese su nombre",
      contact_email_alert: "Por favor, ingrese su email",
      contact_invalid_email: "Email invalido",
      contact_message_alert: "Por favor, escribe un mensaje",
      contact_message_length: "El mensaje debe tener al menos 10 caracteres",
      // footer
      rights: "Todos los derechos reservados",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
