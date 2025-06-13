import { useTranslation } from "react-i18next";
import spanishFlag from "/languages/argentina.png";
import englishFlag from "/languages/estados-unidos.png";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";

const LanguageSelectorContainer = () => {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleLanguageMenu = (event) => {
    setAnchorEl(event.target);
  };

  //change language
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

  // current language
  const currentLanguage = i18n.language;
  // opossite language
  const oppositeLanguage = currentLanguage === "es" ? "en" : "es";

  const flagMap = {
    es: spanishFlag,
    en: englishFlag,
  };

  return (
    <LanguageSelector
      handleChangeLanguage={handleChangeLanguage}
      handleLanguageMenu={handleLanguageMenu}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      flagMap={flagMap}
      currentLanguage={currentLanguage}
      oppositeLanguage={oppositeLanguage}
    />
  );
};

export default LanguageSelectorContainer;
