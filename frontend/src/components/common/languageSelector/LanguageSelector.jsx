/* eslint-disable react/prop-types */
import { Avatar, Button, Menu, MenuItem } from "@mui/material";

const LanguageSelector = ({
  handleChangeLanguage,
  handleLanguageMenu,
  anchorEl,
  setAnchorEl,
  flagMap,
  currentLanguage,
  oppositeLanguage,
}) => {
  return (
    <>
      <Button onClick={handleLanguageMenu} sx={{ p: 0 }}>
        <Avatar
          src={flagMap[currentLanguage]}
          alt={currentLanguage}
          sx={{ width: 24, height: 24, borderRadius: 0 }}
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleChangeLanguage(oppositeLanguage)}>
          <Avatar
            src={flagMap[oppositeLanguage]}
            alt={oppositeLanguage}
            sx={{ width: 24, height: 24, borderRadius: 0 }}
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSelector;
