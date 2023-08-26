import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { MoneyRounded } from "@mui/icons-material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "#home_page",
    },
    {
      text: "A propos",
      icon: <InfoIcon />,
      link: "#about_page",
    },
    {
      text: "Prix",
      icon: <MoneyRounded />,
      link: "#pricing_page",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "https://tawk.to/chat/64d6b264cc26a871b02ebf4f/1h7jahmvb",
      external: true,
    },
  ];
  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <h1>YEYE</h1>
      </div>
      {/* lien de l'application */}
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <a
            key={item.text}
            href={item.link}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noopener noreferrer" : ""}
          >
            {item.text}
          </a>
        ))}
        <a href="https://www.ultra-glk.com" target="_blank" rel="noopener noreferrer">
          <button className="primary-button">
            Tester maintenant
          </button>
        </a>
      </div>
      {/* hamburger */}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      {/* menu mobile */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.link}
                  // gestion des liens externes en toute simplicite
                  target={item.external ? "_blank" : ""}
                  rel={item.external ? "noopener noreferrer" : ""}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
