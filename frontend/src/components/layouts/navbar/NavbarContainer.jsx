// import { useTranslation } from "react-i18next";
// import Navbar from "./Navbar";
// import { useMemo, useState } from "react";
// import spanishFlag from "/languages/argentina.png";
// import englishFlag from "/languages/estados-unidos.png";

// const NavbarContainer = () => {
//   const { t, i18n } = useTranslation();

//   //change language
//   const handleChangeLanguage = (e) => {
//     i18n.changeLanguage(e.target.value);
//   };

//   // current language
//   const currentLanguage = i18n.language;

//   const flagMap = {
//     es: spanishFlag,
//     en: englishFlag,
//   };

//   // navbar mobile
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const links = useMemo(
//     () => [
//       { to: "home", label: t("home") },
//       { to: "about", label: t("about") },
//       { to: "skills", label: t("skills") },
//       { to: "projects", label: t("projects") },
//       { to: "contact", label: t("contact") },
//     ],
//     [t]
//   );

//   return (
//     <Navbar
//       handleDrawerToggle={handleDrawerToggle}
//       mobileOpen={mobileOpen}
//       handleChangeLanguage={handleChangeLanguage}
//       currentLanguage={currentLanguage}
//       flagMap={flagMap}
//       links={links}
//     />
//   );
// };

// export default NavbarContainer;
