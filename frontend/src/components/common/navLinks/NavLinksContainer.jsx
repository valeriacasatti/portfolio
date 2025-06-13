/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import NavLinks from "./NavLinks";

const NavLinksContainer = ({ isMobile = false, handleClick }) => {
  const { t } = useTranslation();

  const links = useMemo(
    () => [
      { to: "home", label: t("home") },
      { to: "about", label: t("about") },
      { to: "skills", label: t("skills") },
      { to: "projects", label: t("projects") },
      { to: "contact", label: t("contact") },
    ],
    [t]
  );
  return (
    <NavLinks handleClick={handleClick} links={links} isMobile={isMobile} />
  );
};

export default NavLinksContainer;
