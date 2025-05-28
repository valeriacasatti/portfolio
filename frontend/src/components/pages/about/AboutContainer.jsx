import About from "./About";

const AboutContainer = () => {
  // send email
  const emailURL =
    "https://mail.google.com/mail/?view=cm&fs=1&to=valeria.casatti@gmail.com&su=Interested%20in%20your%20services&body=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20work.";

  const handleSendEmail = () => {
    window.open(emailURL, "_blank");
  };

  return <About handleSendEmail={handleSendEmail} />;
};

export default AboutContainer;
