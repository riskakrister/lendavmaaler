import { useState } from "react";

import logoBlack from "../img/lendavmaalerLogoBlack.svg";
import logoWhite from "../img/lendavmaalerLogoWhite.svg";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { IconContext } from "react-icons";

import styles from "./Navbar.module.css";
import globalStyles from "../App.module.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleFullscreenNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav
      className={navOpen ? `${styles.nav} ${styles.nav_active}` : styles.nav}
    >
      <ul className={`${globalStyles.flex_row} ${styles.nav__ul}`}>
        <li className={styles.ul__li}>
          <img
            src={navOpen ? logoWhite : logoBlack}
            alt="Lendav Maaler Logo"
          ></img>
        </li>
        <li className={styles.ul__li}>
          <h2>Book a Table</h2>
        </li>
        <li className={styles.ul__li}>
          <span>en</span>
        </li>
        <li className={`${styles.ul__li} ${styles.language}`}>
          <IconContext.Provider value={{ size: "36px" }}>
            {navOpen ? (
              <IoIosClose onClick={toggleFullscreenNav} />
            ) : (
              <IoIosMenu onClick={toggleFullscreenNav} />
            )}
          </IconContext.Provider>
        </li>
      </ul>

      {navOpen && (
        <div
          className={`${globalStyles.flex_column} ${styles.fullscreenNavLinks}`}
        >
          <a href="!#">Menu</a>
          <a href="!#">About Us</a>
          <a href="!#">Interior</a>
          <a href="!#">News</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
