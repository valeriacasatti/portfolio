import { ListItem, ListItemText } from "@mui/material";
import { Link } from "react-scroll";

const NavLinks = ({ handleClose, links, isMobile }) => {
  return links.map((link) =>
    isMobile ? (
      <ListItem key={link.to} className="mobile-menu-list">
        <ListItemText>
          <Link
            onClick={handleClose}
            to={link.to}
            smooth={true}
            duration={500}
            spy={true}
            offset={-180}
            activeClass="active"
          >
            {link.label}
          </Link>
        </ListItemText>
      </ListItem>
    ) : (
      <Link
        key={link.to}
        to={link.to}
        smooth={true}
        duration={500}
        spy={true}
        offset={-180}
        activeClass="active"
      >
        {link.label}
      </Link>
    )
  );
};

export default NavLinks;
